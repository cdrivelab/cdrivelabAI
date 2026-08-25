import { useReveal } from "../../hooks/useReveal.js";
import { otherProducts } from "../../data/products.js";
import ProductEyebrow from "./ProductEyebrow.jsx";
import ProductCard from "./ProductCard.jsx";

export default function OtherProducts() {
  const head = useReveal(0, "products-other__head");

  return (
    <section className="products-section products-other" id="other-products">
      <div className="container">
        <div {...head}>
          <div>
            <ProductEyebrow>{otherProducts.eyebrow}</ProductEyebrow>
            <h2 className="products-section-title">
              {otherProducts.headingLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < otherProducts.headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <p>{otherProducts.body}</p>
        </div>

        <div className="products-grid">
          {otherProducts.items.map((product, i) => (
            <ProductCard product={product} index={i} key={product.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
