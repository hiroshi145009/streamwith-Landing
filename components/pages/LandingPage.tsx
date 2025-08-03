
import React from 'react';
import Header from '../landing/Header';
import HeroSection from '../landing/HeroSection';
import ProblemSection from '../landing/ProblemSection';
import SolutionSection from '../landing/SolutionSection';
import HowItWorksSection from '../landing/HowItWorksSection';
import ReviewsSection from '../landing/ReviewsSection';
import ReservationSection from '../landing/ReservationSection';
import AdminPanel from '../landing/AdminPanel';
import Footer from '../landing/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#0F0F1B] text-dark-text font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ReviewsSection />
        <ReservationSection />
      </main>
      <Footer />
      <AdminPanel />
    </div>
  );
};

export default LandingPage;
