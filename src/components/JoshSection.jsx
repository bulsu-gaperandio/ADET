import React, { useState } from 'react';
import { Heart, Cat } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function JoshSection() {
  const { josh } = portfolioData.littleThings;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="diary-subsection">
      <div className="diary-sub-header">
        <span className="diary-chapter-tag">{josh.sectionLabel}</span>
        <h3 className="diary-sub-title">{josh.heading}</h3>
      </div>

      <article className="josh-scrapbook-card">
        <div className="washi-tape" aria-hidden="true" />

        {/* Polaroid Frame for Gaea and Josh */}
        <div className="josh-polaroid">
          <div className="josh-photo-box">
            {josh.image && !imgError ? (
              <img
                src={josh.image}
                alt="Gaea and her boyfriend Josh smiling together"
                className="josh-photo-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  textAlign: 'center',
                  color: 'var(--muted-rose)',
                }}
              >
                <Heart size={36} />
                <p style={{ fontWeight: 700, marginTop: '8px' }}>
                  Gaea &amp; {josh.name} ♡
                </p>
                <p style={{ fontSize: '0.78rem', marginTop: '4px' }}>
                  Place photo at <code>{josh.imagePathHint}</code>
                </p>
              </div>
            )}
          </div>
          <p className="josh-polaroid-caption">Me &amp; {josh.name} ♡</p>
        </div>

        {/* Sweet Scrapbook Note & Cat Illustration Detail */}
        <div className="josh-details">
          <span className="josh-name-pill">
            <Heart size={14} fill="#B76E8B" color="#B76E8B" aria-hidden="true" />
            <span>{josh.name} ♡</span>
          </span>

          <h4 className="josh-title">Little moments with {josh.name} ♡</h4>

          <p className="josh-caption-text">&ldquo;{josh.caption}&rdquo;</p>

          <div className="josh-cat-badge">
            <div className="josh-cat-illustration" aria-hidden="true">
              <Cat size={22} color="#49334D" />
            </div>
            <div>
              <p className="josh-cat-text">{josh.funFact}</p>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--plum-muted)',
                  marginTop: '2px',
                }}
              >
                🐱 Purr-fectly approved!
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
