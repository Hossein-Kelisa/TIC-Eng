import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h3 className="section-title">Contact Us</h3>
        <p className="contact-detail">
          Email: <a href="mailto:contact@tic-eng.com">contact@tic-eng.com</a>
        </p>
        <p className="contact-detail">Phone: +98 xxx xxx xxxx</p>
        <p className="contact-detail">Address: TIC Engineering, [Your full address]</p>
        <a href="mailto:contact@tic-eng.com" className="button-primary">Send Email</a>
      </div>
    </section>
  );
}

export default Contact;
