import { websiteContent } from '../data/websiteContent';

export function getWhatsAppUrl(customMessage?: string): string {
  const number =
    (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ||
    websiteContent.contactInfo.whatsappNumber ||
    '';
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const message = customMessage || websiteContent.contactInfo.prefilledMessage;
  const encodedMessage = encodeURIComponent(message);

  if (cleanNumber) {
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  }
  return `https://wa.me/?text=${encodedMessage}`;
}
