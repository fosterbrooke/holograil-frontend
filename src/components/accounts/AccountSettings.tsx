import React from 'react';
import ResourceCardComp from './resources/ResourceCardComp';
import VideoPlayer from '../VideoPlayer';

const AccountSettings: React.FC = () => {
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
      <div className="text-black font-semibold text-[36px] mb-[23px] mt-[50px]">
        Requirement
      </div>
      <div className="flex space-x-[27px]">
        {resourceCardInfo.map((item, index) => (
          <ResourceCardComp
            title={item.title}
            content={item.content}
            options={item.options}
            key={index}
          />
        ))}
      </div>
      <div className="text-black font-semibold text-[36px] mb-[23px] mt-[50px]">
        Video Tutorial
      </div>
      <VideoPlayer videoUrl="https://www.youtube.com/embed/kS5mQJXCfPU" />
      <div className="text-black font-semibold text-[36px] mb-[23px] mt-[50px]">
        Additional Resources
      </div>
      <div className="flex space-x-[42px] text-white font-bold text-[20px]">
        <div className="p-[22px] rounded-[10px] bg-primary flex items-center max-w-[389px] w-full space-x-[17px]">
          <img src="/accounts/resources/book.png" />
          <div>Download PDF Guidebook</div>
        </div>
        <div className="p-[22px] rounded-[10px] bg-primary flex items-center max-w-[389px] w-full space-x-[17px]" />
      </div>
    </div>
  );
};

export default AccountSettings;
