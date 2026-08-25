import { useEffect, useState } from "react";
import "./preloader.css";

export default function Preloader() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isDone ? "done" : ""}`} aria-hidden="true">
      <div className="preloader-mark" />
    </div>
  );
}