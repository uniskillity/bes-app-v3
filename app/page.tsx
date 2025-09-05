"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [senderEmail, setSenderEmail] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [emails, setEmails] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!senderEmail || !appPassword || !emails || !subject || !message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: senderEmail,
          password: appPassword,
          to: emails,
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus(`✅ Emails sent to ${emails.split(",").length} recipients`);
        setSenderEmail("");
        setAppPassword("");
        setEmails("");
        setSubject("");
        setMessage("");
      } else {
        setStatus(`❌ Failed: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send email. Check server logs.");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link href="/" className="logo">
          BulkSender
        </Link>

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero with Bulk Sender Form */}
      <section className="hero">
        <h1 className="hero-title">Send Bulk Emails in Seconds 🚀</h1>
        <p className="hero-subtitle">
          A minimal and fast AI-powered bulk email sender built for startups,
          <br />
          businesses, and freelancers.
        </p>

        <form className="form-box" onSubmit={handleSend}>
          <input
            type="email"
            placeholder="Sender Email (e.g. yourname@gmail.com)"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="App Password"
            value={appPassword}
            onChange={(e) => setAppPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Recipient Emails (comma separated)"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            rows={4}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Emails</button>
          {status && <p className="status">{status}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} BulkSender. Built by{" "}
        Ali –{" "}
        <a
          href="https://www.linkedin.com/in/spaqootech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>SpaqooTech</i>
        </a>
      </footer>
    </div>
  );
}
