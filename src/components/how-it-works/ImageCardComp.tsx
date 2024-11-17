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
      className={`relative h-[655px] ${bgColor} rounded-[26px] shadow-custom-image-card flex flex-col ${className}`}
    >
      <div className="flex-grow"></div>{' '}
      {/* This div takes up space to push the text down */}
      <div className="w-full px-[62px] py-[53px] text-primary font-bold text-[36px] rounded-b-[24px] bg-white">
        {text}
      </div>
    </div>
  );
};

export default ImageCardComp;
