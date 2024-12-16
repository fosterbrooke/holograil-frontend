import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import handlePurchase from '../../../utils/stripe';

interface PurchasePlansCompProps {
  title: string;
  price: number;
  period: string;
  content?: string;
  options?: string[];
  className?: string;
  planId: string;
}

const PurchasePlansComp: React.FC<PurchasePlansCompProps> = ({
  title,
  price,
  period,
  content = '',
  options = [],
  className = '',
  planId,
}) => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
  const formattedNumber = price.toLocaleString();

  const handlePurchaseCardClick = async () => {
    if (user) {
      await handlePurchase("subscription", {
        email: user.email,
        plan_id: planId,
      });
    } else {
      navigate('/signup');
    }
  };

  return (
    <div
      className={`cursor-pointer flex items-center space-x-[20px] bg-custom-white text-black group hover:bg-primary hover:text-white py-[35px] sm:px-[50px] px-[30px] rounded-[10px] duration-200 ${className}`}
      onClick={handlePurchaseCardClick}
    >
      <div className="flex-grow flex-shrink-1 max-w-[500px]">
        <div className="font-semibold sm:text-[36px] text-[18px]">{title}</div>
        <div className="sm:text-[24px] text-[14px] mt-[19px]">{content}</div>
        <ul className="list-disc list-inside sm:text-[24px] text-[14px]">
          {options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="sm:mt-[50px] mt-[20px] text-white bg-primary group-hover:text-primary group-hover:bg-white rounded-[10px] sm:py-[15px] px-[24px] py-[8px] shadow-custom-item font-bold sm:text-[16px] text-[12px]">
          Go {period}
        </button>
      </div>
      <div className="font-semibold sm:text-[70px] text-[24px] ml-[20px] max-w-[250px] flex-grow flex-shrink-0">
        ${formattedNumber}
      </div>
    </div>
  );
};

export default PurchasePlansComp;
