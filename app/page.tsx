"use client";

import { LangProvider } from "./components/LangContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import AIChatbot from "./components/AIChatbot";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#F5F1E8] to-[#EDE7DA]">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        {/* GallerySection - uncomment when portfolio content is ready */}
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
        <AIChatbot />
        <ScrollToTop />
        <Footer />
      </div>
    </LangProvider>
  );
}
