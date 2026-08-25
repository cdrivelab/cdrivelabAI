import { useRef } from "react";
import "./magnetic-button.css";

export default function MagneticButton({ as: Tag = "a", className = "", children, ...props }) {
    
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const relX = (x / rect.width - 0.5) * 14;
    const relY = (y / rect.height - 0.5) * 10;
    el.style.setProperty("--fill-x", `${x}px`);
    el.style.setProperty("--fill-y", `${y}px`);
    el.style.transform = `translate(${relX}px, ${relY}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <Tag
      ref={ref}
      className={`magnetic-btn ${className}`}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      <span className="magnetic-btn__fill" aria-hidden="true" />
      <span className="magnetic-btn__label">{children}</span>
    </Tag>
  );
}