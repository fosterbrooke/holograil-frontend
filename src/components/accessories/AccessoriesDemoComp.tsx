import React from 'react';

interface AccecssoriesDemoCompProps {
  className?: string;
  children?: React.ReactNode;
}

const AccecssoriesDemoComp: React.FC<AccecssoriesDemoCompProps> = ({
  className = '',
  children,
}) => {
  return (
    <div
      className={`${className} flex 2xl:mb-[270px] lg:mb-[180px] mb-[100px] md:items-center items-start relative md:flex-row flex-col`}
    >
      <img
        src="/accessories/Vector 2.svg"
        className="w-[70%] sm:w-1/2 scale-y-[70%] sm:scale-100 object-contain"
      />
      <div className="absolute inset-0 md:items-center items-start flex sm:w-1/2">
        <div className="bg-white shadow-custom-card rounded-[15px] sm:w-full 2xl:mr-[80px] aspect-square w-[60%] pb-[clamp(0px,40%,750px)] relative mx-[5%] md:mt-0 mt-[18%]">
          <div className="flex justify-evenly absolute bottom-0 w-full">
            {[1, 2, 3].map((item) => (
              <div
                className="bg-custom-gray lg:mb-[51px] sm:mb-[30px] mb-[10px] 2xl:rounded-[18px] lg:rounded-[11px] rounded-[5px] 2xl:max-w-[130px] lg:max-w-[90px] max-w-[50px] w-full aspect-square"
                key={item}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[80px] ml-[5.7%] mr-[11.7%]">{children}</div>
    </div>
  );
};

export default AccecssoriesDemoComp;
