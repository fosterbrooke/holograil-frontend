import React from 'react';

import CaseMainSlide from '../components/case-study/CaseMainSlide';
import ContinuedSuccessSlide from '../components/case-study/ContinuedSuccessSlide';
import EnteringMarketSlide from '../components/case-study/EnteringMarketSlide';
import ResilienceReboundSlide from '../components/case-study/ResilienceReboundSlide';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';

const CaseStudy: React.FC = () => {
  return (
    <div className="font-poppins">
      <HeaderBar />
      <CaseMainSlide />
      <EnteringMarketSlide />
      <ResilienceReboundSlide />
      <ContinuedSuccessSlide />
      <Footer />
    </div>
  );
};

export default CaseStudy;
