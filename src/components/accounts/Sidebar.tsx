import React from 'react';
import { HeaderItem, accountsHeaderItems } from '../../types/HeaderItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { setSelectedAccountsItem } from '../../redux/userSlice';

interface SidebarProps {
  onClose: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, className = '' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedAccountsItem = useSelector(
    (state: RootState) => state.user.selectedAccountsItem
  );

  const handleItemClick = (item: HeaderItem) => {
    dispatch(setSelectedAccountsItem(item.name));
    localStorage.setItem('selectedAccountsItem', item.name);
    navigate(item.link);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleUpgradePlan = () => {
    navigate("/accounts/plans");
  }

  return (
    <div
      className={`flex flex-col w-[320px] bg-custom-white items-center space-y-[100px] ${className}`}
    >
      <img
        src="/logo.png"
        className="mt-[77px] mx-auto hover:cursor-pointer"
        onClick={onClose}
      />
      <div className="flex flex-col w-full space-y-[10px] ">
        {accountsHeaderItems.map((item) => (
          <div
            className={`h-[50px] flex w-[268px] justify-space space-x-[32px] ${selectedAccountsItem === item.name ? 'text-white' : 'text-custom-gray2'}`}
            key={item.name}
            onClick={() => handleItemClick(item)}
          >
            <div
              className={`${selectedAccountsItem === item.name ? 'bg-primary' : 'bg-custom-white duration-300'} w-[4px] h-[48px] rounded-r-[4px]`}
            />
            <div
              className={`${selectedAccountsItem === item.name ? 'bg-primary shadow-custom-item scale-[101%]' : 'bg-custom-white'} flex cursor-pointer duration-300 hover:scale-[101%] rounded-[10px] w-[230px] space-x-[23px] items-center`}
            >
              <img
                src={`${'/accounts/' + (selectedAccountsItem === item.name ? '' : 'default_') + item.icon}`}
                className="w-[24px] ml-[48px] duration-300"
              />
              <div className={`font-bold text-[16px]`}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="sm:text-[16px] text-[16px] sm:leading-[19px] sm:leading-[13px] sm:py-[16px] font-semibold transform duration-300 hover:scale-105 rounded-[7px] px-[49px] text-white bg-primary py-[15px] shadow-custom-item2"
        onClick={handleUpgradePlan}>
        Upgrade your plan
      </button>
    </div>
  );
};

export default Sidebar;
