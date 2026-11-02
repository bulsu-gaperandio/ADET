import React, { useState } from 'react';
import { PawPrint, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function DogCard({ dog }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className={`dog-profile-card theme-${dog.theme}`}>
      <div className="dog-card-stickers">
        <span className="dog-theme-badge">{dog.badge}</span>
        <div className="dog-deco-icons" aria-hidden="true">
          {dog.decorations.map((icon, idx) => (
            <span key={idx}>{icon}</span>
          ))}
        </div>
      </div>

      {/* Dog Photograph with Graceful Fallback */}
      <div className="dog-photo-frame">
        {dog.image && !imgError ? (
          <img
            src={dog.image}
            alt={`${dog.cleanName}, Gaea's ${dog.breed} dog`}
            className="dog-photo-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="dog-photo-fallback">
            <PawPrint size={36} strokeWidth={1.5} />
            <p style={{ fontWeight: 700, marginTop: '8px' }}>{dog.name}</p>
            <p style={{ fontSize: '0.78rem', marginTop: '4px' }}>
              Place photo at <code>{dog.imagePathHint}</code>
            </p>
          </div>
        )}
      </div>

      {/* Dog Name & Breed */}
      <div className="dog-header-info">
        <h4 className="dog-name">{dog.name}</h4>
        <p className="dog-breed-line">
          {dog.breed} {dog.gender ? `· ${dog.gender}` : ''}
        </p>
      </div>

      {/* Quick Personality Trait Pills */}
      <div className="dog-traits-row" aria-label={`${dog.cleanName}'s traits`}>
        {dog.traits.map((trait) => (
          <span key={trait} className="dog-trait-dot">
            {trait}
          </span>
        ))}
      </div>

      {/* Full Description */}
      <p className="dog-description">{dog.description}</p>

      {/* Cute Personality Tags */}
      <div className="dog-tags-wrap" aria-label="Personality tags">
        {dog.tags.map((tag) => (
          <span key={tag} className="dog-personality-tag">
            🐾 {tag}
          </span>
        ))}
      </div>

      {/* Highlighted Fun Fact */}
      <div className="dog-fun-fact">
        <span className="dog-fun-fact-icon" aria-hidden="true">
          <Sparkles size={18} color="#B76E8B" />
        </span>
        <span>{dog.funFact}</span>
      </div>
    </article>
  );
}

export default function DogProfiles() {
  const { dogs } = portfolioData.littleThings;

  return (
    <div className="diary-subsection">
      <div className="diary-sub-header">
        <span className="diary-chapter-tag">{dogs.sectionLabel}</span>
        <h3 className="diary-sub-title">{dogs.heading}</h3>
        <p className="diary-sub-desc">{dogs.supportingText}</p>
      </div>

      <div className="dogs-grid">
        {dogs.list.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>

      <div className="dogs-bottom-banner">{dogs.footerNote}</div>
    </div>
  );
}
