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
    <div className="sm:mt-[50px]">
      <div className="font-semibold sm:text-[36px] text-[20px] text-black">
        Settings
      </div>
      <div className="flex sm:flex-row flex-col sm:space-x-[44px] space-y-[20px]">
        <div className="flex-grow flex-shrink-1 basis-[424px]">
          <SettingsSubBar content={children} />
        </div>
        <div className="hidden sm:flex flex-col bg-custom-white flex-grow flex-shrink-0 basis-[500px] rounded-[10px] h-[880px] overflow-y-auto py-[23px] sm:px-[38px] mt-[21px]">
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
