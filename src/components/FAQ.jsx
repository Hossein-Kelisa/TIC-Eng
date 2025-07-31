import React from 'react';

const faqs = [
  { question: 'How can I contact support?', answer: 'You can contact us through the contact form or email.' },
  { question: 'What is your refund policy?', answer: 'We offer a full refund within 30 days if you are not satisfied.' },
  { question: 'Do you offer custom services?', answer: 'Yes, please contact us to discuss your needs.' },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions</h3>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontWeight: '600' }}>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
