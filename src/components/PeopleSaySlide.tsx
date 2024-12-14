import React, { useState } from 'react';
import TestimonialSlide from './TestimonialSlide';
// import TestimonialSlider from './TestimonialSlider';

const PeopleSaySlide: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <div className="flex lg:flex-row flex-col lg:justify-center items-center lg:space-x-32 items-start justify-center w-full my-20 sm:px-20 px-8 sm:mb-48 mb-32">
      <div className="lg:w-1/2 w-full text-secondary font-bold lg:max-w-[500px]">
        <span className="sm:text-[57px] text-[20px]">
          What People Say <br />
          About Us.
        </span>
        <div className="hidden lg:flex space-x-4">
          {[1, 2, 3].map((item: number, index: number) => (
            <span
              key={index + item}
              className={`w-3 h-3 border-2 rounded-full cursor-pointer mt-24 ${index === slideIndex ? 'bg-primary' : 'bg-gray border-none'}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 lg:max-w-[500px] relative sm:mx-0 mx-6 sm:mt-[100px] mt-[40px] relative">
        <TestimonialSlide
          content="“The Grail&#39;s lenticular photo booth software has completely transformed my business. My clients are always amazed by the interactive prints, and it&#39;s been a huge hit at every event. The software is so easy to use, and the results are nothing short of incredible!”"
          name="Mike Taylor"
          location="Lahore, Pakistan"
          avatar="/avatar1.png"
          className="z-20 bg-white shadow-custom-testimonial"
        />

        <div className="absolute left-[30px] top-[50px] w-full">
          <TestimonialSlide
            content="“The Grail&#39;s lenticular photo booth software has completely transformed my business. My clients are always amazed by the interactive prints, and it&#39;s been a huge hit at every event. The software is so easy to use, and the results are nothing short of incredible!”"
            name="Mike Taylor"
            location="Lahore, Pakistan"
            className="bg-transparent border border-slate-100 border-1 rounded-md"
          />
        </div>
      </div>
      <div className="block lg:hidden flex space-x-4">
        {[1, 2, 3].map((item: number, index: number) => (
          <span
            key={index + item}
            className={`w-2 h-2 border-2 rounded-full cursor-pointer mt-24 ${index === slideIndex ? 'bg-primary' : 'bg-gray border-none'}`}
            onClick={() => setSlideIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PeopleSaySlide;
