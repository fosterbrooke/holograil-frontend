import React, { forwardRef } from 'react';

interface CardProps {
  title: string;
  content: string[];
  className?: string;
  shadow?: boolean;
}

export const CardTemp: React.FC = () => {
  return (<></>);
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, content, className = '', shadow = false }, ref) => {
    return (
      <div className="md:w-[634px] w-full flex" ref={ref}>
        <div
          className={`flex-grow flex-shrink-1 flex flex-col space-y-[18px] transition-shadow duration-300 ${shadow ? 'shadow-custom-card' : 'shadow-custom-testimonial'} py-[20px] px-[72px] ${className}`}
        >
          <div className="font-semibold text-secondary md:text-[28px] text-[11px] tracking-[0.05em]">
            {title}
          </div>
          {/* <div className="text-[20px] leading-[174%] tracking-[0.02em]" dangerouslySetInnerHTML={{ __html: content }} /> */}
          <div className="md:text-[20px] text-[10px] leading-[174%] tracking-[0.02em]">
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
  }
);

Card.displayName = 'CardComponent';

export default Card;
