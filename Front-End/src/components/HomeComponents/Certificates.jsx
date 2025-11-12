import "./Certificates.css";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">{t("certificates.title")}</h2>
        <hr className="certificates-divider" />
        <p className="certificates-description">
          {t("certificates.description")}
        </p>
        <hr className="certificates-divider" />
      </div>
  </section>
  );
};

export default Certificates;
