import { useReveal } from "../../../hooks/useReveal.js";
import IconCard from "../../common/IconCard.jsx";
import { approachCards, approachStats } from "../../../data/siteConfig.js";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v6h6" /><path d="M4 22V4a2 2 0 0 1 2-2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /></svg>,
];

export default function OurApproach() {
  const head = useReveal();
  const paragraph = useReveal();

  return (
    <section className="section grid-2" style={{ gap: "32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span className="kicker">Our Approach</span>
        <h2>Our strategic approach to intelligent AI solutions</h2>
        <p>Our approach combines strategy, engineering, and honest scoping to deliver solutions that create real business impact — starting with your goals, not a technology we want to use.</p>
        {approachCards.map((card, i) => {
          if (i === 0) return (
            <IconCard key={card.title} index={i} icon={icons[i]} title={card.title} description={card.description} />
          );
          return (
            <div key={card.title} style={{ borderTop: "1px solid var(--color-line)", paddingTop: "8px", marginTop: "8px" }} />
          );
        })}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", background: "var(--color-bg-card)", border: "1px solid var(--color-line)", borderRadius: "24px", padding: "40px 32px", minHeight: "420px", position: "relative" }}>
        {approachStats.map((stat, i) => (
          <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", borderRight: i < approachStats.length - 1 ? "1px solid var(--color-line)" : "none", paddingRight: i < approachStats.length - 1 ? "16px" : "0", marginRight: i < approachStats.length - 1 ? "16px" : "0" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "800", fontSize: "clamp(28px, 3vw, 40px)", background: "var(--gradient-accent)", "-webkit-background-clip": "text", "background-clip": "text", color: "transparent" }}>
              {stat.value}+
            </div>
            <div style={{ color: "var(--color-ink-secondary)", fontSize: "14px", fontWeight: "600", textTransform: "uppercase" }}>
              {stat.label}
            </div>
          </div>
        ))}
        <div style={{ borderBottom: "1px solid var(--color-line)", paddingBottom: "12px", marginBottom: "16px" }} />
        <p
          style={{ textAlign: "left", fontSize: "15px", lineHeight: 1.7, margin: "0" }}
        >
          Our track record reflects the trust, delivery discipline, and practical focus we bring to every project.
        </p>
        <img
          src="/placeholder-image.jpg"
          alt="AI specialists working"
          style={{ width: "100%", borderRadius: "24px 24px 0 0", position: "absolute", bottom: 0, marginTop: "24px" }}
        />
      </div>
    </section>
  );
}