import { useParams, Navigate, Link } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";
import RelatedServices from "../components/services/RelatedServices.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { getServiceBySlug } from "../data/services.js";
import "./services.css";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const intro = useReveal(0, "service-detail-intro");
  const list = useReveal(100, "service-detail-list");

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero title={service.name} parent={{ label: "Services", to: "/services" }} />

      <section className="section" style={{ paddingTop: "20px" }}>
        <div {...intro}>
          <span className="kicker">{service.number} / {service.category.toUpperCase()}</span>
          <h2>{service.tagline}</h2>
          <p>{service.detail.intro}</p>
        </div>

        <div {...list}>
          <h3>What this covers</h3>
          <ul className="checklist">
            {service.detail.deliverables.map((item) => (
              <li key={item}>
                <span className="check-mark"><CheckIcon /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {service.detail.disclaimer && (
            <p className="service-detail-disclaimer">{service.detail.disclaimer}</p>
          )}

          <Link to="/services" className="service-detail-back">← Back to all services</Link>
        </div>
      </section>

      <RelatedServices ids={service.detail.relatedServices} />

      <div className="section" style={{ paddingTop: 0 }}>
        <CtaBand
          heading={`Ready to talk about ${service.name.toLowerCase()}?`}
          buttonLabel="Start a Conversation"
        />
      </div>
    </>
  );
}