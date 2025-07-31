import React from 'react';

const testimonials = [
  { name: 'Ali', text: 'Great service, very professional!' },
  { name: 'Sara', text: 'Quick and reliable support.' },
  { name: 'Reza', text: 'I highly recommend them.' },
];

function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '80px 20px', background: '#eef6fb', textAlign: 'center' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>What Our Clients Say</h3>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {testimonials.map((item, index) => (
          <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <p style={{ fontStyle: 'italic' }}>"{item.text}"</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
