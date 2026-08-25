import { useReveal } from "../../../hooks/useReveal.js";
import IconCard from "../../common/IconCard.jsx";
import { services } from "../../../data/siteConfig.js";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M14 3v6h6" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l6-8v5h12l-6 8v-5H3z" /></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>,
];

export default function Services() {
  const head = useReveal();
  return (
    <section className="section" id="services">
      <div className="section-head" {...head}>
        <span className="kicker">What We Do</span>
        <h2>Services built for measurable AI outcomes</h2>
        <p>From strategy to deployment, every engagement is designed around one goal — AI that actually moves your business metrics.</p>
      </div>
      <div className="grid-3">
        {services.map((service, i) => (
          <IconCard
            key={service.title}
            index={i}
            icon={icons[i]}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}