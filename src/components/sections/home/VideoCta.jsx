import { useState } from "react";
import { useReveal } from "../../../hooks/useReveal.js";
import "./video-cta.css";

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
);

export default function VideoCta() {
  const reveal = useReveal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section" style={{ paddingTop: "20px" }}>
      <div className="video-cta" {...reveal}>
        <h2>See how an AI agent handles a real workflow, start to finish.</h2>
        <button type="button" className="play-btn" aria-label="Play video" onClick={() => setIsOpen(true)}>
          <PlayIcon />
        </button>
      </div>

      <div className={`video-modal ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
        <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="video-modal-close" onClick={() => setIsOpen(false)}>✕</button>
          <p>Demo video preview</p>
        </div>
      </div>
    </section>
  );
}