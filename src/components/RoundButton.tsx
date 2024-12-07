import React from 'react';

interface RoundButtonProps {
  text?: string;
  isMain?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;  // Add this to accept children as well
}

const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  isMain = true,
  className = '',
  children,
  onClick,
}) => {
  return children ? (
    // If children are passed, render them directly
    <button className={`${className} cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  ) : (
    // Otherwise, render the default button with text
    <button
      className={`sm:text-[16px] text-[11px] sm:leading-[19px] sm:leading-[13px] sm:py-[16px] font-semibold transform duration-200 hover:scale-105 sm:px-[29px] px-[20px] border-2 border-primary ${isMain ? 'text-white bg-primary' : 'text-primary bg-white'} ${className} py-[11px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RoundButton;
