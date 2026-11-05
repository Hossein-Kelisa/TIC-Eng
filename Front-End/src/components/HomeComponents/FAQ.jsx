
import { useState } from "react";
import "./FAQ.css";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();

  // Selected category
  const [activeCategory, setActiveCategory] = useState("general");

  // Selected question
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ categories and questions
  const categories = [
    {
      id: "general",
      title: t("faq.categories.general"),
      questions: [1, 2, 3],
    },
    {
      id: "inspection",
      title: t("faq.categories.inspection"),
      questions: [4, 5, 6],
    },
    {
      id: "engineering",
      title: t("faq.categories.engineering"),
      questions: [7, 8, 9],
    },
    {
      id: "conformity",
      title: t("faq.categories.conformity"),
      questions: [10, 11, 12],
    },
    {
      id: "contact",
      title: t("faq.categories.contact"),
      questions: [13, 14, 15],
    },
  ];

  // Get questions for the selected category
  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  );

  // Open or close a question
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Change category and close any previously opened question
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenIndex(null);
  };

  return (
    <section id="faq" className="faq-section">

      <h3 className="faq-title">{t("faq.title")}</h3>

      {/* Category navigation */}
      <div className="faq-categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`faq-category ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
            aria-pressed={activeCategory === category.id}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Questions and answers */}
      <div className="faq-list">
        {selectedCategory.questions.map((number) => (
          <div
            key={number}
            className={`faq-item ${
              openIndex === number ? "open" : ""
            }`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(number)}
              aria-expanded={openIndex === number}
            >
              <span>{t(`faq.question${number}`)}</span>

              <span className="faq-icon">
                {openIndex === number ? "−" : "+"}
              </span>
            </button>

            {openIndex === number && (
              <p className="faq-answer">
                {t(`faq.answer${number}`)}
              </p>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}

export default FAQ;
