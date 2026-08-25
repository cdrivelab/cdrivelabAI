import { forwardRef } from "react";
import { Link } from "react-router-dom";

/**
 * Renders a router Link for internal paths and a plain anchor for
 * everything else (mailto:, hash targets, external URLs). Lets CTA
 * components point at a configurable href without each one having to
 * know whether it's a route — a plain <a href="/contact"> would otherwise
 * trigger a full page reload in this SPA.
 *
 * Refs are forwarded because callers spread useReveal() onto it, and that
 * object carries the ref the IntersectionObserver observes.
 */
const ActionLink = forwardRef(function ActionLink({ href, className, children, ...rest }, ref) {
  const isRoute = href.startsWith("/") && !href.startsWith("//");

  if (isRoute) {
    return <Link to={href} className={className} ref={ref} {...rest}>{children}</Link>;
  }
  return <a href={href} className={className} ref={ref} {...rest}>{children}</a>;
});

export default ActionLink;
