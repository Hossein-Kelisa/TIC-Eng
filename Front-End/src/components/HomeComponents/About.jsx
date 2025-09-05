import "./About.css";
import { FaUsers, FaRocket, FaGlobe } from "react-icons/fa";
import Fades from "../RestComponents/Fades";

function About() {
  const points = [
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      description:
        "Our expert team has many years of experience to deliver the best service.",
    },
    {
      icon: <FaRocket />,
      title: "Fast & Reliable",
      description:
        "We provide quick turnaround times without compromising quality.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Standards",
      description:
        "Our processes follow international standards for guaranteed quality.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <Fades animationType="fadeZoom">
        <h3 className="about-title">Why Choose Us?</h3>
        <p className="about-subtitle">
          We deliver top-quality services with a strong focus on customer
          satisfaction.
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
