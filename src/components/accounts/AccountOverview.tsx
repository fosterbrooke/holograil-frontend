import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '../RoundButton';
import SubscriptionTabs from './overview/SubscriptionTabComp';

const AccountOverview: React.FC = () => {
  const navigate = useNavigate();

  const handleAddSubscription = () => {
    navigate('/accounts/plans');
  };

  return (
    <div className="sm:mt-[50px] mt-8">
      <div className="flex items-center space-x-[100px]">
        <div>
          <div className="font-semibold lg:text-[32px] sm:text-[18px] text-[16px] text-primary">
            Get Started with The Grail
          </div>
          <div className="lg:text-[16px] text-[12px] text-black sm:mt-[16px] mt-2">
            View, progress and manage subscription efficiently
          </div>
        </div>
        <RoundButton
          text="+Add Subscription"
          className="rounded-[70px] hidden lg:flex"
          onClick={handleAddSubscription}
        />
      </div>
      <SubscriptionTabs />
    </div>
  );
};

export default AccountOverview;
