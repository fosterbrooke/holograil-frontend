import React from 'react';
import NumberShow from './NumberShow';
import RoundButton from './RoundButton';

const GetMoreSlide:React.FC = () => {
  const active_users_number = 15890;
  const total_download_number = 1980;
  const customers_number = 600;

  return (
    <div className="flex w-full h-screen">
      <div className="relative w-[39%] md:block hidden">
        <img
          className="bg-transparent w-full max-w-[701px]"
          src="/get_more_slide2.png"
          alt="image1"
        />
        <img
          className="absolute top-0 left-0 bg-transparent w-[90%] max-w-[630px]"
          src="/get_more_slide1.png"
        />
      </div>
      <div className="flex flex-col justify-center ml-[216px] mt-[100px]">
        <div className="text-primary w-[585px] text-[64px] font-bold">
          Get More Done with The Grail
        </div>
        <div className="mt-[35px] w-[500px] xl:w-[600px]">
          The Grail’s lenticular photo booth software is a cutting-edge solution
          that enables you to create 3D, dynamic lenticular prints seamlessly.
          It’s designed to elevate event experiences with unique visual effects
          and is easily integrated into your existing photo booth setup.
        </div>
        <div className="mt-[39px] flex space-x-[52px]">
          <RoundButton text="Get Started" />
          <RoundButton text="Contact Us" isMain={false} />
        </div>
        <div className="mt-[79px] flex space-x-[64px] py-[8.5px]">
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
  );
};

export default GetMoreSlide;
