import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { User } from '../../types/User';
import { useNavigate } from 'react-router-dom';
import { clearUser, hideHeader } from '../../redux/userSlice';
import { RxAvatar } from 'react-icons/rx';

interface AvatarProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.user.user
  ) as User | null;
  const photoURL = user?.photoURL || '';

  const tooglePopup = () => {
    setIsVisible(!isVisible);
  };

  const handleSignOut = () => {
    dispatch(clearUser());
    localStorage.removeItem('user');
    dispatch(hideHeader());
    navigate('/login');
  };

  const handleSettingsClick = () => {
    // Retrieve selected item from local storage
    const storedSelectedAccountsItem = localStorage.getItem(
      'selectedAccountsItem'
    );

    // Navigate based on the stored item or default to overview
    dispatch(hideHeader());
    if (storedSelectedAccountsItem) {
      navigate(`/accounts/${storedSelectedAccountsItem}`);
    } else {
      navigate('/accounts/overview');
    }
  };

  return (
    <div className={`flex flex-shrink-0 items-center ${className} relative`}>
      {photoURL ? (
        <img
          src={photoURL}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-custom-gray hover:cursor-pointer"
          onClick={tooglePopup}
        />
      ) : (
        <RxAvatar
          color="white"
          size={40}
          className="bg-custom-gray rounded-[20px] hover:cursor-pointer"
          onClick={tooglePopup}
        />
      )}
      <img
        src="/accounts/dots.svg"
        className="h-[18px] ml-[10px] hover:cursor-pointer"
        onClick={tooglePopup}
      />
      <div
        className={`rounded-[10px] h-[68px] shadow-custom-testimonial absolute right-0 top-[52px] hover:cursor-pointer bg-white duration-200 ease-in ${isVisible ? 'w-[136px]' : 'opacity-0 w-0'}`}
      >
        <div
          className={`flex w-full space-x-[10px] pl-[10px] pt-[10px] pb-[7px] hover:bg-custom-white rounded-t-[10px] ${isVisible ? '' : 'hidden'}`}
          onClick={handleSettingsClick}
        >
          <img src="/accounts/settings_icon.svg" />
          <div className="text-[12px] text-black">Settings</div>
        </div>
        <div
          className={`flex space-x-[10px] pl-[10px] pt-[7px] pb-[8px] w-full hover:bg-custom-white rounded-b-[10px] ${isVisible ? '' : 'hidden'}`}
          onClick={handleSignOut}
        >
          <img src="/accounts/logout_icon.svg" />
          <div className="text-[12px] text-black">Sign out</div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
