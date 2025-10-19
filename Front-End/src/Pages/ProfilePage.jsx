import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import teamMembers from "../Data/team";
import "./ProfilePage.css";

function TeamProfile() {
  const { id } = useParams();
  const { t } = useTranslation();

  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="team-profile not-found">
        <p>Member not found</p>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="team-profile">
      <div className="profile-card">
        <img src={member.photo} alt={t(member.nameKey)} className="profile-photo" />
        <h2 className="profile-name">{t(member.nameKey)}</h2>
        <h4 className="profile-role">{t(member.roleKey)}</h4>

        {/* Optional future skills section */}
        {member.skills && (
          <div className="profile-skills">
            <h5>Skills</h5>
            <ul>
              {member.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </section>
  );
}

export default TeamProfile;
