import { useReveal } from "../../../hooks/useReveal.js";
import { useCounter } from "../../../hooks/useCounter.js";
import { heroBento } from "../../../data/siteConfig.js";
import Mockup from "../../common/Mockup.jsx";
import "./hero.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);
const SparkleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="14"
    height="14"
    aria-hidden="true"
    role="img"
    focusable="false"
  >
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
  </svg>
);
const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="14"
    height="14"
    aria-hidden="true"
    role="img"
    focusable="false"
  >
    <path d="M12 2l2.9 6.4 7 .7-5.3 4.6 1.6 6.9L12 17l-6.2 3.6 1.6-6.9L2.1 9.1l7-.7L12 2z" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-14 9V3z" /></svg>
);

function StatCard() {
  const reveal = useReveal();
  const { ref: countRef, value } = useCounter(heroBento.stat.value);
  return (
    <div className="bento-card bento-stat" {...reveal}>
      <div className="count" ref={countRef}>{value}</div>
      <div className="label">{heroBento.stat.label}</div>
    </div>
  );
}

function VisualCard() {
  const reveal = useReveal(100);
  return (
    <div className="bento-card bento-visual" {...reveal}>
      <Mockup />
      <div className="label">{heroBento.visual.label}</div>
    </div>
  );
}

function QuoteCard() {
  const reveal = useReveal(200);
  return (
    <div className="bento-card bento-quote" {...reveal}>
      <div className="avatar-stack">
        {heroBento.quote.initials.map((i) => <div className="av" key={i}>{i}</div>)}
      </div>
      <p>"{heroBento.quote.text}"</p>
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
      </div>
    </div>
  );
}

function VideoCard() {
  const reveal = useReveal(300);
  return (
    <div className="bento-card bento-video" {...reveal}>
      <div className="vicon"><PlayIcon /></div>
      <div className="label" dangerouslySetInnerHTML={{ __html: heroBento.video.label }} />
    </div>
  );
}

export default function Hero() {
  const badge = useReveal();
  const heading = useReveal(80);
  const lead = useReveal(160);
  const actions = useReveal(240);

  return (
    <>
      <section className="hero" id="top">
        <div className="badge hero-badge">
          <SparkleIcon />
          Smart AI. Real Results.
        </div>

        <h1 {...heading}>
          Build smarter businesses with powerful <span className="accent-text">AI solutions</span>
        </h1>

        <p {...lead}>
          C-DriveLab helps businesses unlock the true power of artificial intelligence
          by creating smart, scalable, and result-driven solutions tailored to their
          needs — from automating repetitive tasks to delivering intelligent insights
          that drive real growth.
        </p>

        <div className="hero-actions" {...actions}>
          <a href="#contact" className="btn btn-primary">
            Build With AI
            <span className="icon-circle"><ArrowIcon /></span>
          </a>
          <a href="#contact" className="btn btn-light">
            Contact Us
            <span className="icon-circle"><ArrowIcon /></span>
          </a>
        </div>
      </section>

      <div className="bento" id="bento">
        <StatCard />
        <VisualCard />
        <QuoteCard />
        <VideoCard />
      </div>
    </>
  );
}