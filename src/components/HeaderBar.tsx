import React from 'react';
import { HeaderItem, headerItems } from '../utils/headerItems';
import { setSelectedItem, setUser } from '../redux/userSlice';
import { RootState } from '../redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeaderBar:React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedItem = useSelector(
    (state: RootState) => state.user.selectedItem
  );
  const [, setIsMenuOpen] = useState(false);

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

  // const handleSignOut = () => {};

  return (
    <header className="flex fixed top-0 left-0 w-full items-center px-6 lg:px-[10%] md:px-[6%] py-6 bg-white/50 backdrop-blur-lg z-50 space-x-4 font-inter">
      {/* Logo */}
      <img
        src="/logo.png"
        className="cursor-pointer object-contain h-8 xl:h-10"
        alt="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

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
      <div className="flex space-x-2 lg:space-x-6">
        <div className="bg-warm-gray flex items-center justify-center text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3 text-dark-blue rounded-md cursor-pointer">
          Login
        </div>
        <div className="bg-primary flex items-center justify-center text-white text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3 rounded-md shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
          Sign Up
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
