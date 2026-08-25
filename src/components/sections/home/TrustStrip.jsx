import "./trust-strip.css";

const capabilities = [
  "AI Consulting",
  "AI Automation",
  "Agentic AI",
  "AI Training",
  "Product Development",
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-strip__inner">
        <p className="trust-strip__label mono">No hype. No vendor lock-in.</p>
        <ul className="trust-strip__list">
          {capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
