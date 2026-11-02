import React, { useState } from 'react';
import { Heart, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FamilySection() {
  const { family } = portfolioData.littleThings;
  const [remembranceExpanded, setRemembranceExpanded] = useState(true);

  return (
    <div className="diary-subsection">
      <div className="diary-sub-header">
        <span className="diary-chapter-tag">{family.sectionLabel}</span>
        <h3 className="diary-sub-title">{family.heading}</h3>
      </div>

      <div className="family-grid">
        {/* Sister & Becoming an Aunt Card */}
        <article className="scrapbook-card family-aunt-card">
          <div className="washi-tape" aria-hidden="true" />
          <div>
            <span className="family-card-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>{family.sisterCard.badge}</span>
            </span>

            <h4 className="family-card-title">{family.sisterCard.title}</h4>
            <p className="family-card-text">{family.sisterCard.description}</p>
          </div>

          <blockquote className="family-quote-box">
            {family.sisterCard.caption}
          </blockquote>
        </article>

        {/* Gentle, Respectful Remembrance Card for Her Father */}
        <article className="scrapbook-card family-remembrance-card">
          <div className="washi-tape lavender" aria-hidden="true" />
          <div>
            <div className="remembrance-header">
              <span className="remembrance-badge">
                <Heart size={13} aria-hidden="true" />
                <span>{family.fatherRemembrance.badge}</span>
              </span>

              <button
                type="button"
                className="remembrance-toggle-btn"
                onClick={() => setRemembranceExpanded((prev) => !prev)}
                aria-expanded={remembranceExpanded}
              >
                {remembranceExpanded ? (
                  <>
                    <span>Minimize</span>{' '}
                    <ChevronUp
                      size={13}
                      style={{ display: 'inline', verticalAlign: 'middle' }}
                    />
                  </>
                ) : (
                  <>
                    <span>Read Tribute</span>{' '}
                    <ChevronDown
                      size={13}
                      style={{ display: 'inline', verticalAlign: 'middle' }}
                    />
                  </>
                )}
              </button>
            </div>

            <h4 className="remembrance-title">
              {family.fatherRemembrance.heading}
            </h4>

            {remembranceExpanded && (
              <p className="remembrance-message">
                &ldquo;{family.fatherRemembrance.text}&rdquo;
              </p>
            )}
          </div>

          <div className="remembrance-footer">
            <span>Always in my heart ♡</span>
            <span aria-hidden="true">🌷 ✨</span>
          </div>
        </article>
      </div>
    </div>
  );
}
