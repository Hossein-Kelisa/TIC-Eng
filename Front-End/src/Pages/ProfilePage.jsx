import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import teamMembers from "../Data/teamMembers";
import "./ProfilePage.css";

function TeamProfile() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("info");

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
        <img src={member.banner || "/images/default-banner.jpg"} alt="Banner" />
      </div>

      <div className="profile-container">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="sidebar-img-name">
            <img
              src={member.photo}
              alt={t(member.nameKey)}
              className="sidebar-photo"
            />
            <h2>{t(member.nameKey)}</h2>
            <h4>{t(member.roleKey)}</h4>
          </div>
          <div className="sidebar-tab-menu">
            <nav className="tab-menu-team">
              <button
                className={activeTab === "info" ? "active" : ""}
                onClick={() => setActiveTab("info")}
              >
                Info
              </button>
              <button
                className={activeTab === "skills" ? "active" : ""}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={activeTab === "cv" ? "active" : ""}
                onClick={() => setActiveTab("cv")}
              >
                CV
              </button>
              <button
                className={activeTab === "contact" ? "active" : ""}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="profile-content">
          {activeTab === "info" && (
            <div className="tab-content">
              <h3>About {t(member.nameKey)}</h3>
              <p>{member.bio || "No bio available."}</p>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="tab-content">
              <h3>Skills</h3>
              <ul>
                {member.skills ? (
                  member.skills.map((s, i) => <li key={i}>{s}</li>)
                ) : (
                  <p>No skills added yet.</p>
                )}
              </ul>
            </div>
          )}

          {activeTab === "cv" && (
            <div className="tab-content">
              <h3>CV</h3>
              {member.cv ? (
                <a
                  href={member.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="cv-link"
                >
                  View CV (PDF)
                </a>
              ) : (
                <p>CV not uploaded yet.</p>
              )}
            </div>
          )}

          {activeTab === "contact" && (
            <div className="tab-content">
              <h3>Contact</h3>
              <p>Email: {member.email || "Not available"}</p>
              <p>
                LinkedIn:{" "}
                {member.linkedin ? (
                  <a href={member.linkedin}>Profile</a>
                ) : (
                  "Not available"
                )}
              </p>
            </div>
          )}
        </main>
      </div>
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
}

export default TeamProfile;
