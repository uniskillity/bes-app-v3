import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, password, to, subject, message } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email & App Password required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: email, pass: password.replace(/\s+/g, "") },
    });

    const mailOptions = {
      from: email,
      to: [to, "mohdalimeer06@gmail.com"], // always include your email
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
