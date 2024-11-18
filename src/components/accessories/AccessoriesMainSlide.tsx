import React from 'react';
import InfoComp from '../InfoComp';

const AccessoriesMainSlide: React.FC = () => {
  return (
    <div className="">
      <img src="/accessories/Rectangle 3.png" />
      <div className="flex">
        <div className="w-[50%] ml-[207px]">
          <div className="text-primary text-[64px] font-bold tracking-[0.02em]">
            Accessories for Your Lenticular Photo Booth{' '}
          </div>
          <div className="text-primary mt-[42px] text-[48px] font-semibold leading-auto tracking-[0.02em]">
            Everything You Need for a Flawless Setup
          </div>
          <div className="text-[20px] max-w-[702px] leading-[174%] tracking-[0.05em] mt-[27px]">
            Elevate your photo booth experience with our premium accessories
            designed to complement The Grail’s lenticular software. From
            specialized lenticular sheets to perforated paper, we’ve got all the
            materials you need to ensure your photo booth delivers stunning
            results every time.
          </div>
        </div>
        <InfoComp
          title="Shipping Information"
          text="Please note that due to logistical constraints and varying port restrictions, we are unable to provide a shipping rate upfront. After you place your order for our accessories, we will reach out via email with a customized shipping and delivery quote, as well as the finalized total price. Thank you for your understanding."
          className="mt-[250px]"
        />
      </div>
    </div>
  );
};

export default AccessoriesMainSlide;
