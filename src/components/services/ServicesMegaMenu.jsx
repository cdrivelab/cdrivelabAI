import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon.jsx";
import { SERVICES } from "../../data/services.js";

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default function ServicesMegaMenu({ onNavigate }) {
  return (
    <div className="mega-menu">
      <div className="mega-menu__grid">
        {SERVICES.map((service) => (
          <Link to={`/services/${service.slug}`} key={service.id} onClick={onNavigate}>
            <span className="mega-menu__icon"><ServiceIcon name={service.icon} /></span>
            {service.name}
          </Link>
        ))}
      </div>
      <Link to="/services" className="mega-menu__all" onClick={onNavigate}>
        View All Services <ArrowIcon />
      </Link>
    </div>
  );
}