// AccountLayout.tsx
import React, { useEffect } from 'react';
import Sidebar from '../components/accounts/Sidebar';
import Toolbar from '../components/accounts/Toolbar';

interface AccountLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  // title?: string;
  children: React.ReactNode; // This will hold the specific content for eac
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  isOpen,
  onClose,
  // title = 'This is a test page',
  children,
}) => {
  // if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={`flex flex-grow min-h-screen bg-custom-white transition-opacity transition-transform duration-500 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'scale-105 opacity-50'}`}
    >
      <div className="flex justify-end flex-grow flex-shrink-0 basis-[320px]">
        <Sidebar onClose={onClose} />
      </div>
      <div className="flex flex-grow flex-shrink-1 basis-[1120px] bg-white">
        <div className="py-[89px] px-[76px] flex flex-col w-full max-w-[1120px] items-stretch flex-grow ">
          <Toolbar />
          <div className="">
            {children} {/* Render child components here */}
          </div>
        </div>
        {/* <div className="flex-grow sticky text-custom-gray2">
          <button
            onClick={onClose}
            className="relative hover:scale-105 border-2 w-[40px] h-[40px] mt-[90px] rounded-[100%] flex items-center justify-center"
          >
            <div className="mt-[-4px] text-[35px]">&times;</div>
            <div className="absolute top-[40px]">ESC</div>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AccountLayout;
