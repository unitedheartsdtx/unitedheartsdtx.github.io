import {BrandMark} from './BrandMark.jsx';
import {siteConfig} from '../data/site.js';
import {SiteLink} from '../router.jsx';

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5.1" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <BrandMark />
        <p className="footer-motto">From surplus to purpose.</p>
      </div>
      <nav className="footer-links" aria-label="Footer">
        <SiteLink href="/about">About</SiteLink>
        <SiteLink href="/get-involved">Get involved</SiteLink>
        <SiteLink href="/partnerships">Partnerships</SiteLink>
        <SiteLink href="/contact">Contact</SiteLink>
      </nav>
      <div className="footer-signal" aria-label="United Hearts process">
        <span>Safe surplus pickups</span>
        <i />
        <span>Frontliner visits</span>
        <i />
        <span>Stories that move people</span>
      </div>
      <div className="footer-social">
        <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="United Hearts Instagram">
          <InstagramMark />
          <span>{siteConfig.instagramHandle}</span>
        </a>
      </div>
    </footer>
  );
}
