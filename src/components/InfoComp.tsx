import React from 'react';

interface InfoCompProps {
  title: string;
  text: string;
  className?: string;
  isSmall?: boolean;
}

const InfoComp: React.FC<InfoCompProps> = ({
  title,
  text,
  className = '',
  isSmall = false,
}) => {
  return (
    <div
      className={`${className} h-full bg-secondary rounded-[15px] text-white p-[24px] flex items-start space-x-[24px]`}
    >
      <img src="/information_icon.png" className="w-[32px] h-[32px]" />
      <div>
        <div
          className={`font-semibold ${isSmall ? 'text-[24px]' : 'text-[32px]'} leading-[120%] tracking-[-0.02em]`}
        >
          {title}
        </div>
        <div
          className={`mt-[8px] ${isSmall ? 'text-[15px]' : 'text-[20px]'} leading-[140%]`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default InfoComp;
