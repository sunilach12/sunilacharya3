import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWebsite(url: string) {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    return /\.[a-z]{2,}$/i.test(parsed.hostname);
  } catch {
    return false;
  }
}

const rateLimitMap = new Map<string, { count: number; start: number }>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now - record.start > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }
  record.count += 1;
  return record.count > MAX_REQUESTS;
}

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const {
      contactType,
      name,
      email,
      phone,
      companyName,
      companyWebsite,
      subject,
      message,
    } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const type = contactType === "company" ? "company" : "individual";

    if (type === "company") {
      if (!companyName || !companyName.trim()) {
        return NextResponse.json(
          { error: "Company name is required." },
          { status: 400 }
        );
      }
      if (!companyWebsite || !isValidWebsite(companyWebsite)) {
        return NextResponse.json(
          { error: "Please provide a valid company website (e.g. https://company.com)." },
          { status: 400 }
        );
      }
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await supabase.from("otp_verifications").delete().eq("email", email);

    const { error: dbError } = await supabase.from("otp_verifications").insert([
      {
        email,
        code,
        name,
        phone: phone || null,
        contact_type: type,
        company_name: type === "company" ? companyName : null,
        company_website: type === "company" ? companyWebsite : null,
        subject: subject || null,
        message,
        expires_at: expiresAt.toISOString(),
      },
    ]);

    if (dbError) {
      console.error("OTP insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to start verification. Please try again." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <contact@sunilacharya3.com.np>",
      to: email,
      subject: "Your verification code",
      html: `
        <div style="font-family: sans-serif;">
          <h2>Verify your message</h2>
          <p>Enter this code on the site to send your message:</p>
          <p style="font-size: 32px; font-weight: bold; letter-spacing: 6px;">${code}</p>
          <p>This code expires in 10 minutes.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send-code error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}