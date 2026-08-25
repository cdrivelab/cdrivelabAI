import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import { useTilt } from "../../hooks/useTilt.js";
import ServiceIcon from "./ServiceIcon.jsx";

export default function ServiceCard({ service, index = 0, isHidden = false }) {
  const reveal = useReveal(Math.min(index, 6) * 60);
  const tiltRef = useTilt();

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`service-card ${isHidden ? "is-hidden" : ""}`}
      ref={tiltRef}
      {...reveal}
    >
      <span className="service-card__num">{service.number} / {service.category.toUpperCase()}</span>
      <div className="icon-chip"><ServiceIcon name={service.icon} /></div>
      <h3>{service.name}</h3>
      <p className="service-card__desc">{service.shortDescription}</p>
      <div className="service-card__tags">
        {service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <span className="service-card__corner" aria-hidden="true" />
    </Link>
  );
}