import React, { useState, useEffect } from 'react';
import { Mail, Send, AlertCircle, CheckCircle2, Info, MapPin, Monitor, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { saveEnquiryToFirebase } from '../services/firebase';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Reveal } from '../components/Reveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  curriculum: string;
  mode: 'online' | 'offline' | 'unsure';
  message: string;
  websiteUrl: string; // Anti-spam honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  curriculum?: string;
  message?: string;
}

interface ContactSectionProps {
  selectedMode?: 'online' | 'offline';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedMode = 'online' }) => {
  const { content, language } = useLanguage();
  const { contact } = content;
  const labels = contact.formLabels;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    curriculum: 'CBSE',
    mode: selectedMode,
    message: '',
    websiteUrl: '',
  });

  useEffect(() => {
    if (selectedMode) {
      setFormData((prev) => ({ ...prev, mode: selectedMode }));
    }
  }, [selectedMode]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = contact.validationMessages.nameRequired;
    }

    if (!formData.email.trim()) {
      errs.email = contact.validationMessages.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = contact.validationMessages.emailInvalid;
    }

    if (!formData.phone.trim()) {
      errs.phone = contact.validationMessages.phoneRequired;
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 7) {
      errs.phone = contact.validationMessages.phoneInvalid;
    }

    if (!formData.curriculum) {
      errs.curriculum = contact.validationMessages.curriculumRequired;
    }

    if (!formData.message.trim()) {
      errs.message = contact.validationMessages.messageRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.websiteUrl) {
      setStatus('success');
      setStatusMessage(labels.successMessage);
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      await saveEnquiryToFirebase({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        curriculum: formData.curriculum,
        mode: formData.mode === 'unsure' ? 'online' : formData.mode,
        message: formData.message.trim(),
        language: language,
      });

      setStatus('success');
      setStatusMessage(labels.successMessage);
      setFormData({
        name: '',
        email: '',
        phone: '',
        curriculum: 'CBSE',
        mode: 'online',
        message: '',
        websiteUrl: '',
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setStatusMessage(labels.errorMessage);
    }
  };

  return (
    <section id={contact.sectionId} className="section contact-section" aria-label="Contact and Enquiry">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="section-header">
            <span className="section-tag">{contact.sectionTag}</span>
            <h2 className="section-title editorial-heading">{contact.title}</h2>
            <p className="section-subtitle">
              <span className="desktop-text">{contact.subtitle}</span>
              <span className="mobile-text">{contact.subtitleMobile}</span>
            </p>
          </div>
        </Reveal>

        <div className="contact-layout">
          {/* Main Enquiry Form Card */}
          <Reveal delay={0.1}>
            <div className="enquiry-form-card">
              {status === 'success' && (
                <div className="form-alert success" role="alert">
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <div>
                    <strong>{labels.successTitle}</strong>
                    <p>{statusMessage}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="form-alert error" role="alert">
                  <AlertCircle size={20} aria-hidden="true" />
                  <div>
                    <strong>{labels.errorTitle}</strong>
                    <p>{statusMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Anti-spam honeypot */}
                <div className="visually-hidden" aria-hidden="true">
                  <label htmlFor="websiteUrl">Do not fill this</label>
                  <input
                    type="text"
                    id="websiteUrl"
                    name="websiteUrl"
                    tabIndex={-1}
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="form-grid">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <span>{labels.name}<span className="required-star">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={'form-input ' + (errors.name ? 'has-error' : '')}
                      placeholder={labels.namePlaceholder}
                      required
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <span>{labels.email}<span className="required-star">*</span></span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={'form-input ' + (errors.email ? 'has-error' : '')}
                      placeholder={labels.emailPlaceholder}
                      required
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <span>{labels.phone}<span className="required-star">*</span></span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={'form-input ' + (errors.phone ? 'has-error' : '')}
                      placeholder={labels.phonePlaceholder}
                      required
                    />
                    {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                  </div>

                  {/* Curriculum Selection */}
                  <div className="form-group">
                    <label htmlFor="curriculum" className="form-label">
                      <span>{labels.curriculum}</span>
                    </label>
                    <select
                      id="curriculum"
                      name="curriculum"
                      value={formData.curriculum}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="IGCSE">IGCSE</option>
                      <option value="IB">IB (Language B / ab initio)</option>
                      <option value="A-Levels">A-Levels</option>
                      <option value="Other">Other / Foundational</option>
                    </select>
                  </div>

                  {/* Learning Mode Selection (3 options: Online / Offline / Unsure) */}
                  <div className="form-group form-full-width">
                    <label className="form-label">
                      <span>{labels.learningMode}</span>
                    </label>
                    <div className="mode-toggle-group">
                      <label
                        className={'mode-radio-card ' + (formData.mode === 'online' ? 'selected' : '')}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value="online"
                          checked={formData.mode === 'online'}
                          onChange={handleChange}
                        />
                        <Monitor size={17} aria-hidden="true" />
                        <span>{labels.modeOnline}</span>
                      </label>

                      <label
                        className={'mode-radio-card ' + (formData.mode === 'offline' ? 'selected' : '')}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value="offline"
                          checked={formData.mode === 'offline'}
                          onChange={handleChange}
                        />
                        <MapPin size={17} aria-hidden="true" />
                        <span>{labels.modeOffline}</span>
                      </label>

                      <label
                        className={'mode-radio-card ' + (formData.mode === 'unsure' ? 'selected' : '')}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value="unsure"
                          checked={formData.mode === 'unsure'}
                          onChange={handleChange}
                        />
                        <HelpCircle size={17} aria-hidden="true" />
                        <span>{labels.modeUnsure}</span>
                      </label>
                    </div>
                  </div>

                  {/* Dynamic Mode Guidance Banner */}
                  <div className="form-full-width">
                    {formData.mode === 'online' && (
                      <div className="form-conditional-banner online" role="note">
                        <Info size={18} aria-hidden="true" />
                        <div>
                          <strong>{labels.modeOnline}: </strong>
                          <span className="desktop-text">{contact.modeNotices.online}</span>
                          <span className="mobile-text">{contact.modeNoticesMobile.online}</span>
                        </div>
                      </div>
                    )}

                    {formData.mode === 'offline' && (
                      <div className="form-conditional-banner offline" role="note">
                        <MapPin size={18} aria-hidden="true" />
                        <div>
                          <strong>{labels.modeOffline}: </strong>
                          <span className="desktop-text">{contact.modeNotices.offline}</span>
                          <span className="mobile-text">{contact.modeNoticesMobile.offline}</span>
                        </div>
                      </div>
                    )}

                    {formData.mode === 'unsure' && (
                      <div className="form-conditional-banner unsure" role="note">
                        <HelpCircle size={18} aria-hidden="true" />
                        <div>
                          <strong>{labels.modeUnsure}: </strong>
                          <span className="desktop-text">{contact.modeNotices.unsure}</span>
                          <span className="mobile-text">{contact.modeNoticesMobile.unsure}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group form-full-width">
                    <label htmlFor="message" className="form-label">
                      <span>{labels.message}<span className="required-star">*</span></span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={'form-textarea ' + (errors.message ? 'has-error' : '')}
                      placeholder={labels.messagePlaceholder}
                      required
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <div className="form-full-width">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === 'submitting'}
                      style={{ width: '100%' }}
                    >
                      <Send size={18} aria-hidden="true" />
                      <span>{status === 'submitting' ? labels.submittingButton : labels.submitButton}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Contact Info Sidebar */}
          <div className="contact-sidebar">
            <Reveal delay={0.15}>
              <div className="sidebar-card">
                <h3 className="sidebar-title editorial-heading">{labels.directCommTitle}</h3>
                <p className="sidebar-desc">{labels.directCommDesc}</p>

                <div className="contact-quick-links">
                  <WhatsAppButton
                    variant="button"
                    label={labels.whatsappButton}
                    style={{ width: '100%', justifyContent: 'center' }}
                  />

                  <a
                    href={'mailto:' + contact.email + '?subject=Enquiry%20regarding%20Hindi%20Classes'}
                    className="quick-contact-item"
                  >
                    <Mail size={18} aria-hidden="true" />
                    <span>{contact.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="sidebar-card" style={{ backgroundColor: 'var(--color-ivory-soft)' }}>
                <h3 className="sidebar-title editorial-heading" style={{ fontSize: '1.05rem' }}>{labels.privacyTitle}</h3>
                <p className="sidebar-desc" style={{ marginBottom: 0 }}>
                  {labels.privacyDesc}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
