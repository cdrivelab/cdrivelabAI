import "./radial-mark.css";

/**
 * Signature graphic for C-DriveLab: a line-art radial dial.
 * Concept: half instrument gauge, half stone wheel — a nod to Bhubaneswar's
 * carved temple wheels (Konark Sun Temple) read through the lens of a
 * precision measuring instrument. Used once, in the hero, as the page's
 * one deliberate visual signature.
 */
export default function RadialMark() {
  const ticks = Array.from({ length: 36 });

  return (
    <svg
      className="radial-mark"
      viewBox="0 0 400 400"
      role="img"
      aria-label="C-DriveLab radial instrument mark"
    >
      <circle cx="200" cy="200" r="170" className="radial-mark__ring" />
      <circle cx="200" cy="200" r="120" className="radial-mark__ring radial-mark__ring--faint" />

      {ticks.map((_, i) => {
        const angle = (i / ticks.length) * 360;
        const isMajor = i % 3 === 0;
        return (
          <line
            key={i}
            x1="200"
            y1="30"
            x2="200"
            y2={isMajor ? "48" : "40"}
            className={isMajor ? "radial-mark__tick radial-mark__tick--major" : "radial-mark__tick"}
            transform={`rotate(${angle} 200 200)`}
          />
        );
      })}

      <line
        x1="200"
        y1="200"
        x2="200"
        y2="70"
        className="radial-mark__needle"
        transform="rotate(38 200 200)"
      />
      <circle cx="200" cy="200" r="8" className="radial-mark__hub" />
    </svg>
  );
}
