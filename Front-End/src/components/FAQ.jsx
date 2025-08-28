import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How can I contact support?",
    answer: "You can contact us through the contact form or email.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a full refund within 30 days if you are not satisfied.",
  },
  {
    question: "Do you offer custom services?",
    answer: "Yes, please contact us to discuss your needs.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index); // open new one
    }
  };

  return (
    <section id="faq" className="faq-section">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <h4
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFAQ(index);
                }
              }}
            >
              {faq.question}
            </h4>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
