import ActionLink from "../../common/ActionLink.jsx";
import { useReveal } from "../../../hooks/useReveal.js";
import CtaBand from "../../common/CtaBand.jsx";
import { coreFeatures, CONTACT_HREF } from "../../../data/siteConfig.js";

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" /></svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l4-6 4 3 4-8" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
];

function FeatureCard({ feature, icon }) {
  const variantClass = feature.variant ? `feature-card--${feature.variant}` : "";
  const reveal = useReveal(0, `icon-card ${variantClass}`);

  return (
    <div {...reveal}>
      <div className="icon-chip">{icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>

      {feature.tags && (
        <div className="tag-pill-row">
          {feature.tags.map((tag) => (
            <span className="tag-pill" key={tag}><SparkleIcon />{tag}</span>
          ))}
        </div>
      )}

      {feature.badgeCount && (
        <div className="feature-badge-row">
          <div className="avatar-stack">
            {feature.avatars.map((a) => <div className="av" key={a}>{a}</div>)}
            <div className="feature-badge">{feature.badgeCount}</div>
          </div>
        </div>
      )}

      {feature.hasLink && (
        <ActionLink href={CONTACT_HREF} className="feature-link">
          Get In Touch <ArrowIcon />
        </ActionLink>
      )}
    </div>
  );
}

export default function CoreFeatures() {
  const head = useReveal(0, "section-head");

  return (
    <section className="section" id="core-features">
      <div {...head}>
        <span className="kicker">Core Features</span>
        <h2>Scalable AI business features</h2>
        <p>Our AI-powered features are designed to help businesses operate smarter and more efficiently. Every feature is built to scale with the business, not outgrow it.</p>
      </div>

      <div className="features-bento" style={{ marginBottom: "50px" }}>
        {coreFeatures.map((feature, i) => (
          <FeatureCard feature={feature} icon={icons[i]} key={feature.title} />
        ))}
      </div>

      <CtaBand
        heading="Let's turn your vision into smart AI solutions — let's build together."
        buttonLabel="Get In Touch"
      />
    </section>
  );
}