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
        <div className="w-[105px] h-[85.66px] rounded-[10px] bg-custom-gray2 flex items-center justify-center text-gray-700">
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
    <div className="max-w-[420px] w-full flex-grow flex-shrink-1 flex items-center justify-between p-2">
      <div className="relative flex items-center flex-shrink-0">
        {renderIcon()}
        <div className="absolute top-0 -translate-y-1/2 right-0 bg-[#404040] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-[15px]">
          {quantity}
        </div>
      </div>
      <div className="mx-[39px] flex flex-col items-start flex-grow flex-shrink-1 max-w-[174px] w-full">
        <span className="flex-grow font-bold text-[18px] text-black w-full truncate overflow-hidden whitespace-nowrap">
          {name}
        </span>
        <button
          onClick={onRemove}
          className="mt-[12px] text-[#404040] text-[15px] hover:text-black flex items-center"
        >
          <img src="/accounts/shipping/cross.svg" className="mr-[17px]" />
          Remove
        </button>
      </div>
      <div className="flex-grow flex-shrink-0 text-[20px] font-bold text-black">
        ${price}
      </div>
    </div>
  );
};

export default ProductItem;
