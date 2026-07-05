import React, { useState } from "react";
import { profile } from "../data";
import Icon from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // GitHub Pages is static hosting only — there's no server to receive this
  // form, so we build a mailto: link instead. It opens the person's own
  // mail app with everything pre-filled and ready to send.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in your name, email, and a message.");
      return;
    }
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio contact"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("Opening your email client…");
  };

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="card contact-card contact-wrap">
          <div className="contact-left">
            <p className="eyebrow">// let's connect</p>
            <h2>Ready to build something great?</h2>
            <p>
              I'm actively looking for <strong>full-time and contract roles</strong> in
              full-stack and backend engineering. Send a message — I reply within 24 hours.
            </p>
            <div className="contact-info">
              <a href={`mailto:${profile.email}`}>
                <span className="ic"><Icon name="mail" size={17} /></span> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}>
                <span className="ic"><Icon name="phone" size={17} /></span> {profile.phone}
              </a>
              <a href={profile.github} target="_blank" rel="noopener">
                <span className="ic"><Icon name="github" size={17} /></span> {profile.githubLabel}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener">
                <span className="ic"><Icon name="linkedin" size={17} /></span> {profile.linkedinLabel}
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <span className="ic"><Icon name="pin" size={17} /></span> {profile.location}
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@company.com" />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Collaboration" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the role or project…" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                Send Message
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}