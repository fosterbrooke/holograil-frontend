import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Avatar from './Avatar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideHeader } from '../../redux/userSlice';

const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Update state based on window width
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex text-custom-gray2">
      <div className="flex w-full">
        {(isLargeScreen ||
          (!isLargeScreen && pathname.startsWith('/accounts/overview'))) && (
          <div className="flex w-full lg:max-w-[450px] h-[45px] items-center flex-grow flex-shrink-0 bg-custom-white rounded-[10px] py-[13px]">
            <FaSearch size={16} className="mx-[16px]" />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow outline-none border-none bg-transparent text-[16px] font-bold" // Styling for input
            />
          </div>
        )}
        {/* <div className="flex max-w-[230px] h-[45px] items-center flex-grow flex-shrink-0 bg-custom-white rounded-[10px] py-[13px] ml-[38px]">
          <FaRegCalendarMinus size={18} className="mx-[16px]" />
        </div> */}
      </div>
      <div className="hidden lg:flex items-center ml-[55px]">
        <img
          src="/accounts/shopping_cart.png"
          className="w-[25px] h-[25px] cursor-pointer hover:scale-105"
          onClick={() => {
            dispatch(hideHeader());
            navigate('/shipping');
          }}
        />
        <img
          src="/accounts/alert.svg"
          className="w-[20px] h-[20px] ml-[17px] mr-[40px]"
        />
        <Avatar />
      </div>
    </div>
  );
};

export default Toolbar;
