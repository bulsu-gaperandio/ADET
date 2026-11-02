import React from 'react';
import {
  ArrowUp,
  Mail,
  Instagram,
  Facebook,
  Github,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/contact.css';

function getFooterIcon(id) {
  switch (id) {
    case 'email':
      return <Mail size={17} />;
    case 'instagram':
      return <Instagram size={17} />;
    case 'facebook':
      return <Facebook size={17} />;
    case 'github':
      return <Github size={17} />;
    default:
      return null;
  }
}

export default function Footer() {
  const { footer, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          Gaea Athena <span style={{ color: '#B76E8B' }}>♡</span> 🌸
        </div>

        <p className="footer-tagline">{footer.tagline}</p>

        {/* Social Media Placeholders */}
        <div className="footer-socials" aria-label="Social media and contact">
          {contact.socials.map((social) => {
            const hasHref = Boolean(social.href && social.href.trim() !== '');
            const isMailto = hasHref && social.href.startsWith('mailto:');
            const labelText = social.displayValue
              ? `${social.label}: ${social.displayValue}`
              : social.label;
            if (hasHref) {
              return (
                <a
                  key={social.id}
                  href={social.href}
                  {...(isMailto
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="footer-social-btn"
                  aria-label={labelText}
                  title={labelText}
                >
                  {getFooterIcon(social.id)}
                </a>
              );
            }
            return (
              <a
                key={social.id}
                href="#contact"
                className="footer-social-btn"
                aria-label={labelText}
                title={labelText}
              >
                {getFooterIcon(social.id)}
              </a>
            );
          })}
        </div>

        <div className="footer-bottom-row">
          <span>{footer.copyright}</span>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
