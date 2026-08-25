import { useReveal } from "../../hooks/useReveal.js";
import { CATEGORIES } from "../../data/services.js";

export default function ServiceFilterBar({ active, onSelect }) {
  const reveal = useReveal();

  return (
    <div className="filter-row" {...reveal}>
      {CATEGORIES.map((cat) => (
        <button
          type="button"
          key={cat.id}
          className={`filter-pill ${active === cat.id ? "active" : ""}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.id === "all" ? "All Services" : cat.label}
        </button>
      ))}
    </div>
  );
}