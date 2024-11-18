import Card from '../Card';
import PathComp from './PathComp';
import React, { useEffect, useRef, useState } from 'react';

// import { ReactComponent as DragClickIcon } from './assets/';

const SimplicitySlide: React.FC = () => {
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const [isCard3Visible, setIsCard3Visible] = useState(false);

  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

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
    <div className="font-poppins">
      <div className="relative">
        <img
          src="/how-it-works/blue_panel_r.png"
          className="w-[33em] absolute right-0 top-0"
        />
        <div className="flex flex-col space-y-[20px] w-[40%] ml-[240px]">
          <div className="font-semibold text-[64px] text-secondary leading-[120%] tracking-[0.02em]">
            Simplicity At Its Finest
          </div>
          <div className="text-[20px] leading-[174%] tracking-[0.02em]">
            Creating stunning lenticular prints has never been easier. Just
            follow these straightforward steps, and you&apos;ll be on your way
            to impressing your guests with mesmerizing, multi-dimensional
            images!
          </div>
        </div>
        <div className="flex flex-col mt-[98px]">
          <div className="flex flex-col space-y-[100px] justify-center items-center">
            <div className="flex items-start" ref={card1Ref}>
              <img
                className="shadow-custom-multiple max-w-[500px] max-h-[500px] mr-[134px]"
                src="/how-it-works/Rectangle 16.png"
                alt="Top Left"
              />
              <div className="relative">
                <Card
                  className="ml-[42px]"
                  title={content[0].title}
                  content={content[0].content}
                  shadow={isCard1Visible}
                />
                <PathComp
                  circleRadius={22}
                  pathLength={644}
                  className="absolute top-0 mt-[18px] ml-[-15%]"
                />
              </div>
            </div>

            <div className="flex items-center" ref={card2Ref}>
              <div className="relative">
                <Card
                  className="mr-[42px] text-right"
                  title={content[1].title}
                  content={content[1].content}
                  shadow={isCard2Visible}
                />
                <img
                  src="/how-it-works/drag_click.svg"
                  className="absolute top-[24px] right-[60px]"
                />
              </div>
              <img
                className="shadow-custom-multiple ml-[134px] max-w-[500px] max-h-[500px] mr-[134px]"
                src="/how-it-works/Rectangle 18.png"
                alt="Bottom Right"
              />
            </div>
            <div className="flex items-end" ref={card3Ref}>
              <img
                className="shadow-custom-multiple max-w-[500px] max-h-[500px] mr-[134px]"
                src="/how-it-works/Rectangle 122.png"
              />
              <div className="relative">
                <Card
                  className="ml-[42px]"
                  title={content[2].title}
                  content={content[2].content}
                  shadow={isCard3Visible}
                />
                <img
                  src="/how-it-works/content_copy.svg"
                  className="absolute top-[24px] left-[60px]"
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
