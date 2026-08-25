import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, offCanvasLinks, siteConfig, CONTACT_HREF } from "../../data/siteConfig.js";
import ServicesMegaMenu from "../services/ServicesMegaMenu.jsx";
import "../../styles/pages/header.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
);

function NavLink({ href, children, onClick, className }) {
  const { pathname } = useLocation();
  if (href.startsWith("/")) {
    return <Link to={href} onClick={onClick} className={className}>{children}</Link>;
  }
  const resolvedHref = pathname === "/" ? href : `/${href}`;
  return <a href={resolvedHref} onClick={onClick} className={className}>{children}</a>;
}

export default function Header() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const isSolidBg = !isHome || isScrolled;
  const headerClassName = [isSolidBg && "is-solid", isScrolled && "scrolled"].filter(Boolean).join(" ");

  return (
    <>
      <header className={headerClassName} id="siteHeader">
        <Link to="/" className="logo">
          <div className="logo-mark">
            <span className="logo-mark__text">C</span>
          </div>
          {siteConfig.name}
        </Link>

        <nav className="main-nav">
          {navLinks.map((item) => (
            <div
              className={`nav-item ${isActive(item.href) ? "is-active" : ""} ${item.mega ? "nav-item--mega" : ""}`}
              key={item.label}
            >
              <NavLink href={item.href}>
                {item.label}
                {(item.dropdown || item.mega) && <ChevronIcon />}
              </NavLink>
              {item.dropdown && (
                <div className="nav-dropdown">
                  {item.dropdown.map((sub) => (
                    <NavLink href={sub.href} key={sub.label}>{sub.label}</NavLink>
                  ))}
                </div>
              )}
              {item.mega && <ServicesMegaMenu />}
            </div>
          ))}
        </nav>

        <div className="header-right">
          <NavLink href={CONTACT_HREF} className="btn btn-primary">
            <span className="get-started-label">Get Started</span>
            <span className="icon-circle"><ArrowIcon /></span>
          </NavLink>
          <button
            type="button"
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`offcanvas-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu} />
      <div className={`offcanvas ${isMenuOpen ? "open" : ""}`}>
        {offCanvasLinks.map((link) => (
          <NavLink href={link.href} key={link.label} onClick={closeMenu}>{link.label}</NavLink>
        ))}
      </div>
    </>
  );
}