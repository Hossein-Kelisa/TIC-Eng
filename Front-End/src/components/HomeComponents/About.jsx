import "./About.css";
import { FaUsers, FaRocket, FaGlobe } from "react-icons/fa";
import Fades from "../RestComponents/Fades";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const points = [
    {
      icon: <FaUsers />,
      title: t("about.points.experienced_team.title"),
      description: t("about.points.experienced_team.description"),
    },
    {
      icon: <FaRocket />,
      title: t("about.points.fast_delivery.title"),
      description: t("about.points.fast_delivery.description"),
    },
    {
      icon: <FaGlobe />,
      title: t("about.points.global_standards.title"),
      description: t("about.points.global_standards.description"),
    },
  ];

  return (
    <section id="about" className="about-section">
      <Fades animationType="fadeZoom">
        <h3 className="about-title">{t("about.title")}</h3>
        <p className="about-subtitle">
          {t("about.subtitle")}
        </p>
      </Fades>

      <div className="about-content">
        <Fades animationType="fadeZoom">
          <ul className="about-points">
            {points.map((point) => (
              <li key={point.title} className="about-point">
                <div className="icon" aria-hidden="true">
                  {point.icon}
                </div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Fades>

        <Fades animationType="fadeScale">
          <img
            src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/4_ubycxu.jpg"
            alt="TIC Engineering Team Working in Field"
            className="about-image"
          />
        </Fades>
      </div>
    </section>
  );
}

export default About;
