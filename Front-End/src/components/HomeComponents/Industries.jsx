import "./Industries.css";
import Fades from "../RestComponents/Fades";
// import { Link } from "react-router-dom";

const industries = [
  {
    name: "Automotive",
    image: "https://www.ibef.org/assets/images/Automobile-3.jpg",
  },
  {
    name: "Welding",
    image:
      "https://sydneywelders.com.au/wp-content/uploads/2022/02/Sydney-types-of-welding-e1644827905556-1024x637.jpg",
  },
  {
    name: "Construction",
    image:
      "https://www.goconstruct.org/media/pptjeji1/construction-manager-ss2551185335.jpg?width=510&height=332&format=WebP&quality=75&v=1db885f9318ac60",
  },
  {
    name: "Manufacturing",
    image:
      "https://www.advancedtech.com/wp-content/uploads/2023/03/Augmented-reality-in-manufacturing_1jpg.jpg",
  },
  {
    name: "Safety & Inspection",
    image:
      "https://www.doforms.com/wp-content/uploads/2022/03/safety-inspection-vs-safety-audit-comparison.jpg",
  },
];

function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <Fades animationType="fadeZoom">
          <h3 className="industries-title">Industries We Serve</h3>
        </Fades>

        <Fades animationType="fadeZoom">
          <p className="industries-description">
            We provide professional certification, inspection, and testing
            services across various sectors — helping businesses maintain
            quality, safety, and compliance.
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
        {/* <Fades animationType="fadeZoom">
          <div className="industries-btn-wrapper">
            <Link to="/request" className="RequestService-btn">
              Request Service
            </Link>
          </div>
        </Fades> */}
      </div>
    </section>
  );
}

export default Industries;
