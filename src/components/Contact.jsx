import React, { useState } from 'react';
import {
  Mail,
  Instagram,
  Facebook,
  Github,
  Send,
  Info,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/contact.css';

function getSocialIcon(id) {
  switch (id) {
    case 'email':
      return <Mail size={19} />;
    case 'instagram':
      return <Instagram size={19} />;
    case 'facebook':
      return <Facebook size={19} />;
    case 'github':
      return <Github size={19} />;
    default:
      return <Sparkles size={19} />;
  }
}

export default function Contact() {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submittedNote, setSubmittedNote] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submittedNote) setSubmittedNote(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If Gaea configures her email address in portfolioData.js, open the user's email client with prefilled fields.
    if (contact.emailAddress && contact.emailAddress.trim() !== '') {
      const mailtoSubject = encodeURIComponent(formData.subject || 'Hello Gaea!');
      const mailtoBody = encodeURIComponent(
        `Hi Gaea,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${contact.emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }

    // Clearly explain that backend/email service integration is needed rather than faking delivery
    setSubmittedNote(true);
  };

  return (
    <section
      id="contact"
      className="contact-section section-container reveal-section"
    >
      <div className="section-header">
        <div className="section-eyebrow">
          <Mail size={14} aria-hidden="true" />
          <span>Chapter 05 · Let&apos;s Connect</span>
        </div>
        <h2 className="section-title">
          Have something <em>to say?</em>
        </h2>
        <p className="section-subtitle">{contact.supportingText}</p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Social & Contact Placeholders */}
        <div className="contact-info-card">
          <h3 className="contact-info-title">Find me in my little corner ♡</h3>
          <p className="contact-info-text">
            Feel free to say hello or connect with me through my channels below.
          </p>

          <div className="contact-socials-list">
            {contact.socials.map((item) => {
              const hasLink = Boolean(item.href && item.href.trim() !== '');
              const isMailto = hasLink && item.href.startsWith('mailto:');
              const Wrapper = hasLink ? 'a' : 'div';
              const wrapperProps = hasLink
                ? {
                    href: item.href,
                    ...(isMailto
                      ? {}
                      : { target: '_blank', rel: 'noopener noreferrer' }),
                  }
                : {};

              return (
                <Wrapper
                  key={item.id}
                  className={`contact-social-item ${hasLink ? 'is-link' : ''}`}
                  {...wrapperProps}
                >
                  <div className="contact-social-icon" aria-hidden="true">
                    {getSocialIcon(item.id)}
                  </div>
                  <div className="contact-social-meta">
                    <span className="contact-social-label">{item.label}</span>
                    <span className="contact-social-placeholder">
                      {item.displayValue || item.placeholderText}
                    </span>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <div className="contact-service-notice">
            <Info
              size={15}
              style={{
                display: 'inline',
                verticalAlign: 'middle',
                marginRight: '6px',
                color: '#B76E8B',
              }}
            />
            <strong>Easy to customize:</strong> Update your Email, Instagram,
            Facebook, and GitHub links anytime inside{' '}
            <code>src/data/portfolioData.js</code>.
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                className="form-input"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                className="form-textarea"
                placeholder="Write a sweet note or project inquiry here..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn-primary contact-submit-btn"
            >
              <Send size={17} />
              <span>Send Message ♡</span>
            </button>
          </form>

          {submittedNote && (
            <div
              className="contact-integration-box"
              role="status"
              aria-live="polite"
            >
              <strong>
                Email / Backend Integration Required before Live Delivery
              </strong>
              <p>
                Your message for <em>&ldquo;{formData.subject}&rdquo;</em> is
                validated in the form, but no backend or email service (such as
                EmailJS, Formspree, or a custom API endpoint) is connected yet
                — so this message has <strong>not</strong> been delivered over
                the internet. To enable direct delivery, add your email address
                or connect an email service in{' '}
                <code>src/components/Contact.jsx</code> and{' '}
                <code>src/data/portfolioData.js</code>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
