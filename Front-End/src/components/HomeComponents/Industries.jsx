import "./Industries.css";
import Fades from "../RestComponents/Fades";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Industries() {
  const { t } = useTranslation();

const industries = [
  {
    name: t("industries.automotive"),
    image: "https://www.ibef.org/assets/images/Automobile-3.jpg",
  },
  {
    name: t("industries.welding"),
    image:
      "https://sydneywelders.com.au/wp-content/uploads/2022/02/Sydney-types-of-welding-e1644827905556-1024x637.jpg",
  },
  {
    name: t("industries.construction"),
    image:
      "https://www.goconstruct.org/media/pptjeji1/construction-manager-ss2551185335.jpg?width=510&height=332&format=WebP&quality=75&v=1db885f9318ac60",
  },
  {
    name: t("industries.manufacturing"),
    image:
      "https://www.advancedtech.com/wp-content/uploads/2023/03/Augmented-reality-in-manufacturing_1jpg.jpg",
  },
  {
    name: t("industries.safety_inspection"),
    image:
      "https://www.doforms.com/wp-content/uploads/2022/03/safety-inspection-vs-safety-audit-comparison.jpg",
  },
];

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <Fades animationType="fadeZoom">
          <h3 className="industries-title">{t("industries.title")}</h3>
        </Fades>

        <Fades animationType="fadeZoom">
          <p className="industries-description">
            {t("industries.description")}
          </p>
        </Fades>

        <div className="industries-grid">
          {industries.map((industry) => (
            <Fades animationType="fadeRotate" key={industry.name}>
              <div className="industry-card">
                <img
                  src={industry.image}
                  alt={`${industry.name} Industry`}
                  className="industry-image"
                />
                <h4>{industry.name}</h4>
              </div>
            </Fades>
          ))}
        </div>
        <Fades animationType="fadeZoom">
          <div className="industries-btn-wrapper">
            <Link to="/request" className="RequestService-btn">
              {t("industries.button")}
            </Link>
          </div>
        </Fades>
      </div>
    </section>
  );
}

export default Industries;
