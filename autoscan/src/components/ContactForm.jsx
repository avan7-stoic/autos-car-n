import React from "react";
//import "../styles/contact.css";

function ContactForm() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p><strong>Phone:</strong> +123 456 789</p>
        <p><strong>Email:</strong> info@autoscan.com</p>
        <p><strong>Hours:</strong> Mon–Fri 8AM–6PM, Sat 9AM–4PM</p>
      </div>
    </section>
  );
}

export default ContactForm;
