import ActionLink from "./ActionLink.jsx";
import { CONTACT_HREF } from "../../data/siteConfig.js";
import { useReveal } from "../../hooks/useReveal.js";
import "./common-ui.css";

export default function IconCard({ icon, title, description, miniStat, href = CONTACT_HREF, index = 0 }) {
  const reveal = useReveal(Math.min(index, 4) * 90, "icon-card");
  return (
    <ActionLink href={href} {...reveal}>
      <div className="icon-chip">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {miniStat && <span className="mini-stat">{miniStat}</span>}
    </ActionLink>
  );
}