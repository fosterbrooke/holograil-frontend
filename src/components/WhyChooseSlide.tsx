import React from 'react';
import NumberShow2 from './NumberShow2';
import RoundButton from './RoundButton';

const WhyChooseSlide: React.FC = () => {
  const handleGetStart = () => {
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
    <div className="mt-[134px] space-x-[66px]">
      <div className="lg:ml-[135px] mx-[46px]">
        <div className="flex lg:flex-row flex-col sm:space-x-[30px]">
          <div className="lg:w-1/3 w-full font-semibold sm:text-[57px] text-[32px] sm:leading-[120%] leading-[47px] text-secondary sm:ml-[39px] ml-0 mt-[25px]">
            Why Choose The Grail’s Lenticular Software?
          </div>
          <div className="lg:w-2/3 w-full flex flex-col ">
            <div className="sm:text-[20px] text-[12px] sm:leading-[174%] leading-[18px] lg:w-[85%] w-full tracking-[0.05em] mt-[30px]">
              You can transform your photo booth offerings with The Grail&apos;s
              cutting-edge lenticular software, designed to deliver stunning,
              dynamic prints that captivate your clients. Stand out from the
              competition with effortless integration, unparalleled clarity, and
              unmatched versatility.
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-col-reverse">
          <div className="flex lg:flex-row flex-col-reverse lg:mt-[240px] mt-[75px] items-center">
            <div className="flex flex-col space-y-[100px] lg:mt-0 mt-[79px]">
              {content.map((item) => (
                <div
                  className="flex items-start space-x-[32px] lg:w-[500px] w-full"
                  key={item.title}
                >
                  <NumberShow2 numberStr={item.number} color={item.color} />
                  <div className="flex flex-col space-y-[10px]">
                    <div className="sm:text-[30px] text-[16px] text-primary font-semibold">
                      {item.title}
                    </div>
                    <div className="sm:text-[20px] text-[12px] pr-[30px]">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <img
              src="/why_choose_slide1.png"
              className="lg:w-2/3 w-full flex items-center justify-center h-full overflow-hiddewn"
            />
          </div>
          <div className="xl:mt-[-28px] lg:mt-[-100px] mt-[55px] lg:ml-[195px] mr-0 flex lg:w-1/3 w-full justify-end">
            <RoundButton 
              text="Get Started" 
              className="rounded-[7px]" 
              onClick={handleGetStart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSlide;
