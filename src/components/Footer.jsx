import "./Footer.css";

const FOOTER_LINKS = [
  {
    col: [
      "About us", "We're hiring", "Hire interns for your company",
      "Post a Job", "Competitions",
    ],
  },
  {
    col: ["Team Diary", "Blog", "Our Services"],
  },
  {
    col: [
      "Terms & Conditions", "Privacy", "Contact us",
      "Annual Returns", "Grievance Redressal",
    ],
  },
  {
    col: ["Sitemap", "College TPO registration", "List of Companies"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Links grid */}
        <div className="footer-links-grid">
          {FOOTER_LINKS.map((col, i) => (
            <div key={i} className="footer-col">
              {col.col.map((link) => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">

          {/* App badges */}
          <div className="footer-apps">
            <a href="#" className="app-badge">
              <svg viewBox="0 0 24 24" className="app-icon" fill="white"><path d="M3.18 23.5c.3.17.65.19.97.07L13.29 12 4.15.43A1.05 1.05 0 003.18.5C2.47.9 2 1.67 2 2.56v18.88c0 .89.47 1.66 1.18 2.06zM16.54 15.27l-2.35-2.35 2.35-2.35 2.9 1.66c.83.47.83 1.24 0 1.71l-2.9 1.33zM4.44 23.75l9.54-9.54 2.09 2.09-9.96 5.71c-.57.33-1.24.3-1.67-.26zM4.44.25c.43-.56 1.1-.59 1.67-.26l9.96 5.71-2.09 2.09L4.44.25z"/></svg>
              <div className="app-badge-text">
                <span className="app-badge-sub">GET IT ON</span>
                <span className="app-badge-main">Google Play</span>
              </div>
            </a>

            <a href="#" className="app-badge">
              <svg viewBox="0 0 24 24" className="app-icon" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="app-badge-text">
                <span className="app-badge-sub">Download on the</span>
                <span className="app-badge-main">App Store</span>
              </div>
            </a>
          </div>

          {/* Social icons */}
          <div className="footer-social">
            {/* Instagram */}
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="footer-copy">
            © Copyright 2026 Internshala<br />
            (Scholiverse Educare Private Limited)
          </div>

        </div>
      </div>
    </footer>
  );
}