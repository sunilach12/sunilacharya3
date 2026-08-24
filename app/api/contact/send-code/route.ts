import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWebsite(url: string) {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    // Must have a real domain with a dot (e.g. example.com), not just "https://x"
    return /\.[a-z]{2,}$/i.test(parsed.hostname);
  } catch {
    return false;
  }
}

// Simple in-memory rate limiter per IP (resets on server restart —
// fine for a contact form, upgrade to Redis if you need it to be
// bulletproof across serverless instances)
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

    // Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // valid 10 minutes

    // Remove any previous pending codes for this email, then insert the new one
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