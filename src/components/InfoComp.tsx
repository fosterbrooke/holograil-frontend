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
      className={`${className} h-full bg-secondary rounded-[15px] text-white p-[24px] flex items-start sm:space-x-[24px] space-x-[9px]`}
    >
      <img src="/information_icon.png" className="md:w-[32px] w-[20px]" />
      <div className="flex-grow flex-shrink-1">
        <div
          className={`font-semibold ${isSmall ? 'text-[24px]' : '2xl:text-[32px] lg:text-[20px] text-[11px]'} leading-[120%] tracking-[-0.02em]`}
        >
          {title}
        </div>
        <div
          className={`mt-[8px] ${isSmall ? 'text-[15px]' : '2xl:text-[20px] lg:text-[14px] text-[10px]'} leading-[140%]`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default InfoComp;
