import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RoundButton from '../../RoundButton';
import { getLicenseByUser } from '../../../services/license.service';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/User';
import { License } from '../../../types/License';
import CopyComp from './CopyComp';

type ActiveTab = 'current' | 'past';

const SubscriptionTabs: React.FC = () => {
  const navigate = useNavigate();

  const user = useSelector(
    (state: RootState) => state.user.user
  ) as User | null;

  const [activeTab, setActiveTab] = useState<ActiveTab>('current');
  const [subscriptionInfo, setSubScriptionInfo] = useState({
    current: [],
    past: [],
  });

  useEffect(() => {
    const fetchLicenses = async () => {
      if (user) {
        const licenses = await getLicenseByUser(user.email);

        if (licenses) {
          const nowtime = new Date();

          const newSubscriptionInfo = {
            current: licenses
              .filter(
                (license: License) => new Date(license.expire_date) > nowtime
              )
              .map((license: License) => ({
                device_number: license.device_number || 'Unknown Device',
                expire_date: new Date(license.expire_date),
                license_key: license.license_key,
              })),
            past: licenses
              .filter(
                (license: License) => new Date(license.expire_date) <= nowtime
              )
              .map((license: License) => ({
                device_number: license.device_number || 'Unknown Device',
                expire_date: new Date(license.expire_date),
                license_key: license.license_key,
              })),
          };

          setSubScriptionInfo(newSubscriptionInfo);
        }
      }
    };

    fetchLicenses();
  }, [user]);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  const handleSubscribe = () => {
    navigate('/accounts/plans');
  };

  const currentData = subscriptionInfo[activeTab];

  return (
    <div className="mt-[25px]">
      {/* Tab Navigation */}
      <div className="flex space-x-[80px] w-full">
        <div className="flex flex-grow flex-shrink-1">
          {/* Your Subscriptions */}
          <div className="w-full">
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
            {currentData.length > 0 && (
              <div>
                <div className="mt-[31px] w-[542px]">
                  {currentData.map((license: License, index) => (
                    <div key={index}>
                      <div
                        className={`flex items-center justify-between space-x-[15px] rounded-[10px] text-[16px] py-[23px] px-[28px] ${activeTab === 'current' ? 'text-black' : 'text-black-50'} ${index % 2 == 0 ? 'bg-gray-300' : 'bg-custom-white'}`}
                      >
                        <img
                          src="/accounts/overview/airplay.svg"
                          className={`${activeTab === 'current' ? '' : 'grayscale'}`}
                        />
                        <div>
                          <div>{license.device_number}</div>
                          <div>
                            {activeTab === 'current' ? 'Expiry: ' : 'Expired: '}
                            {license.expire_date.toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center">
                          LICENSE KEY: {license.license_key.slice(0, 10)}...
                          <CopyComp license={license.license_key} index={0} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div>
                  <div className="font-semibold text-[24px] text-primary mt-[64px] mb-[15px]">
                    Your Hardware ID{' '}
                  </div>
                  <div className="bg-custom-white rounted-[10px] h-[60px] w-full" />
                </div> */}
              </div>
            )}
            {currentData.length === 0 && (
              <div className="flex flex-col items-center justify-center mt-[100px] mr-[200px]">
                <img src="/accounts/overview/no_data.png" />
                <div className="mt-[22px] max-w-[610px] text-center text-custom-gray2 text-[20px]">
                  Currently you don’t have any subscriptions linked to your
                  account. Get started on a plan today!
                </div>
                <RoundButton
                  text="Subscribe Now"
                  className="mt-[44px] rounded-[10px] max-w-[282px] w-full"
                  onClick={handleSubscribe}
                />
              </div>
            )}
          </div>
        </div>
        {/* Your Rececnt Payments */}
        {/* {currentData.length > 0
          && activeTab === 'current'
          && (
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
      </div> */}
      </div>
    </div>
  );
};

export default SubscriptionTabs;
