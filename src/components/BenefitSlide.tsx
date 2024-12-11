import React from 'react';
import RoundButton from './RoundButton';

const BenefitSlide: React.FC = () => {
  const handleGetStart = () => {
    const target = document.getElementById('chooseplanslide');
    const offsetX = 100;

    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - offsetX,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex justify-center mb-[61px] sm:mx-0 mx-[46px]">
      <div className="mt-[82px] flex flex-col space-y-[51px] sm:w-[67%] w-full">
        <div className="flex flex-col sm:space-y-6 space-y-[34px] mb-9">
          <div className="font-semibold sm:text-[64px] text-[32px] text-primary">
            Benefit from our experience
            <br />
            in the industry
          </div>
          <div className="sm:text-[20px] text-[12px]">
            With a proven track record of powering countless successful events,
            we bring cutting-edge technology and deep industry insights into our
            photo booth software to ensure every event is a success. Choose our
            software for reliability, innovation, and results that stand out.
          </div>
          <RoundButton
            text="Get Started ->"
            className="mt-2 rounded-[15px] max-w-[180px]"
            onClick={handleGetStart}
          />
        </div>
        <img src="/benefit_slide1.png" className="my-[45px]" />
      </div>
    </div>
  );
};

export default BenefitSlide;
