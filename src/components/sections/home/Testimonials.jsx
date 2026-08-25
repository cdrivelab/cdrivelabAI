import { useReveal } from "../../../hooks/useReveal.js";
import { testimonials as defaultTestimonials } from "../../../data/siteConfig.js";
import "./testimonials.css";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.9 6.4 7 .7-5.3 4.6 1.6 6.9L12 17l-6.2 3.6 1.6-6.9L2.1 9.1l7-.7L12 2z" />
  </svg>
);

function TestimonialCard({ item, hidden }) {
  return (
    <div className="testi-card" aria-hidden={hidden || undefined}>
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
      </div>
      <p>&ldquo;{item.text}&rdquo;</p>
      <div className="testi-person">
        <div className="av">{item.initials}</div>
        <div className="who">
          <b>{item.name}</b>
          <span>{item.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({
  testimonials = defaultTestimonials,
  kicker = "Testimonials",
  title = "Trusted by teams building with AI",
  description,
  sectionId = "testimonials",
}) {
  const head = useReveal(0, "section-head");
  const wrap = useReveal(0, "testi-wrap");

  return (
    <section className="section" id={sectionId}>
      <div {...head}>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      <div {...wrap}>
        {/*
          The list is rendered twice, flat, so the -50% scrollX loop lands
          card 7 exactly where card 1 started. The second pass is hidden
          from assistive tech so quotes aren't announced twice.
        */}
        <div className="testi-track">
          {testimonials.map((item) => (
            <TestimonialCard item={item} key={item.name} />
          ))}
          {testimonials.map((item) => (
            <TestimonialCard item={item} hidden key={`loop-${item.name}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
