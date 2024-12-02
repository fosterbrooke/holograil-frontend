import React from 'react';

interface CustomInputProps {
  type: 'text' | 'email' | 'password'; // Specify the types of inputs
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string; // Optional className for additional styling
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`rounded-[5px] max-w-[338px] w-full bg-white text-black font-bold text-[18px] py-[9px] pl-[17px] ${className}`} // Basic styling
    />
  );
};

export default CustomInput;
