import React from 'react';
import PricingMainSlide from '../components/pricing/PricingMainSlide';
import FAQSlide from '../components/pricing/FAQSlide';
import ChoosePlanDetailSlide from '../components/pricing/ChoosePlanDetailSlide';

const Pricing: React.FC = () => {
  return (
    <div>
      <PricingMainSlide />
      <ChoosePlanDetailSlide />
      <FAQSlide />
    </div>
  );
};

export default Pricing;
