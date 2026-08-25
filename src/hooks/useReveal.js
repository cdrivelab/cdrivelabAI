import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal hook. Mirrors the reference's [data-animate] +
 * IntersectionObserver pattern: spread the result onto any element and it
 * fades/slides in once, the first time it enters view.
 *
 * Pass the element's own classes as `baseClassName` rather than writing a
 * separate className prop — the spread would overwrite that prop and the
 * element would lose its styling.
 *
 *   const head = useReveal(0, "section-head");
 *   <div {...head}>…</div>
 */
export function useReveal(delay = 0, baseClassName = "") {
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
    className: [baseClassName, inView && "in-view"].filter(Boolean).join(" "),
    style: { transitionDelay: `${delay}ms` },
  };
}
