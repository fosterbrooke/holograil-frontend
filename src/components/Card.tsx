import React from 'react';

interface CardProps {
  title: string;
  content: string[];
  className?: string;
  shadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = '',
  shadow = false,
}) => {
  return (
    <div className="w-[634px]">
      <div
        className={`flex flex-col space-y-[18px] transition-shadow duration-300 ${shadow ? 'shadow-custom-card' : ''} py-[20px] px-[72px] ${className}`}
      >
        <div className="font-semibold text-secondary text-[28px] tracking-[0.05em]">
          {title}
        </div>
        {/* <div className="text-[20px] leading-[174%] tracking-[0.02em]" dangerouslySetInnerHTML={{ __html: content }} /> */}
        <div className="text-[20px] leading-[174%] tracking-[0.02em]">
          {content.map((line, lineIndex) =>
            line === '' ? (
              <br key={lineIndex} /> // Render a line break for empty strings
            ) : (
              <p key={lineIndex}>{line}</p> // Render a paragraph for non-empty lines
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
