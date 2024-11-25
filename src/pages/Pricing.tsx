import React from 'react';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PricingMainSlide from '../components/pricing/PricingMainSlide';
import FaqSlide from '../components/pricing/FaqSlide';

const Pricing: React.FC = () => {
  return (
    <div>
      <HeaderBar />
      <PricingMainSlide />
      <FaqSlide />
      <Footer />
    </div>
  );
};

export default Pricing;
