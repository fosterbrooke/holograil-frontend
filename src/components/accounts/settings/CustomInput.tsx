import React from 'react';

interface CustomInputProps {
  type: 'text' | 'email' | 'password'; // Specify the types of inputs
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string; // Optional className for additional styling
  readonly?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className = '',
  readonly = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`rounded-[5px] max-w-[338px] w-full bg-white text-black font-bold sm:text-[18px] text-[12px] py-[9px] pl-[17px] ${className}`} // Basic styling
      readOnly={readonly}
    />
  );
};

export default CustomInput;
