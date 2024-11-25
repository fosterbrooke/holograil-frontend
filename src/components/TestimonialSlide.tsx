import React from 'react';

interface TestimonialSlideProps {
  avatar: string;
  content: string;
  name: string;
  location: string;
  className?: string;
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  avatar,
  content,
  name,
  location,
  className = '',
}) => {
  return (
    <div className={`relative ${className} shadow-custom-testimonial w-auto`}>
      <img
        src={avatar}
        className="-translate-x-1/2 -translate-y-1/2 absolute inset-0 sm:w-[84px] w-[40px]"
      />
      <div className="mx-[42px] my-[39px] flex flex-col space-y-[16px] max-w-[500px]">
        <div className="leading-[32px] sm:text-[16px] text-[9px] sm:leading-[32px] leading-[20px]">
          {content}
        </div>
        <div className="font-semibold sm:text-[18px] text-[10px]">{name}</div>
        <div className="sm:text-[18px] text-[10px]">{location}</div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
