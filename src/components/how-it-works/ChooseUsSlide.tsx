import React from 'react';
import ImageCardComp from './ImageCardComp';

const ChooseUsSlide:React.FC = () => {
  return (
    <div className="mt-[375px] mb-[369px]">
      <div className="font-bold text-[64px] text-primary text-center">
        Why Choose Us?
      </div>
      <div className="flex justify-evenly">
        <ImageCardComp
          text="Unmatched Clarity"
          bgColor="bg-secondary"
          className="mt-[165px]"
        />
        <ImageCardComp
          text="Top In The Game"
          bgColor="bg-primary"
          className="mt-[365px]"
        />
        <ImageCardComp
          text="Affordable Pricing"
          bgColor="bg-custom-light-blue"
          className="mt-[509px]"
        />
      </div>
    </div>
  );
};

export default ChooseUsSlide;
