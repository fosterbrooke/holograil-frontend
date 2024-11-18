import React from 'react';

interface InfoCompProps {
  title: string;
  text: string;
  className?: string;
}

const InfoComp: React.FC<InfoCompProps> = ({ title, text, className = '' }) => {
  return (
    <div
      className={`${className} max-w-[700px] h-full bg-secondary rounded-[15px] text-white p-[24px] flex items-start space-x-[24px]`}
    >
      <img src="/information_icon.svg" />
      <div>
        <div className="font-semibold text-[32px] leading-[120%] tracking-[-0.02em]">
          {title}
        </div>
        <div className="mt-[8px] text-[20px] leading-[140%]">{text}</div>
      </div>
    </div>
  );
};

export default InfoComp;
