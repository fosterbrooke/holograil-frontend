import React from 'react';
import RoundButton from '../RoundButton';

const PricingMainSlide: React.FC = () => {
  return (
    <div className="">
      <img src="/pricing/Rectangle 3.png" className="relative" />
      <div className="lg:mx-[166px] md:mx-[100px] mx-[44px] flex 2xl:mt-[-34%] sm:mt-[-30%]">
        <div className="flex flex-col space-y-[32px]">
          <div className="text-primary 2xl:text-[64px] lg:text-[48px] text-[32px] font-bold leading-auto tracking-[-0.02em]">
            Pricing Plan That
            <br />
            Suit You
          </div>
          <div className="2xl:text-[20px] lg:text-[16px] text-[12px] leading-[174%] tracking-[0.05em] w-full sm:w-[60%]">
            Get the perfect solution for your photo booth business with flexible
            pricing options that cater to events of all sizes and durations.
            Whether you need a one-time setup or ongoing access, we’ve got you
            covered.
          </div>
          <RoundButton
            text="Learn More"
            className="rounded-[7px] xl:scale-[100%] lg:scale-[90%] scale-[80%] w-[45%] sm:w-[25%] xl:w-[12%]"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingMainSlide;
