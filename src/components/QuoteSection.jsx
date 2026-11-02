import React from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/littleThings.css';

export default function QuoteSection() {
  const { quote } = portfolioData;

  return (
    <section
      className="quote-section reveal-section"
      aria-label="Personal Quote"
    >
      <div className="quote-card">
        {/* Delicate Floating Flowers, Sparkles & Hearts */}
        <span className="quote-deco q-1" aria-hidden="true">
          🌸
        </span>
        <span className="quote-deco q-2" aria-hidden="true">
          ✨
        </span>
        <span className="quote-deco q-3" aria-hidden="true">
          💗
        </span>
        <span className="quote-deco q-4" aria-hidden="true">
          🌷
        </span>

        <div className="quote-flower-badge">
          <Sparkles size={14} aria-hidden="true" />
          <span>Words Close to My Heart</span>
        </div>

        <blockquote className="quote-main-text">
          &ldquo;{quote.text}&rdquo;
        </blockquote>

        <p className="quote-signature">{quote.signature}</p>
      </div>
    </section>
  );
}
