import { useReveal } from "../../../hooks/useReveal.js";

export default function ServiceCard({ icon, title, description, index }) {
  const { ref, isVisible } = useReveal();

  return (
    <li
      ref={ref}
      className={`service-card gradient-card reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <a href="#contact" className="gradient-card__inner service-card__inner" data-cursor="hover">
        <span className="service-card__icon">{icon}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </li>
  );
}