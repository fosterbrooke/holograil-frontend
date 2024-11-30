import React from 'react';
import RoundButton from '../RoundButton';
import SubscriptionTabs from './overview/SubscriptionTabComp';

const AccountOverview: React.FC = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex items-center space-x-[100px]">
        <div>
          <div className="font-semibold text-[32px] text-primary">
            Get Started with The Grail
          </div>
          <div className="text-[16px] text-black mt-[16px]">
            View, progress and manage subscription efficiently
          </div>
        </div>
        <RoundButton text="+Add Subscription" className="rounded-[70px]" />
      </div>
      <SubscriptionTabs />
    </div>
  );
};

export default AccountOverview;
