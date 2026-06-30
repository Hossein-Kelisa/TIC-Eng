import "./Certificates.css";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">{t("certificates.title")}</h2>
        <hr className="certificates-divider" />

        <div className="certificates-inner-container">
          <div className="certificates-images">
            <img
              src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/certificates2_dhzyct.jpg"
              alt="TIC Engineering Certificates1"
              className="certificates-image"
            />
            <img
              src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/certificates_rluari.jpg"
              alt="TIC Engineering Certificates2"
              className="certificates-image"
            />
            <img
              src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/certificates_3_yshdxc.jpg"
              alt="TIC Engineering Certificates3"
              className="certificates-image"
            />
          </div>
          <div className="certificates-images">
            <img
              src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/certificates2_dhzyct.jpg"
              alt="TIC Engineering Certificates1"
              className="certificates-image"
            />
            <img
              src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/certificates_rluari.jpg"
              alt="TIC Engineering Certificates2"
              className="certificates-image"
            />
            <img
              src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/certificates_3_yshdxc.jpg"
              alt="TIC Engineering Certificates3"
              className="certificates-image"
            />
          </div>
        </div>
        <hr className="certificates-divider" />
      </div>
    </section>
  );
};

export default Certificates;
