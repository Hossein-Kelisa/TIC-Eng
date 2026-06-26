import "./Services.css";
import Fades from "../RestComponents/Fades";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "inspection",
      title: t("services.Inspection.title"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/65cdbc34b9d510ec993c0cb6_654c9fb1fbfb300821c1a860_manual_20inspection-min_angb56.jpg",
    },
    {
      id: "technical-supervision",
      title: t("services.Technical Supervision.title"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-technical-supervision_zjsylr.jpg",
    },
    {
      id: "training",
      title: t("services.Training.title"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-training_koeu6e.jpg",
    },
    {
      id: "expert-assessment",
      title: t("services.Expert Assessment.title"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-expert-assessment_mpyi2y.jpg",
    },
    {
      id: "standards-development",
      title: t("services.Standards Development.title"),
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/service-standard-developmnet_nwdbfv.jpg",
    },
  ];

  return (
    <div className="services-section">
      <Fades>
        <h1 className="service-title">{t("services.title")}</h1>
      </Fades>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            className={`service-row ${index % 2 === 0 ? "normal" : "reverse"}`}
            key={service.id}
          >
            <Link to={`/services/${service.id}`} className="service-text">
              <Fades>
                <h2>{service.title}</h2>
              </Fades>
            </Link>

            <div className="service-image-container">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
