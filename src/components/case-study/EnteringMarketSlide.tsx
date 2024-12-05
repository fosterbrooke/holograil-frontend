import React from 'react';

const EnteringMarketSlide: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center mt-[89px] overflow-hidden">
      <img
        src="/case-study/Rectangle 14.png"
        alt="Descriptive Alt Text"
        className="sm:w-full w-[150%] max-w-none"
      />
      <div className="absolute text-center bg-transparent flex flex-col items-center md:space-y-[45px] space-y-[26px]">
        <div className="text-primary font-semibold 2xl:text-[64px] lg:text-[40px] text-[20px] leading-[120%] tracking-[0.02em] ">
          2019
          <br />
          Entering Jakarta’s Thriving Market
        </div>
        <div className="md:max-w-[53%] max-w-auto mx-[31px] 2xl:text-[20px] lg:text-[16px] text-[12px] leading-[174%] tracking-[0.02em]">
          The Holograil looked to expand its footprint. In 2019, it
          strategically entered the Jakarta market, tapping into Southeast
          Asia’s bustling events scene. The move was a resounding success, with
          the combined number of events in both cities surpassing 800 bookings
          in just one year
        </div>
      </div>
    </div>
  );
};

export default EnteringMarketSlide;
