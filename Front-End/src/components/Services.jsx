import "./Services.css";
import Fades from "./Fades";
import { FaFilePdf } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Test",
      description: "Ensure your projects and compliance standards.",
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/65cdbc34b9d510ec993c0cb6_654c9fb1fbfb300821c1a860_manual_20inspection-min_angb56.jpg",
    },
    {
      title: "Inspection",
      description:
        "Trusted inspection services to meet global standards and regulations.",
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/inspectionn_xttqa2.jpg",
    },
    {
      title: "Certification",
      description:
        "We provide certificates to show your products meet standards.",
      image:
        "https://res.cloudinary.com/dk9rkpvhm/image/upload/f_auto,q_auto,w_600/testing_fc326x.jpg",
    },
  ];

  return (
    <section id="services" className="services-section">
      <Fades animationType="slideFade">
        <h3 className="services-title">Our Services</h3>
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
      <div className="download-forms">
        <h4>Request Service Forms</h4>
        <div className="download-buttons">
          <a href="/shekayat.pdf" download className="download-btn">
            Download Shekayat <FaFilePdf />
          </a>
          <a href="/joosh.pdf" download className="download-btn">
            Download Joosh <FaFilePdf />
          </a>
          <a href="/makhzan.pdf" download className="download-btn">
            Download Makhzan <FaFilePdf />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
