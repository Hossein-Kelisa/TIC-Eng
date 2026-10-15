import "./About2.css";
import {
  FaClipboardCheck,
  FaIndustry,
  FaCertificate,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";
import Fades from "../RestComponents/Fades";
// import { useTranslation } from "react-i18next";

function About2() {
  //   const { t } = useTranslation();

  const highlights = [
    {
      icon: <FaClipboardCheck />,
      title: "Technical Inspection",
      description:
        "Inspection and assessment of equipment, machinery, pressure vessels, and industrial systems according to applicable requirements.",
    },
    {
      icon: <FaIndustry />,
      title: "Engineering Expertise",
      description:
        "Specialized technical knowledge and supervision to identify potential issues and support safer, higher-quality projects.",
    },
    {
      icon: <FaCertificate />,
      title: "Conformity Assessment",
      description:
        "Professional assessment to help ensure that equipment and processes meet relevant technical, quality, and safety requirements.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Specialized Training",
      description:
        "Professional training in technical inspection, industrial safety, and relevant standards to develop practical knowledge and technical skills.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <Fades animationType="fadeZoom">
          <div className="about-header">
            <span className="about-label">TIC-Eng</span>

            <h2 className="about-title">
              Engineering Expertise You Can Rely On
            </h2>

            <p className="about-introduction">
              An engineering and technical inspection company providing
              professional inspection, testing, supervision, and conformity
              assessment services.
            </p>
          </div>
        </Fades>

        {/* Main About Content */}
        <div className="about-main">
          <Fades animationType="fadeScale">
            <div className="about-image-wrapper">
              <img
                src="https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_800/33_v1l0ki.jpg"
                alt="TIC technical inspection and engineering activities"
                className="about-image"
              />

              <div className="about-image-caption">
                <span>Technical Inspection & Engineering</span>
              </div>
            </div>
          </Fades>

          <Fades animationType="fadeZoom">
            <div className="about-description">
              <h3>
                Technical Knowledge. Professional Inspection. Reliable Results.
              </h3>

              <p>
                Our work is focused on helping organizations assess the safety,
                quality, and compliance of equipment, machinery, and industrial
                facilities.
              </p>

              <p>
                Through technical inspection, engineering expertise,
                supervision, testing, and specialized training, TIC supports
                clients across different stages of industrial projects.
              </p>

              <button
                className="about-link"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Our Services
                <FaArrowRight />
              </button>
            </div>
          </Fades>
        </div>

        {/* TIC Core Areas */}
        <Fades animationType="fadeZoom">
          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="about-highlight" key={item.title}>
                <div className="highlight-icon">{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Fades>
      </div>
    </section>
  );
}

export default About2;
