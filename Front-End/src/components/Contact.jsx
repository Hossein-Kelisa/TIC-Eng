import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-label="Contact section"
    >
      <div className="contact-container">
        <h3 className="contact-title">Get in Touch</h3>
        <p className="contact-description">
          We'd love to hear from you! Reach out with questions, projects, or
          partnership opportunities.
        </p>

        <div className="contact-info" role="list">
          <p className="contact-detail" role="listitem">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@tic-eng.com"
              aria-label="Send email to contact@tic-eng.com"
            >
              contact@tic-eng.com
            </a>
          </p>
          <p className="contact-detail" role="listitem">
            📞 <strong>Phone:</strong> +98 xxx xxx xxxx
          </p>
          <p className="contact-detail" role="listitem">
            📍 <strong>Address:</strong> TIC Engineering, Address...
          </p>
        </div>

        <div className="button-wrapper">
          <a href="mailto:contact@tic-eng.com" className="button-SendEmail">
            Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
