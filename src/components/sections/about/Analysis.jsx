import { useReveal } from "../../../hooks/useReveal.js";
import Mockup from "../../common/Mockup.jsx";
import RingStat from "../../common/RingStat.jsx";
import { analysis } from "../../../data/siteConfig.js";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1a1108" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default function Analysis() {
  const copy = useReveal();
  const visual = useReveal(100);

  return (
    <section className="section">
      <div className="analysis-grid">
        <div {...copy}>
          <span className="kicker">{analysis.kicker}</span>
          <h2>{analysis.heading}</h2>
          <p>{analysis.body}</p>
          <ul className="checklist">
            {analysis.checklist.map((line) => (
              <li key={line}>
                <span className="check-mark"><CheckIcon /></span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
            <span className="icon-circle"><ArrowIcon /></span>
          </a>
        </div>

        <div className="analysis-visual" {...visual}>
          <div className="ring r2" />
          <div className="ring r1" />
          <div style={{ position: "relative" }}>
            <Mockup />
          </div>
          <div style={{ position: "relative" }}>
            <RingStat value={analysis.stat.value} label={analysis.stat.label} size={120} />
          </div>
        </div>
      </div>
    </section>
  );
}