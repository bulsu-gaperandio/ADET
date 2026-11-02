import React from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/about.css';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="about-section section-container reveal-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <Sparkles size={14} aria-hidden="true" />
          <span>Chapter 01 · Who I Am</span>
        </div>
        <h2 className="section-title">
          A little <em>about me...</em>
        </h2>
      </div>

      {/* Main Personal Introduction Card */}
      <div className="about-intro-card">
        <div className="about-intro-tape" aria-hidden="true" />
        <p className="about-intro-text">{about.introduction}</p>
      </div>

      {/* Three Individual Personality Cards */}
      <div className="about-cards-grid">
        {about.cards.map((card) => (
          <article
            key={card.id}
            className={`personality-card accent-${card.accent}`}
          >
            <div>
              <div className="personality-card-top">
                <span className="personality-badge">{card.badge}</span>
                <div className="personality-emoji-bubble" aria-hidden="true">
                  {card.emoji}
                </div>
              </div>

              <h3 className="personality-title">{card.title}</h3>
              <p className="personality-description">{card.description}</p>
            </div>

            <div className="personality-sticker">{card.sticker}</div>
          </article>
        ))}
      </div>

      {/* Handwritten-style Signature */}
      <div className="about-signature-wrap">
        <p className="about-signature" aria-label="That's me, Gaea">
          {about.signature}
        </p>
      </div>
    </section>
  );
}
