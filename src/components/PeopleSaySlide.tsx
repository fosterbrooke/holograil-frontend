import React, { useState } from 'react';
import TestimonialSlide from './TestimonialSlide';
// import TestimonialSlider from './TestimonialSlider';

const PeopleSaySlide: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <div className="flex lg:flex-row flex-col lg:items-center items-start justify-center w-full my-[190px]">
      <div className="lg:w-2/5 w-full text-secondary font-bold  max-w-[500px] sm:ml-[100px] ml-[37px]">
        <span className="sm:text-[57px] text-[20px]">What People Say About Us.</span>
        <div className="flex space-x-4">
          {[1, 2, 3].map((item: number, index: number) =>
            <span
              key={index}
              className={`w-3 h-3 border-2 rounded-full cursor-pointer mt-24 ${index === slideIndex ? 'bg-primary' : 'bg-gray border-none'}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          )}
        </div>
      </div>
      <div className="lg:w-3/5 w-full md:px-[100px] relative sm:mt-[100px] mt-[40px] relative">
        <TestimonialSlide
          content="“The Grail&#39;s lenticular photo booth software has completely transformed my business. My clients are always amazed by the interactive prints, and it&#39;s been a huge hit at every event. The software is so easy to use, and the results are nothing short of incredible!”"
          name="Mike Taylor"
          location="Lahore, Pakistan"
          avatar="/avatar1.png"
          className="left-0 top-0 z-20 bg-white shadow-custom-testimonial"
        />

        <TestimonialSlide
          content="“The Grail&#39;s lenticular photo booth software has completely transformed my business. My clients are always amazed by the interactive prints, and it&#39;s been a huge hit at every event. The software is so easy to use, and the results are nothing short of incredible!”"
          name="Mike Taylor"
          location="Lahore, Pakistan"
          avatar="/avatar1.png"
          className="absolute left-[50px] top-[50px] bg-transparent border border-slate-100 border-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default PeopleSaySlide;
