import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const teamData = [
  { id: "hossein", nameKey: "team.hossein.name", roleKey: "team.hossein.role", photo: "https://randomuser.me/api/portraits/men/1.jpg", bio: "Hossein is a web developer at Tic-eng..." },
  { id: "sara", nameKey: "team.sara.name", roleKey: "team.sara.role", photo: "https://randomuser.me/api/portraits/women/2.jpg", bio: "Sara is a project manager..." },
  // ...and so on
];

function TeamProfile() {
  const { id } = useParams();
  const { t } = useTranslation();

  const member = teamData.find((m) => m.id === id);

  if (!member) return <p>Member not found</p>;

  return (
    <div className="team-profile">
      <img src={member.photo} alt={t(member.nameKey)} />
      <h2>{t(member.nameKey)}</h2>
      <h4>{t(member.roleKey)}</h4>
      <p>{member.bio}</p>
    </div>
  );
}

export default TeamProfile;
