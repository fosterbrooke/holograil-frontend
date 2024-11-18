import React from 'react';

const ResilienceReboundSlide: React.FC = () => {
  return (
    <div className="mt-[117px]">
      <div className="text-center flex flex-col items-center">
        <div className="font-semibold text-primary text-[64px] leading-[120%] tracking-[0.02em]">
          2020-2023
          <br />
          Resilience and Rebound
        </div>
        <div className="text-[20px] w-[54%] mt-[23px]">
          During the COVID-19 pandemic, The Holograil faced challenges like many
          in the events industry, but instead of slowing down, it focused on
          refining its offerings. Once live events returned, The Holograil came
          back stronger than ever, with over 1,000 events across Singapore and
          Jakarta by 2023. This period highlighted the company’s adaptability
          and reinforced its position as a top player in the market.
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 gap-[37px] mx-[84px] mt-[117px]">
        <div className="row-span-2 col-span-2 bg-gray rounded-[20px]"></div>
        <div className="bg-gray rounded-[20px] h-[411px]"></div>
        <div className="bg-gray rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default ResilienceReboundSlide;
