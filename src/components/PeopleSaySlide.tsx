import React from 'react';
import TestimonialSlide from './TestimonialSlide';
// import TestimonialSlider from './TestimonialSlider';

const PeopleSaySlide: React.FC = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:items-center items-start justify-center w-full my-[190px]">
      <div className="lg:w-2/5 w-full text-secondary font-bold sm:text-[57px] text-[20px] max-w-[500px] sm:ml-[100px] ml-[37px]">
        What People Say About Us.
      </div>
      {/* <TestimonialSlider className='h-[600px]' /> */}
      <TestimonialSlide
        content="“The Grail&#39;s lenticular photo booth software has completely transformed my business. My clients are always amazed by the interactive prints, and it&#39;s been a huge hit at every event. The software is so easy to use, and the results are nothing short of incredible!”"
        name="Mike Taylor"
        location="Lahore, Pakistan"
        avatar="/avatar1.png"
        className="md:ml-[155px] ml-[55px] mr-[50px] sm:mt-[100px] mt-[40px]"
      />
    </div>
  );
};

export default PeopleSaySlide;
