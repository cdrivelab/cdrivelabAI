import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import "./page-hero.css";

export default function PageHero({ title, parent, children }) {
  const heading = useReveal();
  const crumb = useReveal(80, "breadcrumb");

  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const leadWords = words.join(" ");

  return (
    <section className="page-hero">
      <h1 {...heading}>
        {leadWords ? `${leadWords} ` : ""}
        <span className="accent-text">{lastWord}</span>
      </h1>
      <div {...crumb}>
        <Link to="/">Home</Link>
        <span className="sep">/</span>
        {parent && (
          <>
            <Link to={parent.to}>{parent.label}</Link>
            <span className="sep">/</span>
          </>
        )}
        <span className="current">{title}</span>
      </div>
      {children}
    </section>
  );
}