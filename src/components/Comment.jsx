import React from 'react';
import './Comment.css';
import Fades from './Fades';

const testimonials = [
  { name: 'Adel', text: 'Great service, very professional!' },
  { name: 'Sara', text: 'Quick and reliable support.' },
  { name: 'Hossein', text: 'I highly recommend them.' },
];

function Comment() {
  return (
    <section id="comment" className="comment-section">
      <Fades animationType="fadeZoom">
        <h3 className="comment-title">What Our Clients Say</h3>
      </Fades>

      <div className="comment-grid">
        {testimonials.map((item, index) => (
          <Fades animationType="fadeSlide" key={index}>
            <div className="comment-card">
              <p className="comment-text">"{item.text}"</p>
              <p className="comment-name">{item.name}</p>
            </div>
          </Fades>
        ))}
      </div>
    </section>
  );
}

export default Comment;
