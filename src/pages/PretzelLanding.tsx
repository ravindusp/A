import React from 'react';
import HeroSection from '@/components/HeroSection';
import MenuPreview from '@/components/MenuPreview';
import AboutSection from '@/components/AboutSection';
import SpecialOffers from '@/components/SpecialOffers';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const PretzelLanding: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MenuPreview />
      <AboutSection />
      <SpecialOffers />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PretzelLanding;