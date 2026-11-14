import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { logWhatsAppClickToFirebase } from '../services/firebase';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'button' | 'inline';
  className?: string;
  label?: string;
  customMessage?: string;
  style?: React.CSSProperties;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  variant = 'button',
  className = '',
  label,
  customMessage,
  style,
}) => {
  const { content, language } = useLanguage();
  const effectiveMessage = customMessage || content.contact.prefilledWhatsAppMessage;
  const url = getWhatsAppUrl(effectiveMessage);
  const buttonText = label || content.hero.ctaConnect;

  const handleClick = () => {
    logWhatsAppClickToFirebase({
      source: variant,
      language,
      customMessage: effectiveMessage,
    }).catch((err) => console.warn('WhatsApp log notice:', err));
  };

  if (variant === 'floating') {
    return (
      <aside className="floating-whatsapp-container" aria-label="WhatsApp quick contact">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label={language === 'hi' ? 'आभा मूंदड़ा से व्हाट्सएप पर चैट करें' : 'Connect with Abha Mundra on WhatsApp'}
          className="floating-whatsapp-btn"
          style={style}
        >
          <MessageCircle size={22} strokeWidth={2.4} aria-hidden="true" />
          <span className="floating-whatsapp-label">WhatsApp</span>
        </a>
      </aside>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`btn btn-secondary ${className}`}
      aria-label={`${buttonText} (opens WhatsApp chat)`}
      style={style}
    >
      <MessageCircle size={18} strokeWidth={2.2} aria-hidden="true" />
      <span>{buttonText}</span>
    </a>
  );
};

