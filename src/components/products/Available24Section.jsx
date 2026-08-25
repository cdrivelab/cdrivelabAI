import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import { available24 } from "../../data/products.js";
import ProductEyebrow from "./ProductEyebrow.jsx";
import Available24Phone from "./Available24Phone.jsx";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default function Available24Section() {
  const label = useReveal();
  const card = useReveal(80, "a24-card");

  return (
    <section className="products-section" id="available24">
      <div className="container">
        <div {...label}>
          <ProductEyebrow>{available24.sectionLabel}</ProductEyebrow>
        </div>

        <article {...card}>
          <div className="a24-card__grid">
            <div className="a24-card__copy">
              <div>
                <div className="a24-card__label">{available24.label}</div>
                <h2 className="a24-card__title">
                  {available24.titleLines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < available24.titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <p className="a24-card__desc">{available24.description}</p>

                <div className="product-pills">
                  {available24.categories.map((item) => (
                    <span className="product-pill" key={item}>{item}</span>
                  ))}
                </div>

                <div className="a24-stats">
                  {available24.stats.map((stat) => (
                    <div className="a24-stat" key={stat.label}>
                      <b>{stat.value}</b>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="a24-card__cta">
                <Link to={available24.route} className="btn btn-light">
                  {available24.ctaLabel}
                  <span className="icon-circle"><ArrowIcon /></span>
                </Link>
              </div>
            </div>

            <Available24Phone />
          </div>
        </article>
      </div>
    </section>
  );
}
