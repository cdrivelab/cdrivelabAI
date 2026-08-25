import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";
import ProductEyebrow from "../components/products/ProductEyebrow.jsx";
import Available24Phone from "../components/products/Available24Phone.jsx";
import ProductsCta from "../components/products/ProductsCta.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { available24 } from "../data/products.js";
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

export default function Available24() {
  const head = useReveal(0, "product-detail__head");
  const stats = useReveal(60, "a24-stats product-detail__stats");
  const visual = useReveal(100, "product-detail__panel");
  const split = useReveal(60, "product-detail__split");

  return (
    <>
      <PageHero title={available24.name} parent={{ label: "Products", to: "/products" }} />

      <section className="products-section product-detail">
        <div className="container">
          <div {...head}>
            <ProductEyebrow>{available24.sectionLabel}</ProductEyebrow>
            <h2>{available24.titleLines.join(" ")}</h2>
            <p>{available24.descriptionLong}</p>

            <div className="product-detail__actions">
              <a
                className="btn btn-light"
                href={available24.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit available24.in
                <span className="icon-circle"><ExternalIcon /></span>
              </a>
            </div>
          </div>

          <div {...stats}>
            {available24.stats.map((stat) => (
              <div className="a24-stat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div {...visual}>
            <Available24Phone />
          </div>

          <div {...split}>
            <div className="product-detail__col">
              <h3>Services covered</h3>
              <ul className="checklist">
                {available24.categories.map((item) => (
                  <li key={item}>
                    <span className="check-mark"><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-detail__col">
              <h3>How it works</h3>
              <p className="product-detail__note">{available24.description}</p>
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
