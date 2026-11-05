import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, Firestore } from 'firebase/firestore';

// Default configuration for Bhasha Gyaan project, with environment variable overrides
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAXFIxoREBs3KO5CMtU3N-BQmiJnvmh2jQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bhashagyaan-hindi.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bhashagyaan-hindi",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bhashagyaan-hindi.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "696016313066",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:696016313066:web:8334082f88d1679c86d593",
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

try {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getFirestore(app);
} catch (err) {
  console.warn('Firebase initialization notice:', err);
}

export interface EnquirySubmission {
  name: string;
  email: string;
  phone: string;
  curriculum: string;
  mode: 'online' | 'offline';
  message: string;
  language?: string;
}

export interface WhatsAppRequestLog {
  source: string;
  language?: string;
  customMessage?: string;
}

/**
 * Saves an enquiry form submission to Firebase Firestore
 * Falls back to localStorage if offline/network fails so data is never lost
 */
export async function saveEnquiryToFirebase(data: EnquirySubmission): Promise<string> {
  const payload = {
    ...data,
    createdAt: new Date().toISOString(),
    timestamp: serverTimestamp(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };

  try {
    if (db) {
      const docRef = await addDoc(collection(db, 'enquiries'), payload);
      return docRef.id;
    }
  } catch (err) {
    console.warn('Firestore write fallback to local buffer:', err);
  }

  // Backup to localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('bhasha_gyaan_saved_enquiries') || '[]');
    existing.push({ ...payload, id: `local_${Date.now()}` });
    localStorage.setItem('bhasha_gyaan_saved_enquiries', JSON.stringify(existing));
  } catch {
    // ignore local storage errors
  }

  return `offline_${Date.now()}`;
}

/**
 * Logs a WhatsApp Click-to-Chat interaction to Firebase Firestore
 */
export async function logWhatsAppClickToFirebase(data: WhatsAppRequestLog): Promise<void> {
  const payload = {
    ...data,
    clickedAt: new Date().toISOString(),
    timestamp: serverTimestamp(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };

  try {
    if (db) {
      await addDoc(collection(db, 'whatsapp_requests'), payload);
      return;
    }
  } catch (err) {
    console.warn('WhatsApp click logging fallback:', err);
  }

  // Local buffer backup
  try {
    const existing = JSON.parse(localStorage.getItem('bhasha_gyaan_saved_whatsapp_clicks') || '[]');
    existing.push(payload);
    localStorage.setItem('bhasha_gyaan_saved_whatsapp_clicks', JSON.stringify(existing));
  } catch {
    // ignore
  }
}

export { app, db };
