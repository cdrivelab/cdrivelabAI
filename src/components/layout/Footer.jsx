import { Link, useLocation } from "react-router-dom";
import { footerColumns, siteConfig } from "../../data/siteConfig.js";
import "../../styles/pages/footer.css";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.6l-5.2-6.8L4.2 22H1.2l8-9.2L2 2h6.8l4.7 6.2L18 2z" /></svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" /></svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
);

function FooterLink({ href, children }) {
  const { pathname } = useLocation();
  if (href.startsWith("/")) return <Link to={href}>{children}</Link>;
  const resolvedHref = pathname === "/" ? href : `/${href}`;
  return <a href={resolvedHref}>{children}</a>;
}

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <div className="logo-mark"><span className="logo-mark__text">C</span></div>
            {siteConfig.name}
          </Link>
          <p>{siteConfig.footerBlurb}</p>
          <div className="social-row">
            <a href="#" aria-label="X"><XIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" aria-label="GitHub"><GitHubIcon /></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          {footerColumns.company.map((link) => (
            <FooterLink href={link.href} key={link.label}>{link.label}</FooterLink>
          ))}
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          {footerColumns.services.map((link) => (
            <FooterLink href={link.href} key={link.label}>{link.label}</FooterLink>
          ))}
        </div>

        <div className="footer-col">
          <h5>Stay in the loop</h5>
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          ·
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
}