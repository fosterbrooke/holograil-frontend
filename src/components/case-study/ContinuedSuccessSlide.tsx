import React from 'react';
import BottomCarousel from './BottomCarousel';

const ContinuedSuccessSlide: React.FC = () => {
  return (
    <div className="md:mt-[149px] mt-[83px]">
      <div className="text-center flex flex-col items-center md:mb-[117px] mb-[37px]">
        <div className="text-primary 2xl:text-[64px] lg:text-[40px] text-[20px] leading-[120%] tracking-[0.02em] font-semibold">
          The Holograil’s&nbsp;
          <br className="md:hidden block" />
          Continued&nbsp;
          <br className="md:block hidden" />
          Success
        </div>
        <div className="md:max-w-[53%] max-w-auto mx-[51px] 2xl:text-[20px] lg:text-[16px] text-[12px] mt-[23px] leading-[174%] tracking-[0.02em]">
          Since its 2017 launch, The Holograil has grown into a major player in
          Southeast Asia’s event scene with the help of its lenticular photo
          technology, driven by innovation, adaptability, and resilience.&nbsp;
          <br />
          <br className="md:hidden block" />
          As the company continues to expand and evolve, it remains dedicated to
          pushing the boundaries of the photo booth experience, ensuring every
          event it serves is truly extraordinary.
        </div>
      </div>
      <BottomCarousel />
    </div>
  );
};

export default ContinuedSuccessSlide;
