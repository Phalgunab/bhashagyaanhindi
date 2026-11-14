import React from "react";
import { MotionConfig } from "motion/react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const MainLayout: React.FC = () => {
  const { language } = useLanguage();

  return (
    <MotionConfig reducedMotion="user">
      {/* Skip link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        {language === "hi" ? "मुख्य सामग्री पर जाएं" : "Skip to main content"}
      </a>

      {/* Primary Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Home / Hero */}
        <HeroSection />

        {/* 2. About & Expertise */}
        <AboutSection />

        {/* 3. Contact & Enquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton variant="floating" />
    </MotionConfig>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
};

export default App;
