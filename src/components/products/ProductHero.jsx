import { useReveal } from "../../hooks/useReveal.js";
import { productsHero } from "../../data/products.js";
import ProductEyebrow from "./ProductEyebrow.jsx";

export default function ProductHero() {
  const copy = useReveal();
  const side = useReveal(120, "products-hero__side");

  return (
    <section className="products-hero">
      <div className="container products-hero__inner">
        <div {...copy}>
          <ProductEyebrow>{productsHero.eyebrow}</ProductEyebrow>

          <h1 className="products-hero__title">
            {productsHero.headingLead}{" "}
            <em className="accent-text">{productsHero.headingAccent}</em>
            <br />
            {productsHero.headingTail}
          </h1>

          <p className="products-hero__sub">{productsHero.sub}</p>

          <div className="products-hero__cue">
            <span className="products-hero__cue-line" aria-hidden="true" />
            {productsHero.scrollCue}
          </div>
        </div>

        <div {...side}>
          <div className="products-hero__card">
            <strong>
              {productsHero.side.title.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < productsHero.side.title.length - 1 && <br />}
                </span>
              ))}
            </strong>
            <p>{productsHero.side.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
