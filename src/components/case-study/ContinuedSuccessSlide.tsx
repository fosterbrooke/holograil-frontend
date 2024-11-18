import React from 'react';
import BottomCarousel from './BottomCarousel';

const ContinuedSuccessSlide: React.FC = () => {
  return (
    <div className="mt-[149px]">
      <div className="text-center flex flex-col items-center mb-[117px]">
        <div className="text-primary text-[64px] leading-[120%] tracking-[0.02em] font-semibold">
          The Holograil’s Continued
          <br />
          Success
        </div>
        <div className="text-[20px] w-[54%] mt-[23px] leading-[174%] tracking-[0.02em]">
          Since its 2017 launch, The Holograil has grown into a major player in
          Southeast Asia’s event scene with the help of its lenticular photo
          technology, driven by innovation, adaptability, and resilience. As the
          company continues to expand and evolve, it remains dedicated to
          pushing the boundaries of the photo booth experience, ensuring every
          event it serves is truly extraordinary.
        </div>
      </div>
      <BottomCarousel />
    </div>
  );
};

export default ContinuedSuccessSlide;
