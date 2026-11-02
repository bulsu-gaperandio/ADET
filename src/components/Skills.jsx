import React from 'react';
import {
  Code2,
  Database,
  Palette,
  Terminal,
  Braces,
  FileCode2,
  Layout,
  Sparkles,
  Atom,
  Server,
  Flame,
  Smartphone,
  Image,
  Film,
  PenTool,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/skills.css';

function getSkillIcon(iconKey) {
  switch (iconKey) {
    case 'cpp':
      return <Terminal size={18} />;
    case 'java':
      return <Braces size={18} />;
    case 'html':
      return <FileCode2 size={18} />;
    case 'css':
      return <Layout size={18} />;
    case 'js':
      return <Code2 size={18} />;
    case 'react':
      return <Atom size={18} />;
    case 'sql':
      return <Database size={18} />;
    case 'mysql':
      return <Server size={18} />;
    case 'firebase':
      return <Flame size={18} />;
    case 'flutter':
      return <Smartphone size={18} />;
    case 'photo':
      return <Image size={18} />;
    case 'video':
      return <Film size={18} />;
    case 'design':
      return <PenTool size={18} />;
    default:
      return <Sparkles size={18} />;
  }
}

function getCategoryIcon(categoryId) {
  if (categoryId === 'programming-web') return <Code2 size={22} />;
  if (categoryId === 'database-tools') return <Database size={22} />;
  return <Palette size={22} />;
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="skills-section section-container reveal-section"
    >
      <div className="section-header">
        <div className="section-eyebrow">
          <Sparkles size={14} aria-hidden="true" />
          <span>Chapter 02 · My Tech Toolkit</span>
        </div>
        <h2 className="section-title">
          My little <em>tech corner.</em>
        </h2>
        <p className="section-subtitle">{skills.supportingText}</p>
      </div>

      <div className="skills-categories-grid">
        {skills.categories.map((category) => (
          <div
            key={category.id}
            className={`skill-category-card ${
              category.items.length <= 3 ? 'single-col' : ''
            }`}
          >
            <div className="skill-category-header">
              <div className="skill-category-icon-wrap" aria-hidden="true">
                {getCategoryIcon(category.id)}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <p className="skill-category-subtitle">{category.subtitle}</p>
            </div>

            <div className="skill-items-list">
              {category.items.map((skill) => (
                <div key={skill.name} className="skill-pill-card">
                  <div className="skill-pill-icon" aria-hidden="true">
                    {getSkillIcon(skill.iconKey)}
                  </div>
                  <div className="skill-pill-info">
                    <span className="skill-pill-name">{skill.name}</span>
                    <span className="skill-pill-tag">{skill.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
