import React from 'react';
import ResourceCardComp from './resources/ResourceCardComp';
import VideoPlayer from '../VideoPlayer';
import RoundButton from '../RoundButton';

const AccountResources: React.FC = () => {
  const resourceCardInfo = [
    {
      title: 'Windows based photo booth',
      content: 'The software requires a Windows operating system.',
      options: [],
    },
    {
      title: 'A Compatible Printer',
      content:
        'We use DNP printers. Here’s a list of compatible printers that works with our software: ',
      options: ['DNP DS-RX1HS', 'DNP DS620', 'DNP DP-QW410', 'DNP DS820 '],
    },
    {
      title: 'Choice of Photo Booth Software',
      content:
        'Photo booth software options that are compatible with our lenticular prints: ',
      options: ['Breeze', 'Touchpix', 'dslrBooth', 'Snappic'],
    },
  ];

  return (
    <div>
      <div className="sm:text-black text-primary font-semibold sm:text-[36px] text-[20px] mb-[23px] sm:mt-[50px]">
        Requirement
      </div>
      <div className="flex sm:flex-row flex-col items-center sm:space-x-[27px] space-y-[30px]">
        {resourceCardInfo.map((item, index) => (
          <ResourceCardComp
            title={item.title}
            content={item.content}
            options={item.options}
            key={index}
          />
        ))}
      </div>
      <div className="sm:text-black text-primary font-semibold sm:text-[36px] text-[20px] mb-[23px] mt-[50px]">
        Video Tutorial
      </div>
      <VideoPlayer videoUrl="https://www.youtube.com/embed/kS5mQJXCfPU" />
      <div className="sm:text-black text-primary font-semibold sm:text-[36px] text-[20px] mb-[23px] mt-[50px]">
        Additional Resources
      </div>
      <div className="flex sm:flex-row flex-col items-center sm:space-x-[42px] space-y-[20px] text-white font-bold text-[20px]">
        <RoundButton className="p-[22px] rounded-[10px] bg-primary flex justify-center items-center max-w-[389px] w-full space-x-[17px]">
          <a
            className="flex items-center space-x-[17px]"
            href={`${import.meta.env.VITE_APP_BACKEND_URL}/subscriptions/download-guidebook`}
          >
            <img src="/accounts/resources/book.png" />
            <span>Download PDF Guidebook</span>
          </a>
        </RoundButton>
        <RoundButton className="p-[22px] rounded-[10px] bg-primary flex justify-center items-center max-w-[389px] w-full space-x-[17px]">
          <a
            className="flex items-center space-x-[17px]"
            href={`${import.meta.env.VITE_APP_BACKEND_URL}/subscriptions/download-app`}
          >
            <img src="/accounts/resources/download.png" />
            <span>Download the App here</span>
          </a>
        </RoundButton>
      </div>
    </div>
  );
};

export default AccountResources;
