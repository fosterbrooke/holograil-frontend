import React from 'react';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PricingMainSlide from '../components/pricing/PricingMainSlide';

const Pricing: React.FC = () => {
  return (
    <div>
      <HeaderBar />
      <PricingMainSlide />
      <Footer />
    </div>
  );
};

export default Pricing;
