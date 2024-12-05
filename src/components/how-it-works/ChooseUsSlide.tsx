import React from 'react';
import ImageCardComp from './ImageCardComp';

const ChooseUsSlide: React.FC = () => {
  return (
    <div className="md:mt-[375px] mt-[77px] md:mb-[369px] mb-[88px] flex flex-col items-center">
      <div className="md:font-bold font-semibold md:text-[64px] text-[32px] text-primary text-center">
        Why Choose Us?
      </div>
      <div className="flex md:flex-row flex-col justify-evenly md:w-full">
        <ImageCardComp
          text="Unmatched Clarity"
          bgColor="bg-secondary"
          className="md:mt-[165px] mt-[94px]"
        />
        <ImageCardComp
          text="Top In The Game"
          bgColor="bg-primary"
          className="md:mt-[365px] mt-[94px]"
        />
        <ImageCardComp
          text="Affordable Pricing"
          bgColor="bg-custom-light-blue"
          className="md:mt-[509px] mt-[94px]"
        />
      </div>
    </div>
  );
};

export default ChooseUsSlide;
