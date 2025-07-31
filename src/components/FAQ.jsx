import React from 'react';
import './FAQ.css';

const faqs = [
  { question: 'How can I contact support?', answer: 'You can contact us through the contact form or email.' },
  { question: 'What is your refund policy?', answer: 'We offer a full refund within 30 days if you are not satisfied.' },
  { question: 'Do you offer custom services?', answer: 'Yes, please contact us to discuss your needs.' },
];

function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4 className="faq-question">{faq.question}</h4>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
