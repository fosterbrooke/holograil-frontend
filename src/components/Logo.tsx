import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); // md breakpoint

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
    <img
      src={isLargeScreen ? '/logo.png' : '/logo2.png'}
      className="cursor-pointer object-contain h-8 xl:h-10 md:w-[213px] w-[131px]"
      alt="logo"
      onClick={() => navigate('/')}
    />
  );
};

export default Logo;
