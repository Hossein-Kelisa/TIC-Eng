import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import teamMembers from "../Data/teamMembers";
import "./ProfilePage.css";

function TeamProfile() {
  const { id } = useParams();
  const { t } = useTranslation();

  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="team-profile not-found">
        <p>Member not found</p>
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="team-profile-page">
      {/* Banner Section */}
      <div className="profile-banner">
        <img
          src={member.banner || "/Images/Banner.jpg"}
          alt="Company Banner"
        />
      </div>

      {/* Profile Main Container */}
      <div className="profile-container">
        {/* Left Side */}
        <div className="profile-left">
          <img
            src={member.photo}
            alt={t(member.nameKey)}
            className="profile-photo"
          />
          <h2 className="profile-name">{t(member.nameKey)}</h2>
          <h4 className="profile-role">{t(member.roleKey)}</h4>
        </div>

        {/* Right Side */}
        <div className="profile-right">
          <h3 className="about-title">About {t(member.nameKey)}</h3>
          <p className="about-text">
            {member.bio ||
              "This section will include a professional summary about the team member, their background, and contributions to the company."}
          </p>

          <div className="profile-contact-info">
            <h4>Contact</h4>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${member.email || "info@tic-eng.com"}`}>
                {member.email || "info@tic-eng.com"}
              </a>
            </p>
          </div>
        </div>
      </div>

      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
}

export default TeamProfile;
