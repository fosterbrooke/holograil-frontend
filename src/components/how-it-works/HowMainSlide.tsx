import React from 'react';
import RoundButton from '../RoundButton';

const HowMainSlide:React.FC = () => {
  return (
    <div className="">
      <img src="/how-it-works/Rectangle 3.png" className="relative" />
      <div className="absolute inset-0 flex items-end justify-end">
        <div className="flex w-[65%] space-x-[42px]">
          <div className="flex flex-col items-end space-y-[32px] mt-[56px] font-poppins">
            <div className="text-[20px] leading-[174%] tracking-[0.05em] text-right ">
              Discover the Seamless Process of Creating Stunning Lenticular
              Prints with Our User-Friendly Software
            </div>
            <RoundButton text="Learn More" />
          </div>
          <div className="text-primary text-[64px] max-w-[584px] font-bold leading-auto tracking-[-0.02em]">
            How It Works: Capture the Magic with Ease!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMainSlide;
