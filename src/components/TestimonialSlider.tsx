import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Keyboard, EffectCards } from 'swiper/modules';

interface TestimonialSliderProps {
  id?: number;
  name?: string;
  avatar?: string;
  text?: string;
  className?: string;
}

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/path/to/avatar1.jpg',
    text: 'Their team is easy to work with and helped me make amazing websites in a short amount of time.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '/path/to/avatar2.jpg',
    text: 'We had a great experience working with their team. They delivered high-quality work on time.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    avatar: '/path/to/avatar3.jpg',
    text: 'Excellent service and great results. Highly recommend their team for any project.',
  },
];

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const scrollToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const scrollToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Keyboard, EffectCards]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        navigation
        pagination={{
          clickable: true,
        }}
        effect="cards"
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        cardsEffect={{
          perSlideOffset: 8,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true,
        }}
        className="mySwiper shadow-lg"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-300 ${activeIndex === index ? 'bg-white' : 'bg-transparent text-gray-500'}`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-center">{testimonial.text}</p>
              <span className="mt-2 font-semibold">{testimonial.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Up and Down Scroll Buttons */}
      <div className="absolute inset-0 z-10">
        <div className="">
          <button
            onClick={scrollToPrev}
            className="bg-gray-800 p-2 rounded-full"
          >
            ↑
          </button>
        </div>
        <div className="">
          <button
            onClick={scrollToNext}
            className="bg-gray-800 p-2 rounded-full"
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
