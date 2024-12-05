import React from 'react';

interface ImageCardCompProps {
  text: string;
  bgColor?: string;
  className?: string;
}

const ImageCardComp: React.FC<ImageCardCompProps> = ({
  text,
  bgColor = 'bg-secondary',
  className = '',
}) => {
  return (
    <div
      className={`relative xl:h-[655px] md:h-[400px] h-[254px] md:w-auto w-[235px] ${bgColor} rounded-[26px] shadow-custom-image-card flex flex-col ${className}`}
    >
      <div className="flex-grow"></div>
      {/* This div takes up space to push the text down */}
      <div className="w-full xl:px-[62px] md:px-[54px] px-[46px] xl:py-[53px] md:py-[35px] py-[19px] text-primary font-bold xl:text-[36px] md:text-[24px] text-[14px] rounded-b-[24px] bg-white text-center">
        {text}
      </div>
    </div>
  );
};

export default ImageCardComp;
