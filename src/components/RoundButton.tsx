import React from 'react'

interface RoundButtonProps {
  text: string;
  isMain?: boolean;
}

const RoundButton: React.FC<RoundButtonProps> = ({ text, isMain = true }) => {
  return (
    <div>
      <button className={`transform duration-200 hover:scale-105 rounded-[7px] px-[29px] border-2 border-primary py-[16px] ${isMain ? 'text-white bg-primary' : 'text-primary bg-white'}`}>{text}</button>
    </div>
  );
}

export default RoundButton