import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import { scrumPilot } from "../../data/products.js";
import ProductEyebrow from "./ProductEyebrow.jsx";
import ScrumPilotDashboard from "./ScrumPilotDashboard.jsx";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default function FeaturedProduct() {
  const label = useReveal();
  const feature = useReveal(80, "product-feature");

  return (
    <section className="products-section" id="scrumpilot">
      <div className="container">
        <div {...label}>
          <ProductEyebrow>{scrumPilot.sectionLabel}</ProductEyebrow>
        </div>

        <article {...feature}>
          <div className="product-feature__grid">
            <div className="product-feature__copy">
              <div>
                <div className="product-feature__number">{scrumPilot.cardLabel}</div>
                <h2 className="product-feature__name">
                  {scrumPilot.nameLead}
                  <span className="accent-text">{scrumPilot.nameAccent}</span>
                </h2>
                <p className="product-feature__kicker">{scrumPilot.kicker}</p>
                <p className="product-feature__desc">{scrumPilot.description}</p>

                <div className="product-pills">
                  {scrumPilot.features.map((item) => (
                    <span className="product-pill" key={item}>{item}</span>
                  ))}
                </div>

                <div className="product-feature__who">{scrumPilot.whoLabel}</div>
                <div className="product-pills">
                  {scrumPilot.audience.map((item) => (
                    <span className="product-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="product-feature__bottom">
                <Link to={scrumPilot.route} className="btn btn-light">
                  {scrumPilot.ctaLabel}
                  <span className="icon-circle"><ArrowIcon /></span>
                </Link>
                <span className="product-status">{scrumPilot.status}</span>
              </div>
            </div>

            <ScrumPilotDashboard />
          </div>
        </article>
      </div>
    </section>
  );
}
