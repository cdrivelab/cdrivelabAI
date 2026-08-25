import { useReveal } from "../../../hooks/useReveal.js";
import { highlightBand } from "../../../data/siteConfig.js";
import "./highlight-band.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);
const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-14 9V3z" /></svg>
);

export default function HighlightBand() {
  const copy = useReveal();
  const visual = useReveal(100);

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="highlight-grid">
        <div {...copy}>
          <h2>{highlightBand.heading}</h2>
          <p>{highlightBand.body}</p>
          <div className="pill-row">
            {highlightBand.pills.map((pill) => <span className="pill" key={pill}>{pill}</span>)}
          </div>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
            <span className="icon-circle"><ArrowIcon /></span>
          </a>
        </div>
        <div className="highlight-visual" {...visual}>
          <div className="vicon"><PlayIcon /></div>
        </div>
      </div>
    </section>
  );
}