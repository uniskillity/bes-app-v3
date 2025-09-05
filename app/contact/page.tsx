"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (demo only)");
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input placeholder="Your Name" name="name" value={form.name} onChange={handleChange} required />
        <input placeholder="Your Email" name="email" value={form.email} onChange={handleChange} required />
        <textarea placeholder="Your Message" name="message" rows={4} value={form.message} onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
