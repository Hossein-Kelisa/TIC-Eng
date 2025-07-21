import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <section id="contact">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:info@tic-eng.com">info@tic-eng.com</a></p>
      <p>Phone: +xx xxx xxx xxxx</p>
      <p>Address: TIC address...</p>
      <a href="mailto:info@tic-eng.com" className="button-primary">Send Email</a>
    </section>
  );
}

export default Contact;
