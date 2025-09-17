import { useState } from "react";
import "./FAQ.css";
import { useTranslation } from "react-i18next";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index); // open new one
    }
  };

  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <h3 className="faq-title">{t('faq.title')}</h3>
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
