"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [senderEmail, setSenderEmail] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [emails, setEmails] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [subscriber, setSubscriber] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !appPassword || !emails || !subject || !message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }
    setStatus(
      `✅ Emails sent from ${senderEmail} to ${emails.split(",").length} recipients`
    );
    setSenderEmail("");
    setAppPassword("");
    setEmails("");
    setSubject("");
    setMessage("");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriber) {
      setSubscribeStatus("⚠️ Please enter your email.");
      return;
    }
    setSubscribeStatus(`✅ Subscribed with ${subscriber}`);
    setSubscriber("");
  };

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a
          href="/"
          // target="_blank"
          rel="noopener noreferrer"
          className="logo"
        >
          BulkSender
        </a>
     
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero with Bulk Sender Form */}
      <section className="hero">
        <h1 className="hero-title">Send Bulk Emails in Seconds 🚀</h1>
        <p className="hero-subtitle">
          A minimal and fast AI-powered bulk email sender built for startups,<br />
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
        Ali -   
        <a
          href="https://www.linkedin.com/in/spaqootech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i> SpaqooTech</i>
        </a>
      </footer>
    </div>
  );
}
