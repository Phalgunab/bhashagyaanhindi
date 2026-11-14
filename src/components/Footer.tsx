import React from "react";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { footer, contact } = content;
  const whatsappUrl = getWhatsAppUrl(contact.prefilledWhatsAppMessage);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Educator Description */}
          <div>
            <h3 className="footer-brand-title">{footer.brand}</h3>
            <p className="footer-brand-sub">{footer.attribution} • {footer.tutorTitle}</p>
            <p className="footer-desc">
              <span className="desktop-text">{footer.description}</span>
              <span className="mobile-text">{footer.descriptionMobile}</span>
            </p>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="footer-col-title">{footer.connectHeading}</h4>
            <ul className="footer-contact-list">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>WhatsApp: {contact.displayWhatsApp}</span>
                </a>
              </li>
              <li>
                <a
                  href={"mailto:" + contact.email}
                  className="footer-contact-item"
                >
                  <Mail size={18} aria-hidden="true" />
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-contact-item"
            style={{ color: "rgba(255, 255, 255, 0.7)", cursor: "pointer" }}
            aria-label="Back to top of page"
          >
            <span>{footer.backToTop}</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
