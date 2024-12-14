import React from 'react';
import PurchaseCardComp from './pricing/PurchaseCardComp';
import { pricingPlans } from '../utils/stripe';

const ChoosePlanSlide: React.FC = () => {
  const subscriptions = [
    {
      id: pricingPlans['onetime'],
      title: 'One Time Setup',
      price: 990,
      period: '',
      color: 'bg-[#37A3FF]',
      content: [
        'Training manual',
        '1 time online meet (1 hour)',
        '1 roller',
        '500 pcs sheets (4’’ x 4’’)',
        'App download',
        '3 month key (1 device only)',
        'Border file',
      ],
    },
    {
      id: pricingPlans['year'],
      title: 'Yearly License',
      price: 1500,
      period: 'Year',
      color: 'bg-[#DD99D7]',
      content: [
        'Yearly Subscription',
        'Unlimited Access for 365 days ',
        'One Device',
      ],
    },
    {
      id: pricingPlans['month'],
      title: 'Monthly License',
      price: 150,
      period: 'Month',
      color: 'bg-[#7E58FC]',
      content: [
        'Monthly Subscription',
        'Unlimited Access for 30 days ',
        'One Device',
      ],
    },
    {
      id: pricingPlans['day'],
      title: 'Daily License',
      price: 40,
      period: 'Day',
      color: 'bg-[#FD9B3F]',
      content: [
        'Daily Subscription',
        'Unlimited Access for 24hrs ',
        'One Device',
      ],
    },
  ];

  return (
    <div className="relative pt-[80px] mb-[80px] sm:px-20 px-8">
      <div className="sm:pb-[70px] xl:mt-[120px] lg:mt-[80px] sm:mt-[40px] pb-[20px]">
        <div className="text-secondary font-bold sm:text-[50px] md:text-[58px] md:text-[72px] text-[32px]">
          Choose Your Plan
        </div>
        <div className="mt-[24px] sm:text-[18px] text-[12px] sm:leading-[30px] leading-[18px] tracking-[-0.02em] max-w-[979px]">
          Whether you want to elevate your events, streamline your photo booth
          operations, or create unforgettable experiences for your clients, our
          photo booth lenticular software has the perfect plan for you
        </div>
      </div>
      <img
        src="/right_panel.svg"
        className="absolute top-0 2xl:right-[-8%] xl:right-[-13%] right-[-6%] z-10 max-w-[50%]"
      />
      <div
        className="mt-[17px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center sm:mr-[20px] mx-0"
        id="chooseplanslide"
      >
        {subscriptions.map((item, index) => (
          <PurchaseCardComp
            key={index}
            planId={item.id}
            title={item.title}
            content={item.content}
            period={item.period}
            price={item.price}
            bgColor={item.color}
            className="sm:p-[10px] w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ChoosePlanSlide;
