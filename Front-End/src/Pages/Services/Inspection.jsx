
import "./Inspection.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function Inspection() {
  const inspectionBenefits = [
    "Identification of potential equipment issues",
    "Assessment of technical condition and safety",
    "Support for applicable standards and requirements",
    "More informed maintenance and operational decisions",
  ];

  return (
    <main className="inspection-page">
      {/* Hero Section */}
      <section className="inspection-hero">
        <div className="inspection-hero-content">
          <span className="inspection-eyebrow">
            TIC Engineering Services
          </span>

          <h1>Technical Inspection Services</h1>

          <p>
            Comprehensive inspection services to help assess the
            quality, safety, and condition of industrial equipment
            and systems.
          </p>

          <a href="#inspection-overview" className="inspection-cta">
            Discover Our Services
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section
        id="inspection-overview"
        className="inspection-overview"
      >
        <div className="inspection-overview-image">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80"
            alt="Engineer examining industrial equipment"
            loading="lazy"
          />
        </div>

        <div className="inspection-overview-content">
          <span className="inspection-label">Our Expertise</span>

          <h2>Reliable Inspection. Informed Decisions.</h2>

          <p>
            Technical inspection helps organizations evaluate the
            condition of equipment, identify potential issues, and
            assess compliance with applicable technical and safety
            requirements.
          </p>

          <p>
            TIC's inspection services focus on supporting equipment
            reliability, workplace safety, and informed decisions
            throughout industrial operations.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="inspection-benefits">
        <div className="inspection-section-heading">
          <span className="inspection-label">Why Inspection Matters</span>
          <h2>Supporting Safer Industrial Operations</h2>
          <p>
            A structured inspection process can help organizations
            understand equipment conditions and manage technical risks.
          </p>
        </div>

        <div className="inspection-benefits-grid">
          {inspectionBenefits.map((benefit) => (
            <div className="inspection-benefit" key={benefit}>
              <FaCheckCircle aria-hidden="true" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="inspection-contact">
        <div>
          <h2>Need Inspection Services?</h2>
          <p>
            Contact our team to discuss your technical inspection
            requirements.
          </p>
        </div>

        <a href="/contact" className="inspection-cta">
          Contact Us
          <FaArrowRight aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

export default Inspection;