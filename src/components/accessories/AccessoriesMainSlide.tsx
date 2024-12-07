import React from 'react';

const AccessoriesMainSlide: React.FC = () => {
  return (
    <div className="">
      <img src="/accessories/Rectangle 3.png" />
      <div className="lg:mt-[-100px] sm:mt-[-50px] mt-[-10] flex flex-col justify-center 2xl:ml-[120px] xl:ml-[80px] md:ml-[50px] sm:px-[5%] sm:max-w-[50%] w-full px-[12%]">
        <div className="text-primary 2xl:text-[60px] lg:text-[40px] text-[24px] font-bold tracking-[0.02em]">
          Accessories for Your Lenticular Photo Booth{' '}
        </div>
        <div className="text-primary md:mt-[42px] mt-[22px] 2xl:text-[48px] lg:text-[25px] text-[13px] font-semibold leading-auto tracking-[0.02em]">
          Everything You Need for a Flawless Setup
        </div>
        <div className="2xl:text-[18px] lg:text-[14px] text-[10px] leading-[174%] tracking-[0.05em] mt-[27px]">
          Elevate your photo booth experience with our premium accessories
          designed to complement The Grail’s lenticular software. From
          specialized lenticular sheets to perforated paper, we’ve got all the
          materials you need to ensure your photo booth delivers stunning
          results every time.
        </div>
      </div>
    </div>
  );
};

export default AccessoriesMainSlide;
