import Card from '../Card';
import PathComp from './PathComp';
import React, { useEffect, useRef, useState } from 'react';

// import { ReactComponent as DragClickIcon } from './assets/';

const SimplicitySlide: React.FC = () => {
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const [isCard3Visible, setIsCard3Visible] = useState(false);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const content = [
    {
      title: 'Capture The Moment',
      content: [
        'Choose your favorite photo booth software and get ready to strike a pose!',
        '',
        'Capture your shot with your preferred photo booth software and let The Grail do the rest!',
        '',
      ],
      className: '',
    },
    {
      title: 'Drag And Drop Into Our Software',
      content: [
        "Now that you've taken your amazing photos, it’s time to work some magic! Drag and drop your images directly into our software—no technical skills required.",
        '',
        'Our drag-and-drop functionality makes the process seamless and incredibly fast.',
        '',
      ],
      className: 'text-right',
    },
    {
      title: 'Paste And Roll',
      content: [
        'Once your photo is ready, it’s time to make it shine!',
        '',
        'Simply paste your lenticular onto the printed image and after you’re happy with the placement, roll out your photocards.',
        '',
        'Your masterpiece is complete, and you’re ready to show it off!',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === card1Ref.current) setIsCard1Visible(true);
            if (entry.target === card2Ref.current) setIsCard2Visible(true);
            if (entry.target === card3Ref.current) setIsCard3Visible(true);
          } else {
            if (entry.target === card1Ref.current) setIsCard1Visible(false);
            if (entry.target === card2Ref.current) setIsCard2Visible(false);
            if (entry.target === card3Ref.current) setIsCard3Visible(false);
          }
        });
      },
      { threshold: 0.9 }
    ); // Trigger when 10% of the card is visible

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);

    return () => {
      if (card1Ref.current) observer.unobserve(card1Ref.current);
      if (card2Ref.current) observer.unobserve(card2Ref.current);
      if (card3Ref.current) observer.unobserve(card3Ref.current);
    };
  }, []);

  return (
    <div className="font-poppins 2xl:mt-0 mt-[70px] mb-[105px]">
      <div className="relative">
        <img
          src="/how-it-works/blue_panel_r.png"
          className="w-[33%] absolute right-0 top-0"
        />
        <div className="flex flex-col space-y-[20px] 2xl:w-[40%] md:w-[50%] w-full 2xl:ml-[240px] md:ml-[120px] ml-[53px] pt-[83px]">
          <div className="font-semibold text-[32px] lg:text-[48px] 2xl:text-[64px] text-secondary leading-[120%] tracking-[0.02em] md:mr-0 mr-[80px]">
            Simplicity At Its Finest
          </div>
          <div className="2xl:text-[20px] lg:text-[16px] text-[12px] leading-[174%] tracking-[0.02em] md:mr-0 mr-[80px]">
            Creating stunning lenticular prints has never been easier. Just
            follow these straightforward steps, and you&apos;ll be on your way
            to impressing your guests with mesmerizing, multi-dimensional
            images!
          </div>
        </div>
        <div className="flex flex-col md:mt-[98px] mt-[53px] xl:ml-0 lg:ml-[-100px] md:ml-[-180px] ml-0 relative items-center">
          <div className="flex flex-col md:space-y-[100px] space-y-0 2xl:items-center items-normal 2xl:scale-100 xl:scale-[80%] lg:scale-[70%] md:scale-[60%] scale-[100%]">
            <div className="flex items-center md:flex-row flex-col md:items-normal 2xl:mt-0 xl:mt-[-200px] lg:mt-[-300px] md:mt-[-450px] mt-0">
              <img
                className="shadow-custom-multiple max-w-[500px] max-h-[500px] md:w-full w-[50%] md:mr-[134px] mr-0"
                src="/how-it-works/Rectangle 16.png"
                alt="Top Left"
              />
              <div className="relative">
                <Card
                  className="md:ml-[42px] ml-[20px] md:mr-0 mr-[20px] md:mt-0 mt-[37px]"
                  title={content[0].title}
                  content={content[0].content}
                  shadow={isCard1Visible}
                  ref={card1Ref}
                />
                <PathComp
                  circleRadius={22}
                  pathLength={644}
                  className="absolute top-0 mt-[18px] ml-[-15%] md:block hidden"
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-full md:hidden block">
              <svg width="2" height="37">
                <line
                  x1="0" // Starting x position
                  y1="0" // Starting y position
                  x2="0" // Ending x position (same as x1 for vertical line)
                  y2="37" // Ending y position (length of the line)
                  stroke="#F9A526" // Color of the line
                  strokeWidth={1.5} // Width of the line
                  strokeDasharray="5,5" // Dashed line pattern
                />
              </svg>
            </div>
            <div className="flex md:flex-row flex-col-reverse items-center md:items-start">
              <div className="relative">
                <Card
                  className="md:mr-[42px] mr-[20px] md:text-right text-left md:ml-0 ml-[20px]"
                  title={content[1].title}
                  content={content[1].content}
                  shadow={isCard2Visible}
                  ref={card2Ref}
                />
                <img
                  src="/how-it-works/drag_click.svg"
                  className="absolute top-[24px] md:right-[60px] right-auto md:left-auto left-[50px] md:w-[48px] w-[20px]"
                />
              </div>
              <div className="flex justify-center items-center w-full md:hidden block">
                <svg width="2" height="37">
                  <line
                    x1="0" // Starting x position
                    y1="0" // Starting y position
                    x2="0" // Ending x position (same as x1 for vertical line)
                    y2="37" // Ending y position (length of the line)
                    stroke="#F9A526" // Color of the line
                    strokeWidth={1.5} // Width of the line
                    strokeDasharray="5,5" // Dashed line pattern
                  />
                </svg>
              </div>
              <img
                className="shadow-custom-multiple md:ml-[134px] ml-0 max-w-[500px] max-h-[500px] md:w-full w-[50%] md:mr-[134px] mr-0"
                src="/how-it-works/Rectangle 18.png"
                alt="Bottom Right"
              />
            </div>
            <div className="flex justify-center items-center w-full md:hidden block">
              <svg width="2" height="37">
                <line
                  x1="0" // Starting x position
                  y1="0" // Starting y position
                  x2="0" // Ending x position (same as x1 for vertical line)
                  y2="37" // Ending y position (length of the line)
                  stroke="#FF39EB" // Color of the line
                  strokeWidth={1.5} // Width of the line
                  strokeDasharray="5,5" // Dashed line pattern
                />
              </svg>
            </div>
            <div className="flex md:flex-row flex-col md:items-end items-center">
              <img
                className="shadow-custom-multiple max-w-[500px] max-h-[500px] md:w-full w-[50%] md:mr-[134px] mr-0"
                src="/how-it-works/Rectangle 122.png"
              />
              <div className="flex justify-center items-center w-full md:hidden block">
                <svg width="2" height="37">
                  <line
                    x1="0" // Starting x position
                    y1="0" // Starting y position
                    x2="0" // Ending x position (same as x1 for vertical line)
                    y2="37" // Ending y position (length of the line)
                    stroke="#FF39EB" // Color of the line
                    strokeWidth={1.5} // Width of the line
                    strokeDasharray="5,5" // Dashed line pattern
                  />
                </svg>
              </div>
              <div className="relative">
                <Card
                  className="md:ml-[42px] ml-[20px] md:mr-0 mr-[20px]"
                  title={content[2].title}
                  content={content[2].content}
                  shadow={isCard3Visible}
                  ref={card3Ref}
                />
                <img
                  src="/how-it-works/content_copy.svg"
                  className="absolute top-[24px] md:left-[60px] left-[50px] md:w-[48px] w-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplicitySlide;
