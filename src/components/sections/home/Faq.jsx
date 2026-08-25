import { useRef, useState } from "react";
import { useReveal } from "../../../hooks/useReveal.js";
import { faqs as defaultFaqs } from "../../../data/siteConfig.js";
import "./faq.css";

function FaqItem({ item, index, numbered, isOpen, onToggle }) {
  const answerRef = useRef(null);
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button type="button" className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-q__text">
          {numbered && <span className="faq-num">{index + 1}.</span>}
          <span>{item.q}</span>
        </span>
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
  numbered = false,
  visual = null,
}) {
  const head = useReveal(0, "section-head");
  const list = useReveal(0, "faq-list");
  const [openIndex, setOpenIndex] = useState(0);

  const items = faqs.map((item, i) => (
    <FaqItem
      item={item}
      index={i}
      numbered={numbered}
      key={item.q}
      isOpen={openIndex === i}
      onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
    />
  ));

  return (
    <section className="section" id={sectionId}>
      <div {...head}>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      {visual ? (
        <div className="faq-with-visual">
          <div className="faq-visual">{visual}</div>
          <div {...list}>{items}</div>
        </div>
      ) : (
        <div {...list}>{items}</div>
      )}
    </section>
  );
}