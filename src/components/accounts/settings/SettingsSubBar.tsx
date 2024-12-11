import React, { ReactNode } from 'react';
import ProfileCompletion from './ProfileCompletion';
import { HeaderItem, settingsSubItems } from '../../../types/HeaderItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { setSelectedSettingsSubItem } from '../../../redux/userSlice';

interface SettingsSubBarProps {
  className?: string;
  content?: ReactNode;
}

const SettingsSubBar: React.FC<SettingsSubBarProps> = ({
  className = '',
  content,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedSettingsSubItem = useSelector(
    (state: RootState) => state.user.selectedSettingsSubItem
  );

  const handleItemClick = (item: HeaderItem) => {
    if (selectedSettingsSubItem !== item.name) {
      dispatch(setSelectedSettingsSubItem(item.name));
      localStorage.setItem('selectedSettingsSubItem', item.name);
      navigate(item.link);
    } else {
      dispatch(setSelectedSettingsSubItem('None'));
      localStorage.setItem('selectedSettingsSubItem', 'None');
      navigate('/accounts/settings');
    }
  };

  return (
    <div className={`${className}`}>
      <div className=" mt-[21px]">
        <ProfileCompletion completionPercentage={51} />
      </div>

      <div className="mt-[22px] flex flex-col w-full text-custom-gray2 space-y-[2px] font-bold">
        {settingsSubItems.map((item) => (
          <div key={item.name}>
            <div
              className={`flex justify-between hover:cursor-pointer py-[23px] px-[32px] hover:scale-[101%] duration-200 hover:text-dark-gray rounded-[10px] ${selectedSettingsSubItem === item.name ? 'text-primary bg-custom-white' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex space-x-[25px]">
                <img
                  src={`${'/accounts/settings/' + (selectedSettingsSubItem === item.name ? '' : 'default_') + item.icon}`}
                />
                <div className="">{item.name}</div>
              </div>
              <div className="">
                {selectedSettingsSubItem === item.name ? '˅' : '>'}
              </div>
            </div>
            {selectedSettingsSubItem === item.name && (
              <div className="sm:hidden flex flex-col bg-custom-white flex-grow flex-shrink-0 basis-[500px] rounded-[10px] h-[880px] overflow-y-auto py-[23px] sm:px-[38px] px-[24px] mt-[21px]">
                <div className="font-semibold text-black sm:text-[24px] text-[16px]">
                  {item.name}
                </div>
                {content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsSubBar;
