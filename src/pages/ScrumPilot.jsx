import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";
import ProductEyebrow from "../components/products/ProductEyebrow.jsx";
import ScrumPilotDashboard from "../components/products/ScrumPilotDashboard.jsx";
import ProductsCta from "../components/products/ProductsCta.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { scrumPilot } from "../data/products.js";
import "./products.css";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default function ScrumPilot() {
  const head = useReveal(0, "product-detail__head");
  const visual = useReveal(100, "product-detail__panel");
  const split = useReveal(60, "product-detail__split");

  return (
    <>
      <PageHero title={scrumPilot.name} parent={{ label: "Products", to: "/products" }} />

      <section className="products-section product-detail">
        <div className="container">
          <div {...head}>
            <ProductEyebrow>{scrumPilot.sectionLabel}</ProductEyebrow>
            <h2>{scrumPilot.kicker}</h2>
            <p>{scrumPilot.descriptionLong}</p>

            <div className="product-detail__actions">
              <a
                className="btn btn-light"
                href={scrumPilot.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit scrumpilot.online
                <span className="icon-circle"><ExternalIcon /></span>
              </a>
              <span className="product-status">{scrumPilot.status}</span>
            </div>
          </div>

          <div {...visual}>
            <ScrumPilotDashboard flat />
          </div>

          <div {...split}>
            <div className="product-detail__col">
              <h3>What it does</h3>
              <ul className="checklist">
                {scrumPilot.features.map((item) => (
                  <li key={item}>
                    <span className="check-mark"><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-detail__col">
              <h3>{scrumPilot.whoLabel}</h3>
              <div className="product-pills">
                {scrumPilot.audience.map((item) => (
                  <span className="product-pill" key={item}>{item}</span>
                ))}
              </div>
              <Link to="/products" className="product-detail__back">
                ← Back to all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductsCta />
    </>
  );
}
