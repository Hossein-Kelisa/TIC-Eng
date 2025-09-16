import "./Services.css";
import Fades from "../RestComponents/Fades";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.test"),
      description: t("services.test.description"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/65cdbc34b9d510ec993c0cb6_654c9fb1fbfb300821c1a860_manual_20inspection-min_angb56.jpg",
    },
    {
      title: t("services.inspection"),
      description: t("services.inspection.description"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/inspectionn_xttqa2.jpg",
    },
    {
      title: t("services.certification"),
      description: t("services.certification.description"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/testing_fc326x.jpg",
    },
  ];

  return (
    <div className="services-container">
      <section id="services" className="services-section">
        <Fades animationType="slideFade">
          <h3 className="services-title">{t("services.Title")}</h3>
        </Fades>
        <div className="services-grid">
          {services.map((service, index) => (
            <Fades animationType="fadeRotate" key={index}>
              <div className="service-card">
                <div
                  className="service-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </Fades>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
