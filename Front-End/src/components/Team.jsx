import React from 'react';
import './Team.css';
import Fades from './Fades';

const teamMembers = [
  {
    name: 'Hossein',
    role: 'Founder & CEO',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Sara',
    role: 'Leader',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Adel',
    role: 'Designer',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <Fades animationType="fadeZoom">
          <h3 className="team-title">Meet Our Team</h3>
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
