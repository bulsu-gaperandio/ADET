import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'little-things', label: 'Little Things' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav
        className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}
        aria-label="Primary Navigation"
      >
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span>Gaea Athena</span>
          <span className="navbar-logo-heart" aria-hidden="true">
            ♡
          </span>
        </a>

        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`navbar-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu" role="dialog" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`navbar-mobile-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span>{item.label}</span>
                <Sparkles size={15} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
