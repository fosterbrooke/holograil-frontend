import React from 'react';
import RoundButton from '../RoundButton';

const PricingMainSlide: React.FC = () => {
  return (
    <div className="">
      <img src="/pricing/Rectangle 3.png" className="relative" />
      <div className="lg:mx-[166px] md:mx-[100px] mx-[44px] flex 2xl:mt-[-34%] mt-[-30%]">
        <div className="flex flex-col space-y-[32px]">
          <div className="text-primary 2xl:text-[64px] lg:text-[48px] text-[32px] font-bold leading-auto tracking-[-0.02em]">
            Pricing Plan That
            <br />
            Suit You
          </div>
          <div className="2xl:text-[20px] lg:text-[16px] text-[12px] leading-[174%] tracking-[0.05em] md:w-[48%] sm:w-[70%] w-full">
            Discover the Seamless Process of Creating Stunning Lenticular Prints
            with Our User-Friendly Software
          </div>
          <RoundButton
            text="Learn More"
            className="rounded-[7px] xl:scale-[100%] lg:scale-[90%] scale-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingMainSlide;
