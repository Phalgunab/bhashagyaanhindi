import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
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
  const effectiveMessage = customMessage || content.contactInfo.prefilledMessage;
  const url = getWhatsAppUrl(effectiveMessage);

  const buttonText = label || content.brand.ctaWhatsApp;

  const handleClick = () => {
    logWhatsAppClickToFirebase({
      source: variant,
      language,
      customMessage: effectiveMessage,
    }).catch((err) => console.warn('WhatsApp log notice:', err));
  };

  if (variant === 'floating') {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label={language === 'hi' ? 'आभा मूंदड़ा से व्हाट्सएप पर चैट करें' : 'Chat with Abha Mundra on WhatsApp'}
        className="floating-whatsapp"
        style={style}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.6 }}
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <span
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MessageCircle size={22} strokeWidth={2.4} />
          <motion.span
            style={{
              position: 'absolute',
              top: -2,
              right: -2,
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <span>{language === 'hi' ? 'व्हाट्सएप चैट' : 'Chat on WhatsApp'}</span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`btn btn-whatsapp ${className}`}
      aria-label={`${buttonText} (opens WhatsApp)`}
      style={style}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle size={19} strokeWidth={2.4} />
      <span>{buttonText}</span>
    </motion.a>
  );
};
