import React, { useState } from 'react';
import SubscriptionCurrentShowComp from './SubscriptionCurrentShowComp';
import CurrentPaymentMethodComp from './CurrentPaymentMethodComp';

const SubscriptionsSettingsPage: React.FC = () => {
  const subscriptions = [
    {
      plan: 'month' as const,
      amount: 150,
      expiry: new Date('2024-12-01'), // Example expiry date
    },
    {
      plan: 'day' as const,
      amount: 40,
      expiry: new Date('2024-12-23'), // Example expiry date
    },
  ];

  // Sample payment data
  const [paymentMethods, setPaymentMethods] = useState([
    {
      method: 'mastercard' as const,
      cardNumber: '1234567812345678',
      expiryDate: new Date('2024-04-01'),
    },
    {
      method: 'paypal' as const,
      cardNumber: undefined, // No card number for PayPal
      expiryDate: new Date('2025-12-01'),
    },
  ]);

  const billingHistory = [
    {
      date: new Date('2020-12-1'),
      price: 40,
      plan: 'Daily Subscription',
    },
    {
      date: new Date('2021-1-1'),
      price: 10,
      plan: 'Daily Subscription',
    },
    {
      date: new Date('2021-2-1'),
      price: 10,
      plan: 'Daily Subscription',
    },
  ];

  const removePaymentMethod = (index: number) => {
    setPaymentMethods((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="text-black flex flex-col">
      <div className="mt-[47px] text-[16px]">CURRENT PLAN</div>
      <hr className="mt-[14px]" />
      <div className="mt-[23px] flex flex-col space-y-[33px]">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCurrentShowComp
            key={index}
            plan={subscription.plan}
            amount={subscription.amount}
            expiry={subscription.expiry}
            className="my-2" // Add margin bottom for spacing
          />
        ))}
      </div>
      <div className="mt-[45px] text-[16px]">PAYMENT METHOD</div>
      <hr className="mt-[14px]" />
      <div className="mt-[30px] space-y-[45px] flex flex-col">
        {paymentMethods.map((payment, index) => (
          <CurrentPaymentMethodComp
            key={index}
            paymentMethod={payment.method}
            cardNumber={payment.cardNumber}
            expiryDate={payment.expiryDate}
            className=""
            onRemove={() => removePaymentMethod(index)}
          />
        ))}
      </div>
      <div className="mt-[77px] text-[16px]">BILLING HISTORY</div>
      <hr className="mt-[14px]" />
      <div className="flex flex-col space-y-[34px] mt-[27px]">
        {billingHistory.map((item, index) => (
          <div key={index} className="flex space-x-[48px]">
            <div className="flex space-x-[6px] w-[110px]">
              <div>
                {item.date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <img src="/accounts/settings/open.svg" />
            </div>
            <div className="w-[32px]">${item.price}</div>
            <div>{item.plan}</div>
          </div>
        ))}
      </div>
      <div className="mb-[100px]" />
    </div>
  );
};

export default SubscriptionsSettingsPage;
