import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

interface CurrentPaymentMethodCompProps {
  paymentMethod: 'mastercard' | 'paypal';
  cardNumber?: string; // Only used if paymentMethod is mastercard
  expiryDate: Date;
  className?: string;
  onRemove: () => void;
}

const CurrentPaymentMethodComp: React.FC<CurrentPaymentMethodCompProps> = ({
  paymentMethod,
  cardNumber,
  expiryDate,
  className = '',
  onRemove,
}) => {
  // Format the expiry date to "Expires 04/2022"
  const formattedExpiry = `Expires ${expiryDate.toLocaleString('en-US', { month: '2-digit' })}/${expiryDate.getFullYear()}`;

  // Abbreviate card number to "**** **** **** 1234"
  const abbreviatedCardNumber = cardNumber
    ? `**** ${cardNumber.slice(-4)}`
    : '';

  return (
    <div className={`flex flex-col space-y-[20px] ${className}`}>
      <div className="flex items-center">
        <div className="flex items-center w-full space-x-[10px]">
          {/* Payment Method Icon */}
          {paymentMethod === 'mastercard' && (
            <img src="/accounts/settings/mastercard.png" alt="MasterCard" />
          )}
          {paymentMethod === 'paypal' && (
            <img src="/accounts/settings/mastercard.png" alt="PayPal" />
          )}

          {/* Card Number Display */}
          <div className="text-[16px]">{abbreviatedCardNumber}</div>
        </div>

        {/* Expiry Date Display */}
        <div className="flex max-w-[155px] w-full space-x-[15px] justify-end mr-[14px]">
          <div className="text-[14px] font-semibold">{formattedExpiry}</div>
          <button onClick={onRemove} className="text-custom-gray2">
            <FaTimes size={15} />
          </button>
        </div>
      </div>

      {/* Add Payment Method Button */}
      <button className="flex items-center font-semibold text-[14px] space-x-[10px]">
        <FaPlus className="" /> {/* Plus icon */}
        <div>Add Payment Method</div>
      </button>
    </div>
  );
};

export default CurrentPaymentMethodComp;
