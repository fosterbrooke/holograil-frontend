import React from 'react';

const EnteringMarketSlide:React.FC = () => {
  return (
    <div className="relative flex items-center justify-center mt-[89px]">
      <img
        src="/case-study/Rectangle 14.png"
        alt="Descriptive Alt Text"
        className="w-full"
      />
      <div className="absolute text-center bg-transparent flex flex-col items-center space-y-[45px]">
        <div className="text-primary font-semibold text-[64px] leading-[120%] tracking-[0.02em] ">
          2019
          <br />
          Entering Jakarta’s Thriving Market
        </div>
        <div className="w-[53%] text-[20px] leading-[174%] tracking-[0.02em]">
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
