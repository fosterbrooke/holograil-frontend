import React from 'react';
import ProfileCompletion from './ProfileCompletion';
import { HeaderItem, settingsSubItems } from '../../../types/HeaderItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { setSelectedSettingsSubItem } from '../../../redux/userSlice';

interface SettingsSubBarProps {
  className?: string;
}

const SettingsSubBar: React.FC<SettingsSubBarProps> = ({ className = '' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedSettingsSubItem = useSelector(
    (state: RootState) => state.user.selectedSettingsSubItem
  );

  const handleItemClick = (item: HeaderItem) => {
    dispatch(setSelectedSettingsSubItem(item.name));
    localStorage.setItem('selectedSettingsSubItem', item.name);
    navigate(item.link);
  };

  return (
    <div className={`${className}`}>
      <div className=" mt-[21px]">
        <ProfileCompletion completionPercentage={51} />
      </div>

      <div className="mt-[22px] flex flex-col w-full text-custom-gray2 space-y-[2px] font-bold">
        {settingsSubItems.map((item) => (
          <div
            className={`flex justify-between hover:cursor-pointer py-[23px] px-[32px] hover:scale-[101%] duration-200 hover:text-dark-gray rounded-[10px] ${selectedSettingsSubItem === item.name ? 'text-primary bg-custom-white' : ''}`}
            key={item.name}
            onClick={() => handleItemClick(item)}
          >
            <div className="flex space-x-[25px]">
              <img
                src={`${'/accounts/settings/' + (selectedSettingsSubItem === item.name ? '' : 'default_') + item.icon}`}
              />
              <div className="">{item.name}</div>
            </div>
            <div className="">{'>'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsSubBar;
