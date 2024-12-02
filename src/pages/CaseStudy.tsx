import React from 'react';

import CaseMainSlide from '../components/case-study/CaseMainSlide';
import ContinuedSuccessSlide from '../components/case-study/ContinuedSuccessSlide';
import EnteringMarketSlide from '../components/case-study/EnteringMarketSlide';
import ResilienceReboundSlide from '../components/case-study/ResilienceReboundSlide';

const CaseStudy: React.FC = () => {
  return (
    <div className="font-poppins">
      <CaseMainSlide />
      <EnteringMarketSlide />
      <ResilienceReboundSlide />
      <ContinuedSuccessSlide />
    </div>
  );
};

export default CaseStudy;
