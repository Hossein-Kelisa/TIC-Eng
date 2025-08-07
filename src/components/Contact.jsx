import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h3 className="contact-title">Get in Touch</h3>
        <p className="contact-description">
          We'd love to hear from you! Reach out with questions, projects, or partnership opportunities.
        </p>

        <div className="contact-info">
          <p className="contact-detail">
            📧 <strong>Email:</strong>{' '}
            <a href="mailto:contact@tic-eng.com">contact@tic-eng.com</a>
          </p>
          <p className="contact-detail">
            📞 <strong>Phone:</strong> +98 xxx xxx xxxx
          </p>
          <p className="contact-detail">
            📍 <strong>Address:</strong> TIC Engineering, [Your full address]
          </p>
        </div>

        <a href="mailto:contact@tic-eng.com" className="button-primary">Send Us an Email</a>
      </div>
    </section>
  );
}

export default Contact;
