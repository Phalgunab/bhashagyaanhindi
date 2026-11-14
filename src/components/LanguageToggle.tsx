import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`lang-toggle-group ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe size={15} className="lang-icon" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        <span className="lang-label-full">English</span>
        <span className="lang-label-short">EN</span>
      </button>
      <span className="lang-divider" aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
        aria-pressed={language === 'hi'}
        aria-label="हिंदी में बदलें (Switch to Hindi)"
      >
        <span className="lang-label-full">हिन्दी</span>
        <span className="lang-label-short">हिं</span>
      </button>
    </div>
  );
};
