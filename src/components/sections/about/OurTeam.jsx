import { useReveal } from "../../../hooks/useReveal.js";
import { teamMembers } from "../../../data/siteConfig.js";
import "./our-team.css";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.6l-5.2-6.8L4.2 22H1.2l8-9.2L2 2h6.8l4.7 6.2L18 2z" /></svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" /></svg>
);

function TeamCard({ member, index }) {
  const reveal = useReveal(index * 90);
  return (
    <div className="team-card" {...reveal}>
      <div className="team-avatar">{member.initials}</div>
      <h3>{member.name}</h3>
      <div className="role">{member.role}</div>
      <div className="team-social">
        <a href="#" aria-label="X"><XIcon /></a>
        <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const head = useReveal();
  return (
    <section className="section">
      <div className="section-head" {...head}>
        <span className="kicker">Our Team</span>
        <h2>Meet our AI specialists</h2>
        <p>Our team combines engineering, data science, and industry experience to deliver AI that actually ships.</p>
      </div>
      <div className="grid-3">
        {teamMembers.map((member, i) => <TeamCard member={member} index={i} key={member.name} />)}
      </div>
    </section>
  );
}