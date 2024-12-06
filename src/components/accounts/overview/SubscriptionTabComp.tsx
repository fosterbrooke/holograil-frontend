import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RoundButton from '../../RoundButton';

interface SubscriptionData {
  devices: {
    name: string;
    expiry: string;
    license: string;
  }[];
  payments: {
    id: number;
    event: string;
    type: string;
  }[];
}

interface SubscriptionInfo {
  current: SubscriptionData;
  past: SubscriptionData;
}

type ActiveTab = 'current' | 'past';

const SubscriptionTabs: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>('current');
  const subscriptionInfo: SubscriptionInfo = {
    current: {
      devices: [],
      payments: [],
    },
    past: {
      devices: [
        {
          name: 'Device 1',
          expiry: 'DD/MM/YYYY',
          license: 'dfhk34',
        },
        {
          name: 'Device 1',
          expiry: 'DD/MM/YYYY',
          license: 'dfhk34',
        },
        {
          name: 'Device 1',
          expiry: 'DD/MM/YYYY',
          license: 'dfhk34',
        },
        {
          name: 'Device 1',
          expiry: 'DD/MM/YYYY',
          license: 'dfhk34',
        },
        {
          name: 'Device 1',
          expiry: 'DD/MM/YYYY',
          license: 'dfhk34',
        },
      ],
      payments: [
        {
          id: 2,
          event: 'Subscription renewal alert',
          type: 'Monthly Subscription Plan',
        },
        {
          id: 8,
          event: 'Payment Due',
          type: 'Daily Subscription Plan',
        },
        {
          id: 11,
          event: 'Subscription upgrade',
          type: 'Yearly Subscription Plan',
        },
        {
          id: 20,
          event: 'Payment Due',
          type: 'Daily Subscription Plan',
        },
        {
          id: 28,
          event: 'Subscription renewal alert',
          type: 'Monthly Subscription Plan',
        },
      ],
    },
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  const handleSubscribe = () => {
    navigate("/accounts/plans");
  }

  const currentData = subscriptionInfo[activeTab];

  return (
    <div className="mt-[25px]">
      {/* Tab Navigation */}
      <div className="flex space-x-[80px]">
        <div className="flex max-w-[521px] flex-grow flex-shrink-1">
          {/* Your Subscriptions */}
          <div>
            <div className="font-semibold text-[24px] text-primary mt-[64px] mb-[15px]">
              Your Subscriptions
            </div>
            <div>
              <button onClick={() => handleTabChange('current')}>
                <div
                  className={`font-bold text-[20px] ${activeTab === 'current' ? 'text-primary' : 'text-custom-gray2'}`}
                >
                  Current
                </div>
                <div
                  className={`w-[130px] h-[2px] rounded-t-[2px] ${activeTab === 'current' ? 'bg-primary' : 'bg-custom-white'} mt-[24px]`}
                />
              </button>
              <button
                onClick={() => handleTabChange('past')}
                className="ml-[10px]"
              >
                <div
                  className={`font-bold text-[20px] ${activeTab === 'past' ? 'text-primary' : 'text-custom-gray2'}`}
                >
                  Past
                </div>
                <div
                  className={`w-[130px] h-[2px] rounded-t-[2px] ${activeTab === 'past' ? 'bg-primary' : 'bg-custom-white'} mt-[24px]`}
                />
              </button>
              <div className="bg-custom-white w-[542px] h-[2px] mt-[-2px]" />
            </div>
            {currentData.devices.length > 0 && (
              <div>
                <div className="mt-[31px]">
                  {currentData.devices.map((device, index) => (
                    <div key={index}>
                      <div
                        className={`flex items-center justify-between space-x-[15px] rounded-[10px] text-[16px] py-[23px] px-[28px] ${index % 2 == 0 ? 'text-white bg-primary' : 'text-black bg-custom-white'}`}
                      >
                        <img
                          src="/accounts/overview/airplay.svg"
                          className=""
                        />
                        <div>
                          <div>{device.name}</div>
                          <div>Expiry: {device.expiry}</div>
                        </div>
                        <div>LICENSE KEY: {device.license}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-[24px] text-primary mt-[64px] mb-[15px]">
                    Your Hardware ID{' '}
                  </div>
                  <div className="bg-custom-white rounted-[10px] h-[60px] w-full" />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Your Rececnt Payments */}
        {currentData.devices.length > 0 && (
          <div className="flex-grow flex-shrink-1 max-w-[393px] font-poppins">
            <div className="font-semibold text-[24px] text-primary mt-[64px] mb-[15px]">
              Your Recent Payments
            </div>
            <div>
              {currentData.payments.map((payment, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-[19px] ${index % 2 == 1 ? 'bg-custom-white rounded-[12px]' : 'bg-white'}`}
                >
                  <div
                    className={`flex items-center justify-center font-semibold text-[20px] my-[29px] text-white mx-[18px] w-[62px] h-[62px] rounded-[31px] ${index % 2 == 0 ? 'bg-custom-blue' : 'bg-primary'} flex-shrink-0`}
                  >
                    {payment.id}
                  </div>
                  <div className="flex flex-col space-y-[7px] my-[10px]">
                    <div className="font-semibold text-[16px]">
                      {payment.event}
                    </div>
                    <div className="text-[13px]">{payment.type}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex items-center justify-center w-full mt-[14px]">
              <RoundButton text="View full list" className="rounded-[70px]" />
            </div>
          </div>
        )}
      </div>
      {currentData.devices.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-[100px]">
          <img src="/accounts/overview/no_data.png" />
          <div className="mt-[22px] max-w-[610px] text-center text-custom-gray2 text-[20px]">
            Currently you don’t have any subscriptions linked to your account.
            Get started on a plan today!
          </div>
          <RoundButton
            text="Subscribe Now"
            className="mt-[44px] rounded-[10px] max-w-[282px] w-full"
            onClick={handleSubscribe}
          />
        </div>
      )}
    </div>
  );
};

export default SubscriptionTabs;
