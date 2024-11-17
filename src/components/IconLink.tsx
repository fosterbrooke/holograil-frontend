import React from 'react';

interface IconLinkInterface {
  // iconClass: React.ReactNode;
  imgUrl: string;
  label: string;
  link?: string;
  className?: string;
}

const IconLink: React.FC<IconLinkInterface> = ({
  // iconClass,
  imgUrl,
  label,
  link = '_blank',
  className = '',
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-start items-center ${className}`}
    >
      {/* {iconClass} */}
      <img src={imgUrl} className="w-[40px] h-[40px]" />
      <span className="text-white ml-[17px] w-[240px]">{label}</span>
    </a>
  );
};

export default IconLink;
