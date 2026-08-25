import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on every route change. Without this a visitor
 * navigating Home -> About lands wherever they were scrolled to.
 * Hash links are left alone so in-page anchors still work.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
