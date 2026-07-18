import "./Services2.css";
import Fades from "../RestComponents/Fades";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "inspection",
      title: t("services.Inspection.title"),
      shortExplain: t("services.Inspection.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/65cdbc34b9d510ec993c0cb6_654c9fb1fbfb300821c1a860_manual_20inspection-min_angb56.jpg",
    },
    {
      id: "technical-supervision",
      title: t("services.Technical Supervision.title"),
      shortExplain: t("services.Technical Supervision.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-technical-supervision_zjsylr.jpg",
    },
    {
      id: "training",
      title: t("services.Training.title"),
      shortExplain: t("services.Training.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-training_koeu6e.jpg",
    },
    {
      id: "expert-assessment",
      title: t("services.Expert Assessment.title"),
      shortExplain: t("services.Expert Assessment.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-expert-assessment_mpyi2y.jpg",
    },
    {
      id: "standards-development",
      title: t("services.Standards Development.title"),
      shortExplain: t("services.Standards Development.shortExplain"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-standard-developmnet_nwdbfv.jpg",
    },
  ];

  return (
    <div className="services-section">
      <div className="services-container">
        <Fades>
          <h1 className="service-title">{t("services.title")}</h1>
        </Fades>

        <div className="services-card-container">
          {services.map((service) => (
            <article className="services-card-article" key={service.id}>
              <h2 className="services-card-title">{service.title}</h2>
              <img
                className="services-card-image"
                src={service.image}
                alt={service.title}
              />

              <div className="services-card-data">

                  <span className="services-card-description">
                    {service.shortExplain}
                  </span>

                  {/* <h2 className="services-card-title">{service.title}</h2> */}

                  <Link className="services-card-button" to={`/services/${service.id}`}>
                    {t("services.readMore")}
                  </Link>

              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

