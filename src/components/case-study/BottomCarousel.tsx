import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

SwiperCore.use([Autoplay]);

const BottomCarousel: React.FC = () => {
  const images = [
    '/case-study/carousel/Rectangle 370.png',
    '/case-study/carousel/Rectangle 373.png',
    '/case-study/carousel/Rectangle 376.png',
    '/case-study/carousel/Rectangle 371.png',
    '/case-study/carousel/Rectangle 369.png',
    '/case-study/carousel/Rectangle 372.png',
    '/case-study/carousel/Rectangle 374.png',
    '/case-study/carousel/Rectangle 375.png',
  ];

  return (
    <div className="relative md:mb-0 mb-[123px]">
      {[0, 1].map((_time, index) => (
        <Swiper
          spaceBetween={28} // Space between images
          slidesPerView={4} // Automatically adjust number of slides per view
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: _time * 1000, disableOnInteraction: false }} // Adjust delay as needed
          className="2xl:h-[330px] xl:h-[200px] sm:h-[120px] h-[88px] md:mb-[60px] mb-[27px]"
          speed={2000}
          key={index}
          freeMode={true}
          resistance={false}
          centeredSlides={false}
        >
          {images.concat(images).map((image, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              {/* Set width to auto for each slide */}
              <img
                src={image}
                alt={`Row 1 Slide ${index}`}
                className="2xl:h-[330px] xl:h-[200px] sm:h-[120px] h-[88px] w-auto object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
};

export default BottomCarousel;
