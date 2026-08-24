import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Missing email or code." },
        { status: 400 }
      );
    }

    // Look up the pending verification
    const { data: pending, error: fetchError } = await supabase
      .from("otp_verifications")
      .select("*")
      .eq("email", email)
      .eq("code", code)
      .single();

    if (fetchError || !pending) {
      return NextResponse.json(
        { error: "Invalid code. Please check and try again." },
        { status: 400 }
      );
    }

    if (new Date(pending.expires_at) < new Date()) {
      // Clean up the expired row
      await supabase.from("otp_verifications").delete().eq("id", pending.id);
      return NextResponse.json(
        { error: "This code has expired. Please request a new one." },
        { status: 400 }
      );
    }

    // Code is valid — save the real message
    const { data: savedRow, error: insertError } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: pending.name,
          email: pending.email,
          phone: pending.phone,
          contact_type: pending.contact_type,
          company_name: pending.company_name,
          company_website: pending.company_website,
          subject: pending.subject,
          message: pending.message,
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Message insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to save your message. Please try again." },
        { status: 500 }
      );
    }

    // Notify YOU (the site owner) that a verified message came in.
    // If this fails, we still return success since the message IS saved
    // in the database — you can always check Supabase directly.
    try {
      await resend.emails.send({
        from: `Portfolio Contact <contact@sunilacharya3.com.np>`,
        to: process.env.CONTACT_EMAIL!,
        replyTo: pending.email,
        subject: pending.subject || `New verified message from ${pending.name}`,
        html: `
          <h2>📩 New Verified Portfolio Contact</h2>
          <p><strong>Type:</strong> ${pending.contact_type === "company" ? "Company" : "Individual"}</p>
          <p><strong>Name:</strong> ${pending.name}</p>
          <p><strong>Email:</strong> ${pending.email}</p>
          <p><strong>Phone:</strong> ${pending.phone || "Not provided"}</p>
          ${
            pending.contact_type === "company"
              ? `<p><strong>Company:</strong> ${pending.company_name}</p>
                 <p><strong>Website:</strong> ${pending.company_website}</p>`
              : ""
          }
          <hr />
          <p>${pending.message}</p>
        `,
      });
    } catch (notifyError) {
      console.error("Owner notification email failed (message still saved):", notifyError);
    }

    // Send a friendly confirmation email to the VISITOR.
    // Also non-blocking — if this fails, the message is still saved
    // and you've already been notified.
    try {
      await resend.emails.send({
        from: `Sunil Acharya <contact@sunilacharya3.com.np>`,
        to: pending.email,
        subject: "Thank you for reaching out!",
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>Thank you for contacting us${pending.name ? `, ${pending.name}` : ""}!</h2>
            <p>We've received your message and will reach out to you shortly.</p>
            <p style="color: #666; font-size: 14px;">
              For your reference, here's what you sent:
            </p>
            <blockquote style="border-left: 3px solid #06b6d4; padding-left: 12px; color: #444;">
              ${pending.message}
            </blockquote>
            <p>Best regards,<br/>Sunil Acharya</p>
          </div>
        `,
      });
    } catch (confirmError) {
      console.error("Visitor confirmation email failed (message still saved):", confirmError);
    }

    // Clean up the used OTP row
    await supabase.from("otp_verifications").delete().eq("id", pending.id);

    return NextResponse.json({ success: true, data: savedRow });
  } catch (error) {
    console.error("Verify-code error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}