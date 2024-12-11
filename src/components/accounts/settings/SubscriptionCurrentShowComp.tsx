import React from 'react';
import RoundButton from '../../RoundButton';
import { useNavigate } from 'react-router-dom';

type PlanType = 'year' | 'month' | 'day';

interface SubscriptionCurrentShowCompProps {
  plan: PlanType;
  amount: number;
  expiry: Date;
  className?: string;
}

const SubscriptionCurrentShowComp: React.FC<
  SubscriptionCurrentShowCompProps
> = ({ plan, amount, expiry, className = '' }) => {
  const navigate = useNavigate();

  // Format the expiry date to "October 1, 2021"
  const formattedExpiry = expiry.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleUpgradePlan = () => {
    navigate('/accounts/plans');
  };

  return (
    <div className={`rounded-[7px] ${className}`}>
      <div className="font-bold text-[22px]">
        {plan === 'year' ? 'Yearly' : plan === 'month' ? 'Monthly' : 'Daily'}{' '}
        Subscription
      </div>
      <div className="mt-[13px] text-[20px]">
        ${amount} per {plan}
      </div>
      <div className="flex space-x-[15px] mt-[23px]">
        <RoundButton
          text="Upgrade plan"
          className="rounded-[7px] shadow-custom-item"
          onClick={handleUpgradePlan}
        />
        <RoundButton
          text="Cancel plan"
          className="rounded-[7px]"
          isMain={false}
        />
      </div>
      <div className="mt-[19px]">Your plan expires on {formattedExpiry}</div>
    </div>
  );
};

export default SubscriptionCurrentShowComp;
