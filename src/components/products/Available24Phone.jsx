import { available24 } from "../../data/products.js";

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/**
 * Mobile-app mockup for the Available24 marketplace, drawn in JSX/CSS.
 * No screenshots exist in the project yet; swap this for a real image
 * when one is available.
 */
export default function Available24Phone() {
  const { app } = available24;

  return (
    <div className="a24-visual">
      <div className="a24-phone">
        <div className="a24-phone__notch" />
        <div className="a24-phone__screen">
          <div className="a24-phone__logo">{app.logo}</div>
          <div className="a24-phone__headline">
            {app.headline.map((line, i) => (
              <span key={line}>
                {line}
                {i < app.headline.length - 1 && <br />}
              </span>
            ))}
          </div>
          <div className="a24-phone__search" />
          <div className="a24-phone__grid">
            {app.services.map((service) => (
              <div className="a24-service" key={service.name}>
                <strong>{service.name}</strong>
                {service.note}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="a24-status-card">
        <small>{app.statusCard.label}</small>
        <b>
          <span className="a24-status-card__check"><CheckIcon /></span>
          {app.statusCard.state}
        </b>
        <small className="a24-status-card__note">{app.statusCard.note}</small>
      </div>
    </div>
  );
}
