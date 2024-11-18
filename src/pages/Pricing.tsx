import React from 'react';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PricingMainSlide from '../components/pricing/PricingMainSlide';
import FAQSlide from '../components/pricing/FAQSlide';

const Pricing: React.FC = () => {
  return (
    <div>
      <HeaderBar />
      <PricingMainSlide />
      <FAQSlide />
      <Footer />
    </div>
  );
};

export default Pricing;
