import React from 'react';
import { FaRegCalendarMinus, FaSearch } from 'react-icons/fa';
import Avatar from './Avatar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideHeader } from '../../redux/userSlice';

const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex text-custom-gray2">
      <div className="flex w-full">
        <div className="flex max-w-[480px] h-[45px] items-center flex-grow flex-shrink-0 bg-custom-white rounded-[10px] py-[13px]">
          <FaSearch size={16} className="mx-[16px]" />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none border-none bg-transparent text-[16px] font-bold" // Styling for input
          />
        </div>
        <div className="flex max-w-[230px] h-[45px] items-center flex-grow flex-shrink-0 bg-custom-white rounded-[10px] py-[13px] ml-[38px]">
          <FaRegCalendarMinus size={18} className="mx-[16px]" />
        </div>
      </div>
      <div className="flex items-center ml-[55px]">
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
