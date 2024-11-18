import React from 'react';

const CaseMainSlide: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <img className="pt-[12px]" src="/case-study/Polygon 3.svg" />
        <div className="absolute top-[116px] right-0 flex flex-col items-end">
          <img className="" src="/case-study/IMG_4210 1.png" />
          <img className="mt-[323px]" src="/case-study/Group 337.png" />
        </div>
        <div className="absolute top-[1171px] left-[167px]">
          <img className="" src="/case-study/theholograil light logo 1.png" />
          <div className="text-white font-inter w-[900px] text-center text-[24px] leading-[174%] tracking-[0.02em]">
            The Holograil revolutionized Singapore’s photobooth industry with
            its innovative and affordable lenticular photo technology, enabling
            clients to enhance their event experiences without breaking the
            bank.
          </div>
        </div>
      </div>
      <div className="ml-[161px]">
        <div className="font-semibold text-[64px] max-w-[716px] text-primary leading-[120%] tracking-[0.02em]">
          2017-2018 Immediate Success
        </div>
        <div className="mt-[21px] text-dark-gray text-[20px] max-w-[1026px] leading-[174%] tracking-[0.02em]">
          The Holograil took off quickly, booking over 200 events in its first
          year. Its fresh, high-tech approach became an instant hit, carving out
          a strong presence in Singapore’s competitive events market.
        </div>
        <div className="mt-[127px] font-semibold text-[64px] max-w-[562px] text-primary leading-[120%] tracking-[0.02em]">
          2018-2019 Doubling Impact
        </div>
        <div className="mt-[21px] text-dark-gray text-[20px] max-w-[1026px] leading-[174%] tracking-[0.02em]">
          By its second year, The Holograil doubled its bookings, reaching over
          400 events. The lenticular photobooth became a must-have for weddings,
          corporate events, and more, solidifying its status as a market leader.
        </div>
      </div>
    </div>
  );
};

export default CaseMainSlide;
