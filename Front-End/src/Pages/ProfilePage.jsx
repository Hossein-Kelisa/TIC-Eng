import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import teamMembers from "../Data/team";

function TeamProfile() {
  const { id } = useParams();
  const { t } = useTranslation();

  const member = teamMembers.find((m) => m.id === id);

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
