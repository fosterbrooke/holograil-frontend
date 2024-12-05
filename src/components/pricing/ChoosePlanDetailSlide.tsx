import React from 'react';
import PurchaseCardDetailComp from './PurchaseCardDetailComp';
import OneTimeSetupComp from './OneTimeSetupComp';

const ChoosePlanDetailSlide: React.FC = () => {
  const focusIndex = 1;
  const oneTimeSubscription = {
    title: '1 Time Setup',
    price: 990,
    period: '',
    color: 'bg-[#37A3FF]',
    placeholder:
      'This option is perfect for those who want to experience the full potential of our software without a long-term commitment.',
    content: [
      'Includes a roller, 500 sheets (4” x 4”), and a border file for easy lenticular print creation.',
      "One-time online training session (1 hour) to ensure you're fully equipped, plus a 3-month software license for one device.",
      'Download our app to effortlessly manage your projects and prints with included training manual.',
    ],
    subTitle: [
      'Comprehensive Starter Kit',
      'Exclusive Access & Support',
      'Seamless App Integration',
    ],
  };
  const subscriptions = [
    {
      title: 'Yearly License',
      price: 1500,
      period: 'Year',
      color: 'bg-[#DD99D7]',
      content: [
        'Yearly Subscription',
        'Unlimited Access for 365 days ',
        'One Device',
      ],
      subTitle:
        'For established businesses looking to cut costs while maximizing long-term profitability.',
    },
    {
      title: 'Monthly License',
      price: 150,
      period: 'Month',
      color: 'bg-[#7E58FC]',
      content: [
        'Monthly Subscription',
        'Unlimited Access for 30 days ',
        'One Device',
      ],
      subTitle:
        'Ideal for businesses with consistent bookings that need flexibility month-to-month.',
    },
    {
      title: 'Daily License',
      price: 40,
      period: 'Day',
      color: 'bg-[#FD9B3F]',
      content: [
        'Daily Subscription',
        'Unlimited Access for 24hrs ',
        'One Device',
      ],
      subTitle:
        'Perfect for short-term usage and is perfect for pop-up events, trade shows, or festivals.',
    },
  ];
  return (
    <div>
      <div className="mt-[17px] flex justify-center items-center lg:flex-row flex-col 2xl:mt-[200px] lg:mt-[130px] mt-[78px]">
        {subscriptions.map((item, index) => (
          <PurchaseCardDetailComp
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            content={item.content}
            period={item.period}
            price={item.price}
            bgColor={item.color}
            isFocus={index === focusIndex}
            className="m-[10px]"
          />
        ))}
      </div>
      <OneTimeSetupComp
        title={oneTimeSubscription.title}
        price={oneTimeSubscription.price}
        placeholder={oneTimeSubscription.placeholder}
        content={oneTimeSubscription.content}
        subTitle={oneTimeSubscription.subTitle}
        className="2xl:mt-[200px] lg:mt-[150px] mt-[100px]"
      />
    </div>
  );
};

export default ChoosePlanDetailSlide;
