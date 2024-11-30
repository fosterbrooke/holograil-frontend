import React from 'react';
import RoundButton from '../RoundButton';

const PricingMainSlide: React.FC = () => {
  return (
    <div className="">
      <img src="/pricing/Rectangle 3.png" className="relative" />
      <div className="absolute top-0 bottom-0 left-[166px] flex items-end justify-start">
        <div className="flex flex-col space-y-[32px]">
          <div className="text-primary text-[64px] font-bold leading-auto tracking-[-0.02em]">
            Pricing Plan That
            <br />
            Suit You
          </div>
          <div className="text-[20px] leading-[174%] tracking-[0.05em] w-[48%]">
            Discover the Seamless Process of Creating Stunning Lenticular Prints
            with Our User-Friendly Software
          </div>
          <RoundButton text="Learn More" className="rounded-[7px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default PricingMainSlide;
