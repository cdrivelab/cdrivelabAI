import ActionLink from "./ActionLink.jsx";
import { CONTACT_HREF } from "../../data/siteConfig.js";
import { useReveal } from "../../hooks/useReveal.js";
import "./common-ui.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.4 7 .7-5.3 4.6 1.6 6.9L12 17l-6.2 3.6 1.6-6.9L2.1 9.1l7-.7L12 2z" /></svg>
);

export default function CtaBand({ heading, buttonLabel, buttonHref = CONTACT_HREF, rating, style }) {
  const reveal = useReveal(0, "cta-band");
  return (
    <div {...reveal} style={{ ...reveal.style, ...style }}>
      {rating && (
        <div className="cta-rating">
          <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
          </div>
          <span><span className="num">{rating.score}</span> Rated by {rating.count} happy clients</span>
        </div>
      )}
      <h2>{heading}</h2>
      <ActionLink href={buttonHref} className="btn btn-primary">
        {buttonLabel}
        <span className="icon-circle"><ArrowIcon /></span>
      </ActionLink>
    </div>
  );
}