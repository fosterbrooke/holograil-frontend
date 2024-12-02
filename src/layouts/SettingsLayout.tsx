import React from 'react';
import SettingsSubBar from '../components/accounts/settings/SettingsSubBar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  const selectedSettingsSubItem = useSelector(
    (state: RootState) => state.user.selectedSettingsSubItem
  );

  return (
    <div className="mt-[50px]">
      <div className="font-semibold text-[36px] text-black">Settings</div>
      <div className="flex space-x-[44px]">
        <div className="flex-grow flex-shrink-1 basis-[424px]">
          <SettingsSubBar />
        </div>
        <div className="bg-custom-white flex-grow flex-shrink-0 basis-[500px] rounded-[10px] h-[880px] overflow-y-auto py-[23px] px-[38px] mt-[21px]">
          <div className="font-semibold text-black text-[24px]">
            {selectedSettingsSubItem}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
