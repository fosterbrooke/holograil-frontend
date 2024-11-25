import React from 'react';

interface ResourceCardCompProps {
  title: string;
  content: string;
  options?: string[];
  className?: string;
}

const ResourceCardComp: React.FC<ResourceCardCompProps> = ({
  title,
  content,
  options = [],
  className = '',
}) => {
  return (
    <div
      className={`px-[26px] h-full rounded-[10px] text-white bg-primary ${className} max-w-[322px] pt-[29px] py-[25px] flex-grow flex-shrink-1`}
    >
      <div className="font-bold text-[20px]">{title}</div>
      <div className="text-[14px] mt-[11px]">{content}</div>
      <ul className="list-disc list-inside text-[14px] mt-[20x]">
        {options.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceCardComp;
