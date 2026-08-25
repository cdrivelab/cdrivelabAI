import { useReveal } from "../../hooks/useReveal.js";
import { productsCta } from "../../data/products.js";
import ProductEyebrow from "./ProductEyebrow.jsx";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default function ProductsCta() {
  const box = useReveal(0, "products-cta");

  return (
    <section className="products-section products-cta-section" id="contact-products">
      <div className="container">
        <div {...box}>
          <ProductEyebrow>{productsCta.eyebrow}</ProductEyebrow>
          <h2>
            {productsCta.headingLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < productsCta.headingLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p>{productsCta.body}</p>
          <a className="btn btn-light" href={`mailto:${productsCta.email}`}>
            {productsCta.ctaLabel}
            <span className="icon-circle"><ArrowIcon /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
