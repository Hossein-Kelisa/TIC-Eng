import './Team.css';
import Fades from '../RestComponents/Fades';
import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation();

const teamMembers = [
  {
    name: t('team.hossein.name'),
    role: t('team.hossein.role'),
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: t('team.sara.name'),
    role: t('team.sara.role'),
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: t('team.adel.name'),
    role: t('team.adel.role'),
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <Fades animationType="fadeZoom">
          <h3 className="team-title">{t('team.title')}</h3>
        </Fades>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Fades animationType="fadeRotate" key={index}>
              <div className="team-card">
                <img src={member.photo} alt={member.name} className="team-photo" />
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
