import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal hook. Mirrors the reference's [data-animate] +
 * IntersectionObserver pattern: spread { ref, className } onto any
 * element and it fades/slides in once, the first time it enters view.
 */
export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    "data-animate": "",
    className: inView ? "in-view" : "",
    style: { transitionDelay: `${delay}ms` },
  };
}