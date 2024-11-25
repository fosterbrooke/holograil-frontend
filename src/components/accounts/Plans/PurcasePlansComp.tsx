import React from 'react';

interface PurchaseCardCompProps {
  title: string;
  price: number;
  period: string;
  content?: string;
  options?: string[];
  className?: string;
}

const PurchasePlansComp: React.FC<PurchaseCardCompProps> = ({
  title,
  price,
  period,
  content = '',
  options = [],
  className = '',
}) => {
  const formattedNumber = price.toLocaleString();

  return (
    <div
      className={`cursor-pointer flex items-center bg-custom-white text-black group hover:bg-primary hover:text-white py-[35px] px-[50px] rounded-[10px] duration-200 ${className}`}
    >
      <div className="flex-grow flex-shrink-1 max-w-[500px]">
        <div className="font-semibold text-[36px]">{title}</div>
        <div className="text-[24px] mt-[19px]">{content}</div>
        <ul className="list-disc list-inside text-[24px]">
          {options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="mt-[50px] text-white bg-primary group-hover:text-primary group-hover:bg-white rounded-[10px] py-[15px] px-[24px] shadow-custom-item font-bold text-[16px]">
          Go {period}
        </button>
      </div>
      <div className="font-semibold text-[70px] ml-[20px] max-w-[250px] flex-grow flex-shrink-0">
        ${formattedNumber}
      </div>
    </div>
  );
};

export default PurchasePlansComp;
