import { useEffect, useRef } from "react";

/**
 * Subtle pointer-follow tilt. Pass an existing ref (e.g. the one from
 * useReveal) to share a single ref with that hook — an element can only
 * carry one ref, so attaching two separately would silently drop one.
 */
export function useTilt(externalRef) {
  const localRef = useRef(null);
  const ref = externalRef || localRef;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${y * -3}deg) rotateY(${x * 3}deg) translateY(-4px)`;
    }
    function onLeave() {
      el.style.transform = "";
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref]);

  return ref;
}
