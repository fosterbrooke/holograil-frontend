import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'; // Importing icons from react-icons

interface QuantityInputCompProps {
  quantity: number;
  className?: string;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityInputComp: React.FC<QuantityInputCompProps> = ({
  quantity,
  className = '',
  setQuantity,
}) => {
  const handleDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 0)); // Decrease quantity but not below 1
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1); // Increase quantity
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setQuantity(value); // Update quantity if greater than 0
    }
  };

  return (
    <div
      className={`py-[10px] px-[20px] flex items-center ${className} w-full bg-white rounded-[10px] h-[50px]`}
    >
      <button
        onClick={handleDecrease}
        className="p-2 bg-gray-200 rounded-l-md hover:bg-gray-300 flex-grow flex-shrink-0 flex justify-center"
      >
        <FaMinus size={24} />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
        className="w-full text-[20px] text-center flex-grow flex-shrink-1"
      />
      <button
        onClick={handleIncrease}
        className="p-2 bg-gray-200 rounded-r-md hover:bg-gray-300 flex-grow flex-shrink-0 flex justify-center"
      >
        <FaPlus size={24} />
      </button>
    </div>
  );
};

export default QuantityInputComp;
