import React from 'react';
import { BookHeart, Film, Gamepad2, Headphones } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import FamilySection from './FamilySection';
import DogProfiles from './DogProfiles';
import '../styles/littleThings.css';

function getHobbyIcon(iconKey) {
  if (iconKey === 'movies') return <Film size={28} />;
  if (iconKey === 'games') return <Gamepad2 size={28} />;
  return <Headphones size={28} />;
}

export default function LittleThings() {
  const { littleThings } = portfolioData;
  const { hobbies, loves } = littleThings;

  return (
    <section
      id="little-things"
      className="little-things-wrapper reveal-section"
    >
      <div className="section-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <BookHeart size={15} aria-hidden="true" />
            <span>Chapter 04 · Personal Digital Diary</span>
          </div>
          <h2 className="section-title">
            The little things that <em>make me, me.</em>
          </h2>
          <p className="section-subtitle">{littleThings.supportingText}</p>
        </div>

        {/* Scrapbook Notebook Container */}
        <div className="diary-notebook-shell">
          {/* A. My Family ♡ */}
          <FamilySection />

          {/* B. My Three Little Fur Babies 🐾 */}
          <DogProfiles />

          {/* C. My Hobbies 🎧 */}
          <div className="diary-subsection">
            <div className="diary-sub-header">
              <span className="diary-chapter-tag">{hobbies.sectionLabel}</span>
              <h3 className="diary-sub-title">{hobbies.heading}</h3>
            </div>

            <div className="hobbies-grid">
              {hobbies.items.map((hobby) => (
                <article key={hobby.id} className="hobby-card">
                  <div className="hobby-icon-circle" aria-hidden="true">
                    {getHobbyIcon(hobby.iconKey)}
                  </div>
                  <h4 className="hobby-title">{hobby.title}</h4>
                  <p className="hobby-desc">{hobby.description}</p>
                  <span className="hobby-sticker">{hobby.sticker}</span>
                </article>
              ))}
            </div>
          </div>

          {/* D. Little Things I Love */}
          <div className="diary-subsection">
            <div className="diary-sub-header">
              <span className="diary-chapter-tag">{loves.sectionLabel}</span>
              <h3 className="diary-sub-title">{loves.heading}</h3>
            </div>

            <div className="loves-collection-box">
              <div className="loves-pills-wrap">
                {loves.items.map((item) => (
                  <div key={item.label} className="love-sticker-item">
                    <span className="love-sticker-emoji" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <span className="love-sticker-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
