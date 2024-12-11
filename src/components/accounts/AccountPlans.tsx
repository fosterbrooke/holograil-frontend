import React from 'react';
import PurchasePlansComp from './plans/PurchasePlansComp';
import { pricingPlans } from '../../utils/stripe';

const AccountPlans: React.FC = () => {
  const subscriptions = [
    {
      id: pricingPlans['day'],
      title: 'Daily License',
      price: 40,
      period: 'Daily',
      content: 'Unlimited 24hr access for one device',
      options: [],
    },
    {
      id: pricingPlans['month'],
      title: 'Monthly License',
      price: 150,
      period: 'Monthly',
      content: 'Unlimited 30 days access for one device',
      options: [],
    },
    {
      id: pricingPlans['year'],
      title: 'Yearly License',
      price: 1500,
      period: 'Yearly',
      content: 'Unlimited 365 days access for one device',
      options: [],
    },
    {
      id: pricingPlans['onetime'],
      title: 'One Time Setup',
      price: 990,
      period: 'one time setup',
      content: '',
      options: [
        'Comprehensive training manual',
        '1-hour online meeting',
        'A Roller',
        '500 sheets',
        'App download',
        '3-month license key for 1 device',
        'Custom border file',
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-[44px] sm:mt-[93px]">
      {subscriptions.map((item, index) => (
        <PurchasePlansComp
          key={index}
          planId={item.id}
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
