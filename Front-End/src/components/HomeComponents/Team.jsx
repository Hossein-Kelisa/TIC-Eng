import "./Team.css";
import Fades from "../RestComponents/Fades";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import teamMembers from "../../Data/team";

function Team() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <Fades animationType="fadeZoom">
          <h3 className="team-title">{t("team.title")}</h3>
        </Fades>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Fades animationType="fadeRotate" key={index}>
              <div
                className="team-card"
                onClick={() => handleClick(member.id)}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                />
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            </Fades>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
