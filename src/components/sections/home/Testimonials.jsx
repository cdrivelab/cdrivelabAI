import { useRef, useState } from "react";
import { useReveal } from "../../../hooks/useReveal.js";
import { faqs as defaultFaqs } from "../../../data/siteConfig.js";
import "./faq.css";

function FaqItem({ item, isOpen, onToggle }) {
  const answerRef = useRef(null);
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button type="button" className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-icon" />
      </button>
      <div
        className="faq-a"
        ref={answerRef}
        style={{ maxHeight: isOpen ? `${answerRef.current?.scrollHeight ?? 200}px` : 0 }}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function Faq({
  faqs = defaultFaqs,
  kicker = "FAQ",
  title = "Questions, answered",
  description,
  sectionId = "faq",
}) {
  const head = useReveal();
  const list = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id={sectionId}>
      <div className="section-head" {...head}>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <div className="faq-list" {...list}>
        {faqs.map((item, i) => (
          <FaqItem
            item={item}
            key={item.q}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}