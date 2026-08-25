import { useEffect, useRef } from "react";
import "./custom-cursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ringPos = useRef({ ...mouse.current });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    let raf;
    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.18;
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      raf = requestAnimationFrame(animate);
    };

    const handleOver = (e) => {
      if (e.target.closest("a, button")) {
        dot.classList.add("active");
        ring.classList.add("active");
      }
    };
    const handleOut = (e) => {
      if (e.target.closest("a, button")) {
        dot.classList.remove("active");
        ring.classList.remove("active");
      }
    };
    const handleDown = () => { ring.style.transform = "translate(-50%, -50%) scale(0.85)"; };
    const handleUp = () => { ring.style.transform = "translate(-50%, -50%) scale(1)"; };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}