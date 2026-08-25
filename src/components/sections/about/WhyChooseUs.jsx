import { useReveal } from "../../../hooks/useReveal.js";
import IconCard from "../../common/IconCard.jsx";
import CtaBand from "../../common/CtaBand.jsx";
import { whyChooseUs } from "../../../data/siteConfig.js";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" /><path d="M17 3.13a4 4 0 0 1 0 7.75M23 21v-2a4 4 0 0 0-3-3.87" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>,
];

export default function WhyChooseUs() {
  const head = useReveal();

  return (
    <section className="section" id="about">
      <div className="section-head" {...head}>
        <span className="kicker">Why Choose Us</span>
        <h2>Why we deliver better results</h2>
        <p>We deliver reliable, scalable AI solutions built to solve real business problems and drive measurable growth — with a focus on precision and long-term partnership over one-off projects.</p>
      </div>

      <div className="grid-4" style={{ marginBottom: "50px" }}>
        {whyChooseUs.map((item, i) => (
          <IconCard key={item.title} index={i} icon={icons[i]} title={item.title} description={item.description} />
        ))}
      </div>

      <CtaBand
        heading="From ideas to intelligence — let's power your business with AI."
        buttonLabel="Book Free Consultation"
        rating={{ score: "5.0", count: "60+" }}
      />
    </section>
  );
}