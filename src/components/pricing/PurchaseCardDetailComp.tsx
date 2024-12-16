import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '../RoundButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import handlePurchase from '../../utils/stripe';

interface PurchaseCardDetailCompProps {
  title: string;
  content: string[];
  price: number;
  focusIndex?: number;
  period: string;
  bgColor?: string;
  className?: string;
  isFocus?: boolean;
  subTitle?: string;
  planId: string;
}

const PurchaseCardDetailComp: React.FC<PurchaseCardDetailCompProps> = ({
  title,
  content,
  price,
  period,
  bgColor = 'bg-[#37A3FF]',
  className = '',
  isFocus = false,
  subTitle = '',
  planId,
}) => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
  const formattedNumber = price.toLocaleString();

  const handleSignUp = async () => {
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
    <div className={`${className}`}>
      <div
        className={`sm:flex hidden text-center flex-col items-center shadow-custom-multiple rounded-[12px] h-full px-[20px] relative ${isFocus ? '2xl:max-w-[500px] lg:max-w-[450px] sm:max-w-[400px] max-w-auto 2xl:min-h-[733px] lg:min-h-[650px] min-h-[550px] space-y-[30px] border-[10px] border-custom-purple' : '2xl:max-w-[455px] lg:max-w-[405px] sm:max-w-[355px] max-w-auto 2xl:min-h-[631px] lg:min-h-[560px] min-h-[480px] space-y-[24px] border border-dark-gray'}`}
      >
        <div
          className={`${bgColor} w-[65%] rounded-[7px] ${isFocus ? '-translate-y-1/2 h-[40px]' : ' h-[23px]'}`}
        ></div>
        <div className="w-full text-dark-gray font-semibold 2xl:text-[30px] lg:text-[23px] text-[16px]">
          {title}
        </div>
        <div className="flex items-center space-x-[10px]">
          <div className="font-semibold 2xl:text-[60px] lg:text-[40px] text-[20px] text-primary">
            <span>$</span>
            {formattedNumber}
          </div>
          <div className="text-primary 2xl:text-[24px] lg:text-[19px] text-[15px]">
            USD
            <br />
            {period ? '/' + period : ''}
          </div>
        </div>
        <div className="text-dark-gray w-[90%] 2xl:text-[18px] lg:text-[14px] text-[10px] font-semibold text-center">
          {subTitle}
        </div>
        <hr className="w-[85%] border-primary" />
        <div className="flex flex-col h-full 2xl:max-w-[410px] lg:max-w-[380px] max-w-[350px]">
          <div className="text-left text-black 2xl:text-[20px] lg:text-[15px] text-[11px] leading-[100%] mx-[10px]">
            {content.map((item, index) => (
              <div key={index} className="flex space-x-[10px]">
                <img src="/pricing/Icon.svg" />
                <div className="my-[10px]">{item}</div>
              </div>
            ))}
          </div>
          <div className="absolute left-1/2 bottom-[39px] flex transform -translate-x-1/2">
            <RoundButton
              text="Sign Up"
              className="py-[10px] rounded-[7px] 2xl:scale-[100%] lg:scale-[80%] sm:scale-[50%] 2xl:hover:scale-[105%] lg:hover:scale-[85%] sm:hover:scale-[55%]"
              onClick={handleSignUp}
            />
          </div>
        </div>
      </div>

      <div
        className={`${bgColor} sm:hidden flex items-center justify-evenly rounded-[10px] text-white p-[28px] w-[328px]`}
      >
        <div className="">
          <div className="font-semibold text-[16px]">{title}</div>
          <div className="text-left text-[11px] leading-[16px] mt-[10px]">
            {content.map((item, index) => (
              <div key={index} className="flex" onClick={handleSignUp}>
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

export default PurchaseCardDetailComp;
