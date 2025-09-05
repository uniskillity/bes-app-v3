import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { userName, userEmail, userMessage } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mohdalimeer06@gmail.com",
        pass: process.env.APP_PASSWORD, // keep secure in .env.local
      },
    });

    // 1. Email to you (admin)
    const adminMail = {
      from: "mohdalimeer06@gmail.com",
      to: "mohdalimeer06@gmail.com",
      subject: `📩 New Contact Message from ${userName}`,
      text: `You received a new message from BulkSender Contact Form:\n\nName: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${userMessage}`,
    };

    // 2. Confirmation email to user
    const userMail = {
      from: "mohdalimeer06@gmail.com",
      to: userEmail,
      subject: "✅ We received your message - BulkSender",
      text: `Hi ${userName},\n\nThanks for reaching out to BulkSender. Here’s a copy of your message:\n\n"${userMessage}"\n\nWe’ll get back to you soon.\n\nBest,\nBulkSender Team`,
    };

    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
