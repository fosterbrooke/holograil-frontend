import React from 'react';
import PurchasePlansComp from './plans/PurchasePlansComp';

const AccountPlans: React.FC = () => {
  const subscriptions = [
    {
      title: 'Daily License',
      price: 40,
      period: 'Daily',
      content: 'Unlimited 24hr access for one device',
      options: [],
    },
    {
      title: 'Monthly License',
      price: 150,
      period: 'Monthly',
      content: 'Unlimited 30 days access for one device',
      options: [],
    },
    {
      title: 'Yearly License',
      price: 1500,
      period: 'Yearly',
      content: 'Unlimited 365 days access for one device',
      options: [],
    },
    {
      title: 'One Time Setup',
      price: 990,
      period: 'one time setup',
      content: '',
      options: [
        'Training manual',
        '1 time online meet (1 hour)',
        '1 roller',
        '500 pcs sheets (4’’ x 4’’)',
        'App download',
        '3 month key (1 device only)',
        'Border file',
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-[44px] mt-[93px]">
      {subscriptions.map((item, index) => (
        <PurchasePlansComp
          key={index}
          title={item.title}
          content={item.content}
          period={item.period}
          price={item.price}
          options={item.options}
          className=""
        />
      ))}
    </div>
  );
};

export default AccountPlans;
