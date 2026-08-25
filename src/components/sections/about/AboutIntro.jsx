import { useReveal } from "../../../hooks/useReveal.js";
import { useCounter } from "../../../hooks/useCounter.js";
import LogoTicker from "../../sections/home/LogoTicker.jsx";
import { aboutIntro } from "../../../data/siteConfig.js";
import "./about-intro.css";

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

export default function AboutIntro() {
  const badge = useReveal();
  const heading = useReveal(80);
  const row = useReveal(160);
  const { ref: countRef, value } = useCounter(aboutIntro.bigStat.value, 2000);

  return (
    <section className="section" style={{ paddingTop: "20px" }}>
      <div className="agency-head">
        <div className="badge about-badge" {...badge}>
          <SparkleIcon />
          {aboutIntro.kicker}
        </div>
        <h2 {...heading}>{aboutIntro.heading}</h2>
      </div>

      <div className="agency-row" {...row}>
        <div className="agency-stat">
          <div className="agency-stat__count" ref={countRef}>
  {value}+
</div>
          <div className="agency-stat__label">{aboutIntro.bigStat.label}</div>
        </div>

        <div className="agency-divider" aria-hidden="true" />

        <div className="agency-content">
          <p className="mission-lead">{aboutIntro.missionLead}</p>
          <p className="agency-body">{aboutIntro.body}</p>
          <div className="agency-cta-row">
            <a href="#contact" className="btn btn-primary">
              {aboutIntro.ctaLabel}
              <span className="icon-circle"><ArrowIcon /></span>
            </a>
            <div className="agency-second-stat">
              <div className="avatar-stack">
                {aboutIntro.secondStat.initials.map((i) => <div className="av" key={i}>{i}</div>)}
              </div>
              <span>
                <b>{aboutIntro.secondStat.value}+</b> {aboutIntro.secondStat.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      <LogoTicker caption="Trusted by leading companies" />
    </section>
  );
}