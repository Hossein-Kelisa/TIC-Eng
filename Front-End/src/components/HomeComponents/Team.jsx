import "./Team.css";
import Fades from "../RestComponents/Fades";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: t("team.hossein.name"),
      role: t("team.hossein.role"),
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: t("team.sara.name"),
      role: t("team.sara.role"),
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: t("team.adel.name"),
      role: t("team.adel.role"),
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: t("team.lina.name"),
      role: t("team.lina.role"),
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: t("team.ali.name"),
      role: t("team.ali.role"),
      photo: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: t("team.nora.name"),
      role: t("team.nora.role"),
      photo: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: t("team.mina.name"),
      role: t("team.mina.role"),
      photo: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      name: t("team.ahmed.name"),
      role: t("team.ahmed.role"),
      photo: "https://randomuser.me/api/portraits/men/8.jpg",
    }
  ];

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
              <div className="team-card"
                onClick={() => handleClick(member.name)}
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
