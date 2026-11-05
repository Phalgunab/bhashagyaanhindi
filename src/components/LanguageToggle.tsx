import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  const handleSelect = (lang: Language) => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  return (
    <div
      className={`lang-toggle-container ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe size={15} className="lang-globe-icon" aria-hidden="true" />
      <div className="lang-toggle-pills">
        <button
          type="button"
          onClick={() => handleSelect('en')}
          className={`lang-pill-btn ${language === 'en' ? 'active' : ''}`}
          aria-pressed={language === 'en'}
          aria-label="Switch to English"
        >
          {language === 'en' && (
            <motion.div
              layoutId="lang-active-pill"
              className="lang-pill-indicator"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="lang-pill-text">EN</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelect('hi')}
          className={`lang-pill-btn font-hindi ${language === 'hi' ? 'active' : ''}`}
          aria-pressed={language === 'hi'}
          aria-label="हिंदी भाषा में बदलें"
        >
          {language === 'hi' && (
            <motion.div
              layoutId="lang-active-pill"
              className="lang-pill-indicator"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="lang-pill-text">हिन्दी</span>
        </button>
      </div>
    </div>
  );
};
