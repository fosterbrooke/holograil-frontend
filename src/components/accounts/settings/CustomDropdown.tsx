import React, { useState } from 'react';

interface CustomDropdownProps {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  label?: string; // Optional label for the dropdown
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative bg-white rounded-[5px]">
      <div
        onClick={handleToggle}
        className="rounded pt-[8px] pb-[10px] pl-[12px] pr-[15px] flex justify-between items-center cursor-pointer mb-2"
      >
        <span className="sm:text-[18px] text-[10px] text-black">
          {selectedValue}
        </span>
        {isOpen ? (
          <img
            src="/accounts/settings/down-drop.svg"
            alt="Collapse"
            className="w-4 h-4 text-blue-500"
          />
        ) : (
          <img
            src="/accounts/settings/down-drop.svg"
            alt="Expand"
            className="w-4 h-4 text-blue-500"
          />
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-white rounded shadow-lg mt-1 w-full mb-[20px] sm:text-[16px] text-[10px]">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-white cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
