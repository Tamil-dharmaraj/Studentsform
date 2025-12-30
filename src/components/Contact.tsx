// src/components/Contact.tsx
import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nMessage: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none" }}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
