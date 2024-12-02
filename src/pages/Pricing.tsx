import React from 'react';
import PricingMainSlide from '../components/pricing/PricingMainSlide';
import FAQSlide from '../components/pricing/FAQSlide';

const Pricing: React.FC = () => {
  return (
    <div>
      <PricingMainSlide />
      <FAQSlide />
    </div>
  );
};

export default Pricing;
