import React from 'react';

const CaseMainSlide: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <div className='relative overflow-hidden'>
          <img className='sm:w-full w-[120%] max-w-none h-auto' src="/case-study/Polygon 3.svg" />
          <img className="absolute top-0 right-0 w-[90%]" src="/case-study/Group 2285.png" />
        </div>
        <div className="absolute sm:top-[57%] top-[48%] left-[8%]">
          <div className="text-white font-inter md:max-w-[46%] max-w-[70%] md:text-center text-start 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[12px] text-[] leading-[174%] tracking-[0.02em]">
            The Holograil revolutionized Singapore’s photobooth industry with
            its innovative and affordable lenticular photo technology, enabling
            clients to enhance their event experiences without breaking the
            bank.
          </div>
        </div>
      </div>
      <div className="relative">
        <div className='absolute top-0 w-full flex items-end justify-end'>
          <img className="md:mt-[-20%] mt-[-35%] w-[42%]" src="/case-study/Group 337.png" />
        </div>
        <div className='xl:mx-[161px] mx-[44px]'>
          <div className="font-semibold 2xl:text-[64px] lg:text-[40px] text-[24px] max-w-[716px] text-primary leading-[120%] tracking-[0.02em]">
            2017-2018<br />Immediate Success
          </div>
          <div className="mt-[21px] md:max-w-[65%] max-w-none text-dark-gray 2xl:text-[20px] lg:text-[16px] text-[12px] max-w-[1026px] leading-[174%] tracking-[0.02em]">
            The Holograil took off quickly, booking over 200 events in its first
            year. Its fresh, high-tech approach became an instant hit, carving out
            a strong presence in Singapore’s competitive events market.
          </div>
          <div className="md:mt-[127px] mt-[62px] font-semibold 2xl:text-[64px] lg:text-[40px] text-[24px] max-w-[716px] text-primary leading-[120%] tracking-[0.02em]">
            2018-2019
            <br />Doubling Impact
          </div>
          <div className="mt-[21px] md:max-w-[65%] max-w-none text-dark-gray 2xl:text-[20px] lg:text-[16px] text-[12px] max-w-[1026px] leading-[174%] tracking-[0.02em]">
            By its second year, The Holograil doubled its bookings, reaching over
            400 events. The lenticular photobooth became a must-have for weddings,
            corporate events, and more, solidifying its status as a market leader.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseMainSlide;
