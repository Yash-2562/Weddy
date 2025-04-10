import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      
      <div className="flex flex-col lg:flex-row p-4">
        <div className="lg:w-3/4">
          <HeroSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
