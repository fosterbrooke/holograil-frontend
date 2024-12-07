import React from 'react';
import RoundButton from '../RoundButton';

const HowMainSlide: React.FC = () => {
  return (
    <div className="">
      <div className="2xl:mb-[-550px] xl:mb-[-400px] lg:mb-[-300px] md:mb-[-250px] sm:mb-[-80px] mb-[-40px]">
        <img src="/how-it-works/Rectangle 3.png" />
      </div>
      <div className="flex items-end md:justify-end justify-center md:mx-0 mx-[45px] 2xl:mb-[193px] md:mb-[75px] mb-0">
        <div className="flex md:flex-row flex-col-reverse md:w-[65%] w-full md:space-x-[42px] pt-1 rounded-[50px]">
          <div className="flex flex-col items-start md:items-end space-y-[32px] md:mt-[56px] mt-[27px] font-poppins">
            <div className="2xl:text-[20px] lg:text-[16px] text-[12px] leading-[174%] tracking-[0.05em] md:text-right">
              Discover the Seamless Process of Creating Stunning Lenticular
              Prints with Our User-Friendly Software
            </div>
            <RoundButton
              text="Learn More"
              className="rounded-[7px] xl:scale-[100%] lg:scale-[90%]"
            />
          </div>
          <div className="text-primary font-semibold text-[32px] lg:text-[48px] 2xl:font-bold 2xl:text-[64px] md:max-w-[584px] leading-auto tracking-[-0.02em]">
            How It Works: Capture the Magic with Ease!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMainSlide;
