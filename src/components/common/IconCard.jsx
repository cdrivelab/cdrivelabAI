import { useReveal } from "../../hooks/useReveal.js";
// import "./icon-card.css";
import "./common-ui.css";
export default function IconCard({ icon, title, description, miniStat, href = "#contact", index = 0 }) {
  const reveal = useReveal(Math.min(index, 4) * 90);
  return (
    <a href={href} className="icon-card" {...reveal}>
      <div className="icon-chip">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {miniStat && <span className="mini-stat">{miniStat}</span>}
    </a>
  );
}