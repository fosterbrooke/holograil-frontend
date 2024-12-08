import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RoundButton from '../RoundButton';
import { RootState } from '../../redux/store';
import handlePurchase from '../../utils/stripe';

interface OneTimeSetupCompProps {
  title: string;
  price: number;
  className?: string;
  placeholder: string;
  subTitle: string[];
  content: string[];
  planId: string;
}

const OneTimeSetupComp: React.FC<OneTimeSetupCompProps> = ({
  title,
  price,
  placeholder,
  subTitle,
  content,
  className = '',
  planId,
}) => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  const handleSignUp = async () => {
    if (user) {
      await handlePurchase(user.email, planId);
    }
    else {
      navigate("/signup");
    }
  }

  return (
    <div>
      <div
        className={`flex lg:flex-row flex-col w-full justify-space relative ${className}`}
      >
        <div
          className="lg:block hidden lg:w-1/2 lg:max-w-[630px] lg:rounded-b-[350px] lg:pt-[48.5%] pt-[41.7%] h-0 lg:bg-contain bg-cover w-full shadow-custom-card bg-center relative z-10"
          style={{ backgroundImage: 'url(/main_slide1.png)' }}
        ></div>
        <img
          className="absolute inset-0 z-0 bg-transparent w-[64%] max-w-[1241px]"
          src="/pricing/Vector 2.svg"
          alt="image1"
        />
        <div className="flex flex-col w-full mt-[20%]">
          <div className="flex items-center sm:justify-center justify-end w-full flex-col-reverse">
            <div className="lg:absolute static left-0 bottom-0 w-full flex lg:justify-normal justify-center lg:mt-0 sm:mt-[40px] mt-[20px]">
              <div className="lg:shadow-none shadow-custom-card 2xl:ml-[71px] lg:ml-[51px] sm:ml-0 ml-[32px] lg:w-[30.8%] sm:w-[60%] w-[70%] h-full lg:bg-secondary bg-primary rounded-[15px] text-white p-[24px] flex items-start sm:space-x-[24px] space-x-[9px]">
                <img
                  src="/information_icon.png"
                  className="md:w-[32px] w-[20px]"
                />
                <div className="flex-grow flex-shrink-1">
                  <div className="font-semibold 2xl:text-[24px] lg:text-[20px] text-[16px] leading-[120%] tracking-[-0.02em]">
                    Plan Extension
                  </div>
                  <div className="mt-[8px] 2xl:text-[16px] lg:text-[13px] text-[10px] leading-[120%]">
                    If you’re loving the experience, you can extend your
                    subscription for another 9 months at a special rate of just
                    $600 USD. It’s our way of saying thanks for sticking with
                    us!
                  </div>
                  <button className="lg:block hidden shadow-custom-testimonial mt-[16px] rounded-[8px] border-[1px] border-dark-gray 2xl:text-[16px] lg:text-[13px] text-[10px] p-3 transform duration-200 hover:scale-105 px-[29px] text-white bg-primary">
                    Click Here
                  </button>
                </div>
              </div>
            </div>
            <div className="shadow-custom-card flex flex-col lg:w-[83%] sm:w-[60%] w-[70%] rounded-[15px] items-center 2xl:px-[135px] lg:px-[75px] px-[33px] 2xl:py-[90px] lg:py-[50px] py-[23px] sm:ml-0 ml-[32px] h-[110%]">
              <div className="font-semibold 2xl:text-[64px] lg:text-[46px] text-[16px] text-secondary">
                {title}
              </div>
              <div className="flex mt-[37px] items-end">
                <div className="text-secondary 2xl:text-[64px] lg:text-[46px] text-[16px] leading-[110%]">
                  <span>$</span>
                  {price.toLocaleString()}
                </div>
                <div className="text-secondary 2xl:text-[36px] lg:text-[28px] text-[12px]">
                  &nbsp;USD
                </div>
              </div>
              <div className="mt-[37px] 2xl:text-[20px] lg:text-[17px] text-[10px]">
                {placeholder}
                <br />
                <br />
                <ul className={`list-disc list-inside`}>
                  {content.map((text, index) => (
                    <li
                      key={index}
                      className="lg:ml-6 ml-5 lg:indent-[-20px] indent-[-14px]"
                    >
                      <span className="sm:inline hidden font-semibold text-secondary">
                        {subTitle[index]}:&nbsp;
                      </span>
                      <span>{text}</span>
                      <br />
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
              <RoundButton
                text="Get Started"
                className={`lg:block hidden rounded-[8px] 2xl:scale-[100%] lg:scale-[80%] sm:scale-[50%] 2xl:hover:scale-[105%] lg:hover:scale-[85%] sm:hover:scale-[55%] mt-[40px] mb-[24px]`}
                onClick={handleSignUp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTimeSetupComp;
