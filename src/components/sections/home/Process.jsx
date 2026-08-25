import { useReveal } from "../../../hooks/useReveal.js";
import { processSteps } from "../../../data/siteConfig.js";
import "./process.css";

function ProcessStep({ step, index }) {
  const reveal = useReveal(index * 90, "process-step");
  return (
    <div {...reveal}>
      <div className="process-num">{step.num}</div>
      <h4>{step.title}</h4>
      <p>{step.description}</p>
    </div>
  );
}

export default function Process() {
  const head = useReveal(0, "section-head");
  return (
    <section className="section" id="process">
      <div {...head}>
        <span className="kicker">How It Works</span>
        <h2>From first call to shipped AI system</h2>
      </div>
      <div className="process-row">
        {processSteps.map((step, i) => (
          <ProcessStep step={step} index={i} key={step.num} />
        ))}
      </div>
    </section>
  );
}