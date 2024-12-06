import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '../RoundButton';

interface PurchaseCardCompProps {
  title: string;
  content: string[];
  price: number;
  period: string;
  bgColor?: string;
  className?: string;
}

const PurchaseCardComp: React.FC<PurchaseCardCompProps> = ({
  title,
  content,
  price,
  period,
  bgColor = 'bg-[#37A3FF]',
  className = '',
}) => {
  const navigate = useNavigate();
  const formattedNumber = price.toLocaleString();

  const handlePurchase = () => {
    navigate('/shipping');
  }
  return (
    <div className={`${className}`}>
      <div className="sm:flex hidden text-center flex-col items-center space-y-[30px] shadow-custom-multiple rounded-[12px] min-h-[700px] h-full max-w-[400px] px-[20px]">
        <div className={`${bgColor} h-[23px] w-[65%] rounded-[7px]`}></div>
        <div className="w-[180px] text-[#000022] font-semibold text-[30px]">
          {title}
        </div>
        <div className="flex items-center space-x-[10px]">
          <div className="font-semibold text-[40px] text-primary">
            <span>$</span>
            {formattedNumber}
          </div>
          <div className="text-primary text-[20px]">
            USD
            <br />
            {period ? '/' + period : ''}
          </div>
        </div>
        <hr className="w-[70%] border-primary" />
        <div className="flex flex-col h-full max-w-[310px]">
          <div className="text-left text-black text-[20px] leading-[100%] mx-[10px]">
            {content.map((item, index) => (
              <div key={index} className="flex space-x-[10px]">
                <img src="/pricing/Icon.svg" />
                <div className="my-[10px]">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-auto mb-[40px] bottom-[39px] flex justify-center">
            <RoundButton 
              text="Purchase" 
              className="py-[10px] rounded-[7px]" 
              onClick={handlePurchase}
            />
          </div>
        </div>
      </div>

      <div
        className={`${bgColor} sm:hidden flex items-center justify-evenly rounded-[10px] text-white p-[28px] mb-[37px] w-[328px]`}
      >
        <div className="">
          <div className="font-semibold text-[16px]">{title}</div>
          <div className="text-left text-[11px] leading-[16px] mt-[10px]">
            {content.map((item, index) => (
              <div key={index} className="flex">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="font-semibold text-[20px] ml-[20px]">
          ${formattedNumber}
          <span className="text-[15px]">
            {period === 'Year'
              ? '/year'
              : period === 'Month'
                ? '/mth'
                : period === ''
                  ? period
                  : '/' + period.toLocaleLowerCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCardComp;
