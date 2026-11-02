import React, { useState } from 'react';
import { Heart, Sparkles, ArrowDownRight, FolderHeart, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/hero.css';

export default function Hero() {
  const { hero, owner } = portfolioData;
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Introduction & CTA */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-sparkle" aria-hidden="true">
              ✨
            </span>
            <span>{hero.badge}</span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m{' '}
            <span className="hero-title-highlight">Gaea Athena ♡</span>
          </h1>

          <p className="hero-subheading">{hero.subheading}</p>

          <p className="hero-intro">{hero.introduction}</p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => scrollToSection('about')}
            >
              <Heart size={18} />
              <span>{hero.primaryCta}</span>
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              <FolderHeart size={18} />
              <span>{hero.secondaryCta}</span>
              <ArrowDownRight size={17} />
            </button>
          </div>

          <div className="hero-diary-strip">
            <Sparkles size={16} color="#B76E8B" aria-hidden="true" />
            <span>
              21 · IT Student ·{' '}
              <span className="handwritten">Welcome to my little world ♡</span>
            </span>
          </div>
        </div>

        {/* Right Column: Decorative Feminine Portrait Frame & Floating Traits */}
        <div className="hero-visual-wrapper">
          <div className="hero-frame-Halo" aria-hidden="true" />

          {/* Surrounding Floating Elements: Hearts, Flowers, Stars, Butterflies */}
          <span className="hero-ornament orn-1" aria-hidden="true">
            🦋
          </span>
          <span className="hero-ornament orn-2" aria-hidden="true">
            🌸
          </span>
          <span className="hero-ornament orn-3" aria-hidden="true">
            ✨
          </span>
          <span className="hero-ornament orn-4" aria-hidden="true">
            💗
          </span>

          {/* Floating Personality Cards around Portrait */}
          {hero.floatingTraits.map((trait) => (
            <div
              key={trait.label}
              className={`hero-trait-card trait-${trait.position}`}
            >
              <span className="hero-trait-icon" aria-hidden="true">
                {trait.icon}
              </span>
              <span>{trait.label}</span>
            </div>
          ))}

          {/* Main Portrait Frame */}
          <div className="hero-portrait-card">
            <div className="hero-ribbon-top" aria-hidden="true">
              🎀
            </div>

            <div className="hero-portrait-inner">
              {owner.profileImage && !imgError ? (
                <img
                  src={owner.profileImage}
                  alt="Portrait of Gaea Athena Erandio, a 21-year-old Information Technology student"
                  className="hero-portrait-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="hero-portrait-placeholder">
                  <Camera size={38} strokeWidth={1.5} />
                  <p style={{ fontWeight: 700, marginTop: '10px' }}>
                    Gaea Athena ♡
                  </p>
                  <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                    Place photo at src/assets/images/profile/gaea.jpg
                  </p>
                </div>
              )}
            </div>

            <p className="hero-portrait-caption">Gaea Athena Erandio ♡</p>
          </div>
        </div>
      </div>
    </section>
  );
}
