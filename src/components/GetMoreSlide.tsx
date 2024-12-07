import React from 'react';
import NumberShow from './NumberShow';
import RoundButton from './RoundButton';

const GetMoreSlide: React.FC = () => {
  const active_users_number = 15890;
  const total_download_number = 1980;
  const customers_number = 600;

  const handleGetStartedButton = () => {
    const target = document.getElementById('chooseplanslide');
    const offsetX = 100;

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - offsetX,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="flex lg:flex-row flex-col w-full justify-space">
      <div
        className="lg:w-1/2 lg:max-w-[630px] lg:rounded-b-[350px] lg:pt-[48.5%] pt-[41.7%] h-0 lg:bg-contain bg-cover w-full shadow-custom-card bg-center relative z-10"
        style={{ backgroundImage: 'url(/main_slide1.png)' }}
      ></div>
      <img
        className="lg:block hidden absolute inset-0 z-0 bg-transparent w-[36%] max-w-[701px]"
        src="/get_more_slide2.svg"
        alt="image1"
      />
      <div className="flex flex-col items-center w-full sm:mt-[140px] mt-[38px] px-[46px]">
        <div className="lg:w-1/2 w-full sm:w-[585px] lg:w-[585px] w-full flex flex-col lg:items-normal items-center">
          <div className="text-primary lg:text-left sm:text-[64px] text-[37px] font-bold ">
            Get More Done with The Grail
          </div>
          <div className="sm:text-[20px] text-[12px] sm:mt-[35px] mt-[30px]">
            The Grail’s lenticular photo booth software is a cutting-edge
            solution that enables you to create 3D, dynamic lenticular prints
            seamlessly. It’s designed to elevate event experiences with unique
            visual effects and is easily integrated into your existing photo
            booth setup.
          </div>
          <div className="mt-[40px] flex w-full lg:justify-start justify-center space-x-[52px]">
            <RoundButton
              text="Get Started"
              className="rounded-[7px]"
              onClick={handleGetStartedButton}
            />
            <RoundButton
              text="Contact Us"
              isMain={false}
              className="rounded-[7px]"
            />
          </div>
          <div className="mt-[79px] flex w-full lg:justify-normal justify-center sm:space-x-[64px] space-x-[20px] py-[8.5px]">
            <NumberShow
              number={active_users_number}
              content="Active Users"
              color="#DB92D4"
            />
            <NumberShow
              number={total_download_number}
              content="Total Download"
              color="#89CAFF"
            />
            <NumberShow
              number={customers_number}
              content="Customers"
              isApproximate={true}
              color="#FD9330"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMoreSlide;
