import React, { useState } from 'react';

interface CollapsibleFAQCompProps {
  question: string;
  answer: string;
}

const CollapsibleFAQComp: React.FC<CollapsibleFAQCompProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 px-[60px] py-[52px] bg-white rounded-[24px]">
      <div className="flex justify-between items-center cursor-pointer p-4" onClick={toggleCollapse}>
        <div className="font-bold text-[24px] text-dark">{question}</div>
        <div className="flex items-center justify-center">
          {isOpen ? (
            // Minus icon
            <div className="w-[30px] h-[6px] bg-dark rounded-[4px]"></div>
          ) : (
            // Plus icon
            <div className="flex items-center justify-center">
              <div className="w-[30px] h-[6px] bg-dark rounded-[4px]"></div>
              <div className="w-[6px] h-[30px] bg-dark absolute rounded-[4px]"></div>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-[14px] pb-0 pr-[44px]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default CollapsibleFAQComp;