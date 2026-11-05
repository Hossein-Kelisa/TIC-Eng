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
              Test, Inspection, Certification Engineering Company (TIC) was
              established in 2024 to provide specialized technical services in
              inspection, vehicle type approval, industrial inspection, pressure
              vessel inspection, and Non-Destructive Testing (NDT). In 2025, as
              part of its commitment to quality and continuous improvement, TIC
              obtained accreditation from the National Accreditation Center of
              Iran (NACI) in accordance with the requirements of ISO/IEC 17020.
              This achievement reflects the company's commitment to technical
              competence, effective inspection processes, and the delivery of
              independent, impartial, and reliable inspection services. Driven
              by technical expertise and supported by qualified professionals,
              TIC is committed to maintaining the highest standards of
              independence, impartiality, integrity, and quality. Our services
              are delivered in accordance with applicable national and
              international standards, helping enhance safety, quality, and
              reliability across the industrial and transportation sectors. At
              TIC, we believe that professional inspection is essential to
              building trust, ensuring compliance, and supporting safer, more
              reliable operations.
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
