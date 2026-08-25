import { useReveal } from "../../hooks/useReveal.js";
import ServiceIcon, { CATEGORY_ICONS } from "./ServiceIcon.jsx";
import { CATEGORIES } from "../../data/services.js";

export default function ServicesJourney({ active, onSelect }) {
  const reveal = useReveal();

  return (
    <div className="journey" {...reveal}>
      {CATEGORIES.map((cat) => (
        <button
          type="button"
          key={cat.id}
          className={`journey-stage ${active === cat.id ? "active" : ""}`}
          onClick={() => onSelect(cat.id)}
        >
          <span className="journey-node">
            <ServiceIcon name={CATEGORY_ICONS[cat.id]} stroke="currentColor" strokeWidth={2} />
          </span>
          <h4>{cat.label}</h4>
          <p>{cat.blurb}</p>
        </button>
      ))}
    </div>
  );
}