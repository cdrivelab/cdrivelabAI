import { useReveal } from "../../../hooks/useReveal.js";
import { partnerLogos } from "../../../data/siteConfig.js";
import "./logo-ticker.css";

export default function LogoTicker({ caption }) {
  const reveal = useReveal();
  const loop = [...partnerLogos, ...partnerLogos];

  return (
    <>
      {caption && <p className="marquee-caption">{caption}</p>}
      <div className="marquee-wrap" {...reveal}>
        <div className="marquee-track">
          {loop.map((name, i) => <span key={`${name}-${i}`}>{name}</span>)}
        </div>
      </div>
    </>
  );
}