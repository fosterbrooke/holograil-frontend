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
    <div className={`${className} flex relative mb-[270px] items-center`}>
      <img
        src="/accessories/Vector 2.svg"
        className=" w-[62%] max-w-[1192px] ml-[-14.35%]"
      />
      <div className="ml-[5.7%] mr-[11.7%]">{children}</div>
      <div className="m-[4.6%] w-[39%] max-w-[750px] h-auto max-h-[750px] bg-red bg-white rounded-[15px] absolute inset-0 shadow-custom-multiple flex items-end justify-center space-x-[43px]">
        {[1, 2, 3].map((item) => (
          <div
            className="bg-custom-gray mb-[51px] rounded-[18px] w-[130px] h-[130px]"
            key={item}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AccecssoriesDemoComp;
