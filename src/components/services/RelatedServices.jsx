import { useReveal } from "../../hooks/useReveal.js";
import ServiceCard from "./ServiceCard.jsx";
import { getServiceById } from "../../data/services.js";

export default function RelatedServices({ ids }) {
  const head = useReveal(0, "section-head");
  const related = ids.map(getServiceById).filter(Boolean);
  if (related.length === 0) return null;

  return (
    <section className="section">
      <div {...head}>
        <span className="kicker">Related</span>
        <h2>Often paired with this service</h2>
      </div>
      <div className="services-grid services-grid--related">
        {related.map((service, i) => (
          <ServiceCard service={service} index={i} key={service.id} />
        ))}
      </div>
    </section>
  );
}