import React from 'react';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const { content, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl(content.contactInfo.prefilledMessage);

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Educator Description */}
          <div className="footer-brand">
            <div>
              <div className="footer-logo">{content.brand.name}</div>
              <div className="footer-tagline">
                {language === 'hi' ? 'द्वारा' : 'by'} {content.tutor.name} &bull; {content.tutor.title}
              </div>
            </div>
            <p className="footer-desc">
              {content.footer.description}
            </p>
            <div className="footer-policy-note">
              <strong>{content.footer.offlineNoticeHeading}</strong> {content.footer.offlineNoticeBody}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-heading">{content.footer.quickLinksHeading}</h4>
            <ul className="footer-links">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Curricula Supported */}
          <div>
            <h4 className="footer-heading">{content.footer.curriculaHeading}</h4>
            <ul className="footer-links">
              {content.curricula.map((curr) => (
                <li key={curr.id}>
                  <a href="#expertise" className="footer-link">
                    {curr.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="footer-heading">{content.footer.contactHeading}</h4>
            <ul className="footer-links">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <MessageCircle size={15} />
                  <span>{content.contactInfo.displayWhatsApp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.contactInfo.email}`}
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Mail size={15} />
                  <span>{content.contactInfo.email}</span>
                </a>
              </li>
              <li style={{ marginTop: '8px' }}>
                <a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8125rem', width: 'fit-content' }}>
                  {content.contactSection.submitButton}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {content.brand.name} {language === 'hi' ? 'द्वारा' : 'by'} {content.tutor.name}. {content.footer.allRightsReserved}
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
            aria-label="Back to top of page"
          >
            <span>{content.footer.backToTop}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
