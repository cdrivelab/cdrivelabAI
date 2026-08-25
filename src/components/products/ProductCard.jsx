import { useReveal } from "../../hooks/useReveal.js";

export default function ProductCard({ product, index = 0 }) {
  const reveal = useReveal(Math.min(index, 4) * 70, "product-card");

  return (
    <article {...reveal}>
      <span className="product-card__index">{product.index}</span>
      <div className="product-card__icon" aria-hidden="true">{product.icon}</div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-card__tech">{product.tech}</div>
      <span className="product-card__note">{product.note}</span>
    </article>
  );
}
