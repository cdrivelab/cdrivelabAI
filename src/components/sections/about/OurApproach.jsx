import { useReveal } from "../../../hooks/useReveal.js";
import IconCard from "../../common/IconCard.jsx";
import { approachCards, approachStats } from "../../../data/siteConfig.js";
import "./our-approach.css";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v6h6" /><path d="M4 22V4a2 2 0 0 1 2-2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /></svg>,
];

export default function OurApproach() {
  const copy = useReveal(0, "approach-copy");
  const panel = useReveal(100, "approach-panel");

  return (
    <section className="section grid-2 approach-grid">
      <div {...copy}>
        <span className="kicker">Our Approach</span>
        <h2>Our strategic approach to intelligent AI solutions</h2>
        <p className="approach-lead">
          Our approach combines strategy, engineering, and honest scoping to
          deliver solutions that create real business impact — starting with
          your goals, not a technology we want to use.
        </p>

        <div className="approach-cards">
          {approachCards.map((card, i) => (
            <IconCard
              key={card.title}
              index={i}
              icon={icons[i]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div {...panel}>
        <div className="approach-stats">
          {approachStats.map((stat) => (
            <div className="approach-stat" key={stat.label}>
              <div className="approach-stat__value">{stat.value}+</div>
              <div className="approach-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="approach-note">
          Our track record reflects the trust, delivery discipline, and
          practical focus we bring to every project.
        </p>
      </div>
    </section>
  );
}
