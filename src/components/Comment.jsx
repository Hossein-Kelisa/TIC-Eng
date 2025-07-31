import React from 'react';
import './Comment.css';

const testimonials = [
  { name: 'Adel', text: 'Great service, very professional!' },
  { name: 'Sara', text: 'Quick and reliable support.' },
  { name: 'Hossein', text: 'I highly recommend them.' },
];

function Comment() {
  return (
    <section id="comment" className="comment-section">
      <h3 className="comment-title">What Our Clients Say</h3>
      <div className="comment-container">
        {testimonials.map((item, index) => (
          <div key={index} className="comment-card">
            <p className="comment-text">"{item.text}"</p>
            <p className="comment-name">- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comment;
