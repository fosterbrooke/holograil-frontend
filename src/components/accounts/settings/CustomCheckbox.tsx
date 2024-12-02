import React from 'react';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  className?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className={`relative w-6 h-6 mr-[9px]`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="absolute opacity-0 cursor-pointer"
        />
        <div
          className={`rounded-[3px] ${checked ? 'bg-primary' : 'bg-white'} border-2 border-primary w-full h-full flex items-center justify-center`}
        >
          {checked && <span className="text-white">✔</span>}{' '}
          {/* Checkmark icon */}
        </div>
      </div>
      <span className="text-black">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
