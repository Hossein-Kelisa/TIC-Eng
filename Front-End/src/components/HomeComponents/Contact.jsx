import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="contact-section"
      aria-label="Contact section"
    >
      <div className="contact-container">
        <h3 className="contact-title">{t('contact.title')}</h3>
        <p className="contact-description">
          {t('contact.description')}
        </p>

        <div className="contact-info" role="list">
          <p className="contact-detail" role="listitem">
            📧 <strong>{t('contact.email')}</strong>{" "}
            <a
              href="mailto:contact@tic-eng.com"
              aria-label="Send email to contact@tic-eng.com"
            >
              contact@tic-eng.com
            </a>
          </p>
          <p className="contact-detail" role="listitem">
            📞 <strong>{t('contact.phone')}</strong> +98 xxx xxx xxxx
          </p>
          <p className="contact-detail" role="listitem">
            📍 <strong>{t('contact.address')}</strong>{t('contact.address.details')}
          </p>
        </div>

        <div className="button-wrapper">
          <a href="mailto:contact@tic-eng.com" className="button-SendEmail">
            {t('contact.send_email')}
          </a>
        </div>
      </div>
      {/* Container for Team Cards
      <div className="container1">
        <div className="card1"></div>
        <div className="card1 alt"></div>
      </div> */}
    </section>
  );
}

export default Contact;
