import React from 'react';
import RoundButton from './RoundButton';

const BenefitSlide:React.FC = () => {
  return (
    <div className="flex justify-center mb-[61px]">
      <div className="mt-6 flex flex-col space-y-[51px] w-[67%]">
        <div className="flex flex-col space-y-6 mb-9">
          <div className="font-semibold text-[64px] text-primary">
            Benefit from our experience
            <br />
            in the industry
          </div>
          <div className="text-[20px]">
            With a proven track record of powering countless successful events,
            we bring cutting-edge technology and deep industry insights into our
            photo booth software to ensure every event is a success. Choose our
            software for reliability, innovation, and results that stand out.
          </div>
          <RoundButton text="Get Started" className="mt-2" />
        </div>
        <img src="/benefit_slide1.png" className="my-[45px]" />
      </div>
    </div>
  );
};

export default BenefitSlide;
