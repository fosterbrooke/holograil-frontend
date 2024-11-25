import React from 'react';

interface RoundButtonProps {
  text: string;
  isMain?: boolean;
  className?: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  isMain = true,
  className = '',
}) => {
  return (
    <button
      className={`sm:text-[16px] text-[11px] sm:leading-[19px] sm:leading-[13px] sm:py-[16px] font-semibold transform duration-200 hover:scale-105 px-[29px] border-2 border-primary ${isMain ? 'text-white bg-primary' : 'text-primary bg-white'} ${className} py-[11px]`}
    >
      {text}
    </button>
  );
};

export default RoundButton;
