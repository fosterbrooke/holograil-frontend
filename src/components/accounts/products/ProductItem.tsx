import React from 'react';

interface ProductProps {
  icon?: string; // Optional icon URL
  quantity: number; // Quantity of the product
  name: string; // Product name
  price: number;
  onRemove: () => void; // Function to call when removing the product
}

const ProductItem: React.FC<ProductProps> = ({
  icon,
  quantity,
  name,
  price,
  onRemove,
}) => {
  const renderIcon = () => {
    if (icon) {
      return <img src={icon} alt={name} className="w-12 h-12" />;
    } else {
      // Placeholder div when there is no icon
      return (
        <div className="sm:w-[105px] sm:h-[85.66px] w-full h-[50px] rounded-[10px] bg-custom-gray2 flex items-center justify-center text-gray-700 sm:text-[16px] text-[12px]">
          <span>No Icon</span>
        </div>
      );
    }
  };

  // Function to abbreviate the product name
  // const abbreviateName = (productName: string) => {
  //   return productName.length > 10 ? `${productName.slice(0, 10)}...` : productName;
  // };

  return (
    <div className="max-w-[420px] w-full grid grid-cols-4 flex-grow flex-shrink-1 flex items-center justify-between space-x-4 p-2">
      <div className="col-span-1 relative flex items-center">
        {renderIcon()}
        <div className="absolute top-0 -translate-y-1/2 right-0 bg-[#404040] text-white rounded-full sm:w-6 sm:h-6 w-4 h-4 flex items-center justify-center font-bold sm:text-[15px] text-[10px]">
          {quantity}
        </div>
      </div>
      <div className="col-span-2 mx-[39px] flex flex-col items-start">
        <span className="flex-grow font-bold sm:text-[18px] text-[12px] text-black w-full line-clamp-1">
          {name}
        </span>
        <button
          onClick={onRemove}
          className="mt-[12px] text-[#404040] sm:text-[15px] text-[12px] hover:text-black flex items-center sm:space-x-4 space-x-2"
        >
          <img
            src="/accounts/shipping/cross.svg"
            className="sm:scale-100 scale-50"
          />
          <span>Remove</span>
        </button>
      </div>
      <div className="col-span-1 text-right sm:text-[20px] text-[12px] font-bold text-black">
        ${price}
      </div>
    </div>
  );
};

export default ProductItem;
