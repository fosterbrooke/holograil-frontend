import React, { useState } from 'react';

interface CollapsibleFAQCompProps {
  question: string;
  answer: string;
}

const CollapsibleFAQComp: React.FC<CollapsibleFAQCompProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 2xl:px-[60px] lg:px-[36px] px-[20px] 2xl:py-[52px] lg:py-[33px] py-[17px] bg-white 2xl:rounded-[24px] lg:rounded-[16px] rounded-[10px]">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleCollapse}
      >
        <div className="font-bold 2xl:text-[24px] lg:text-[15px] text-[9px] text-dark">
          {question}
        </div>
        <div className="flex items-center justify-center 2xl:w-[30px] lg:w-[16px] w-[8px] 2xl:h-[30px] lg:h-[16px]  h-[8px]">
          {isOpen ? (
            // Minus icon
            <div className="2xl:w-[30px] lg:w-[16px] w-[8px] 2xl:h-[6px] lg:h-[4px]  h-[2px] bg-dark rounded-[4px]"></div>
          ) : (
            // Plus icon
            <div className="flex items-center justify-center">
              <div className="2xl:w-[30px] lg:w-[16px] w-[8px] 2xl:h-[6px] lg:h-[4px]  h-[2px] bg-dark rounded-[4px]"></div>
              <div className="2xl:h-[30px] lg:h-[16px] h-[8px] 2xl:w-[6px] lg:w-[4px]  w-[2px] bg-dark absolute rounded-[4px]"></div>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="2xl:text-[20px] lg:text-[12px] text-[7px] p-[14px] pt-0 pb-0 pr-[44px]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default CollapsibleFAQComp;
