import React from 'react';
import NumberShow2 from './NumberShow2';
import RoundButton from './RoundButton';

const WhyChooseSlide:React.FC = () => {
  const content = [
    {
      number: '01',
      title: 'Memorable Guest Experience',
      text: 'Our software elevates traditional photo booth experiences by offering immersive, 3D lenticular prints that guests can cherish long after the event. With each snapshot transformed into a dynamic keepsake, you’ll leave a lasting impression on your clients.',
      color: '#89CAFF',
    },
    {
      number: '02',
      title: 'Cutting Edge Innovation',
      text: 'State-of-the-art technology to produce breathtaking, multi-dimensional images that captivate and engage. By integrating advanced features, your events will exude a modern flair, making them stand out in today’s competitive market.',
      color: '#DB92D4',
    },
    {
      number: '03',
      title: 'Stand Out from Competitors',
      text: 'Set your business apart with our unique lenticular service, giving you a distinct advantage over other photo booth providers. Clients will be drawn to your offerings, seeking the extraordinary experience that only your photo booth can deliver.',
      color: '#FD9330',
    },
  ];
  return (
    <div className="flex mt-[134px] space-x-[66px]">
      <div className="w-1/3 ml-[135px]">
        <div className="font-semibold text-[57px] text-secondary ml-[39px]">
          Why Choose The Grail’s Lenticular Software?
        </div>
        <div className="flex flex-col space-y-[100px] mt-[240px]">
          {content.map((item) => (
            <div className="flex items-start space-x-[32px]" key={item.title}>
              <NumberShow2 numberStr={item.number} color={item.color} />
              <div className="flex flex-col space-y-[10px]">
                <div className="text-[30px] text-primary font-semibold">
                  {item.title}
                </div>
                <div className="text-[20px] pr-[30px]">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 flex flex-col">
        <div className="flex flex-col space-y-[28px]">
          <div className="text-[20px] w-[85%] leading-[174%] tracking-[0.05em]">
            You can transform your photo booth offerings with The Grail&apos;s
            cutting-edge lenticular software, designed to deliver stunning,
            dynamic prints that captivate your clients. Stand out from the
            competition with effortless integration, unparalleled clarity, and
            unmatched versatility.
          </div>
          <RoundButton text="Get Started" />
        </div>
        <div className="flex items-center justify-center h-full">
          <img src="/why_choose_slide1.png" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSlide;
