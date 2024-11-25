import React from 'react';
import { HeaderItem, headerItems } from '../types/HeaderItem';
import { clearUser, setSelectedItem, setUser } from '../redux/userSlice';
import { RootState } from '../redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { FaSignOutAlt } from 'react-icons/fa';
import Logo from './Logo';
import { User } from '../types/User';
import Avatar from './accounts/Avatar';

const HeaderBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedItem = useSelector(
    (state: RootState) => state.user.selectedItem
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(
    (state: RootState) => state.user.user
  ) as User | null;

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedSelectedItem = localStorage.getItem('selectedItem');

    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }

    if (storedSelectedItem) {
      dispatch(setSelectedItem(storedSelectedItem));
    }
  }, [dispatch]);

  const handleItemClick = (item: HeaderItem) => {
    dispatch(setSelectedItem(item.name));
    localStorage.setItem('selectedItem', item.name);
    navigate(item.link);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsMenuOpen(false);
  };

  const handleSettingsClick = () => {
    navigate('/accounts');
  };

  const handleSignOut = () => {
    dispatch(clearUser());
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="flex fixed top-0 left-0 w-full items-center justify-between px-6 lg:px-[10%] md:px-[6%] py-6 md:bg-white/50 bg-primary backdrop-blur-lg z-50 space-x-4 font-inter">
      {/* Logo */}
      <Logo />

      {/* Navigation Items */}
      <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-8 text-sm xl:text-base items-center">
        {headerItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={`cursor-pointer text-center ${
              selectedItem === item.name ? 'text-primary' : 'text-dark-gray'
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Login and Sign Up Buttons */}
      {user ? (
        <div className="flex items-center">
          <button onClick={handleSettingsClick}>
            <Avatar />
          </button>
          <FaSignOutAlt
            color=""
            className="ml-4 cursor-pointer"
            onClick={handleSignOut}
          />
        </div>
      ) : (
        <div className="hidden md:flex space-x-2 lg:space-x-6">
          <Link
            className="bg-warm-gray flex items-center justify-center text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3 text-dark-blue rounded-md hover:scale-[102%] duration-100"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="bg-primary flex items-center justify-center text-white text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3 rounded-md shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Sign Out Functionality */}
      <div className="flex items-center hidden">
        <RxAvatar
          color="white"
          size={28}
          className="bg-primary/50 rounded-[20px]"
        />
        <FaSignOutAlt
          color="white"
          className="ml-4 cursor-pointer bg-primary/50 rounded-[20px]"
          onClick={handleSignOut}
        />
      </div>

      <div className="md:hidden text-white relative">
        <button
          className="text-[24px] font-semibold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`fixed right-0 w-full bg-primary py-2.5 px-4 shadow-gray-800 shadow-md transition-all duration-200 ${!isMenuOpen ? 'h-0 opacity-0' : 'h-[180px]'} text-right`}
        >
          {headerItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer m-2 ${item.name === selectedItem ? 'font-poppins font-bold' : ''}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeaderBar;
