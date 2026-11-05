import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { saveEnquiryToFirebase } from '../services/firebase';
import { WhatsAppButton } from './WhatsAppButton';

interface FormData {
  name: string;
  email: string;
  phone: string;
  curriculum: string;
  mode: 'online' | 'offline';
  message: string;
  // Honeypot field for spam prevention (must remain empty)
  websiteUrl: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  curriculum?: string;
  message?: string;
}

interface ContactFormProps {
  selectedMode?: 'online' | 'offline';
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedMode = 'online' }) => {
  const { content, language } = useLanguage();
  const c = content.contactSection;

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
      errs.name = c.validationErrors.name;
    }

    if (!formData.email.trim()) {
      errs.email = c.validationErrors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = c.validationErrors.emailFormat;
    }

    if (!formData.phone.trim()) {
      errs.phone = c.validationErrors.phone;
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 7) {
      errs.phone = c.validationErrors.phoneFormat;
    }

    if (!formData.curriculum) {
      errs.curriculum = c.validationErrors.curriculum;
    }

    if (!formData.message.trim()) {
      errs.message = c.validationErrors.message;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on field change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection: if hidden field is filled, silently discard bot submission
    if (formData.websiteUrl) {
      setStatus('success');
      setStatusMessage(c.successMessage);
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      // 1. Save submission to Google Firebase Firestore
      await saveEnquiryToFirebase({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        curriculum: formData.curriculum,
        mode: formData.mode,
        message: formData.message.trim(),
        language: language,
      });

      // 2. If an optional third-party webhook/endpoint is configured (e.g. Formspree / EmailJS)
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            curriculum: formData.curriculum,
            mode: formData.mode,
            message: formData.message,
            language: language,
            submittedAt: new Date().toISOString(),
          }),
        }).catch((e) => console.warn('Endpoint submission warning:', e));
      }

      setStatus('success');
      setStatusMessage(c.successMessage);
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
      setStatusMessage(c.errorMessage);
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact and Enquiry">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag center-block">
            <span className="section-tag-dot" />
            {c.sectionTag}
          </span>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-subtitle center-block">{c.subtitle}</p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Residence Policy Notice */}
          <motion.div
            className="contact-sidebar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card">
              <h3>{c.sidebarTitle}</h3>
              <p>{c.sidebarText}</p>

              <div style={{ marginBottom: '24px' }}>
                <WhatsAppButton variant="button" label={c.sidebarButton} style={{ width: '100%' }} />
              </div>

              <div className="contact-channel-list">
                <div className="contact-channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="channel-label">{c.emailLabel}</div>
                    <div className="channel-value">
                      <a href={`mailto:${content.contactInfo.email}`}>
                        {content.contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="channel-label">{c.communicationLabel}</div>
                    <div className="channel-value">{c.communicationValue}</div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="channel-label">{c.offlineLocationLabel}</div>
                    <div className="channel-value" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>
                      {c.offlineLocationValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Person Residence Notice Reminder */}
            <div className="policy-box-offline">
              <div className="policy-box-header">
                <AlertTriangle size={18} />
                <span>{c.policyHeading}</span>
              </div>
              <p className="policy-box-text">
                {c.policyBody}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Enquiry Form */}
          <motion.div
            className="enquiry-form-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="form-title">{c.formTitle}</h3>
            <p className="form-subtitle">{c.formSubtitle}</p>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="form-alert success"
                  role="status"
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '4px' }}>
                    <CheckCircle2 size={19} />
                    <span>{c.successHeading}</span>
                  </div>
                  <p>{statusMessage}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="form-alert error"
                  role="alert"
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '4px' }}>
                    <AlertCircle size={19} />
                    <span>{c.errorHeading}</span>
                  </div>
                  <p>{statusMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate>
              {/* Anti-spam Honeypot */}
              <div className="sr-only-hp" aria-hidden="true">
                <label htmlFor="websiteUrl">Leave this field blank</label>
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

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {c.nameLabel} <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={c.namePlaceholder}
                  className={`form-input ${errors.name ? 'has-error' : ''}`}
                  required
                />
                {errors.name && <div className="form-error-msg">{errors.name}</div>}
              </div>

              {/* Email & Phone Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {c.emailInputLabel} <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={c.emailPlaceholder}
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    required
                  />
                  {errors.email && <div className="form-error-msg">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    {c.phoneLabel} <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={c.phonePlaceholder}
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    required
                  />
                  {errors.phone && <div className="form-error-msg">{errors.phone}</div>}
                </div>
              </div>

              {/* Curriculum */}
              <div className="form-group">
                <label htmlFor="curriculum" className="form-label">
                  {c.curriculumLabel} <span className="required-star">*</span>
                </label>
                <select
                  id="curriculum"
                  name="curriculum"
                  value={formData.curriculum}
                  onChange={handleChange}
                  className={`form-select ${errors.curriculum ? 'has-error' : ''}`}
                >
                  {c.curriculumOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.curriculum && <div className="form-error-msg">{errors.curriculum}</div>}
              </div>

              {/* Preferred Learning Mode */}
              <div className="form-group">
                <label className="form-label">
                  {c.modeLabel} <span className="required-star">*</span>
                </label>
                <div className="radio-group">
                  <label className={`radio-label ${formData.mode === 'online' ? 'checked' : ''}`}>
                    <input
                      type="radio"
                      name="mode"
                      value="online"
                      checked={formData.mode === 'online'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span>{c.modeOnline}</span>
                  </label>

                  <label className={`radio-label ${formData.mode === 'offline' ? 'checked' : ''}`}>
                    <input
                      type="radio"
                      name="mode"
                      value="offline"
                      checked={formData.mode === 'offline'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span>{c.modeOffline}</span>
                  </label>
                </div>

                {/* Conditional Notice based on Selection */}
                <AnimatePresence mode="wait">
                  {formData.mode === 'offline' ? (
                    <motion.div
                      key="offline"
                      className="form-conditional-notice offline"
                      role="note"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <strong>{c.offlineNotice}</strong>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="online"
                      className="form-conditional-notice online"
                      role="note"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <strong>{c.onlineNotice}</strong>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {c.messageLabel} <span className="required-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={c.messagePlaceholder}
                  className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                  required
                />
                {errors.message && <div className="form-error-msg">{errors.message}</div>}
              </div>

              {/* Privacy / Security Notice */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                <ShieldCheck size={16} />
                <span>{c.privacyNotice}</span>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'submitting' ? (
                  <span>{c.submittingButton}</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{c.submitButton}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
