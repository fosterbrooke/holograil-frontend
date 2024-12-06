import React, { useState } from 'react';

const CVVInput: React.FC = () => {
  const [cvv, setCVV] = useState<string>('');
  // const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    let formattedValue = '';

    if (value.length > 0) {
      formattedValue += value.substring(0, 3); // MM
    }

    setCVV(formattedValue);
  };

  return (
    <div className="relative">
      <label htmlFor="expiry-date"></label>
      <input
        type="text"
        id="expiry-date"
        value={cvv}
        onChange={handleChange}
        className={`mx-[9px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 flex-grow flex-shrink-0 w-[70px] text-center`}
        placeholder="CVV"
        pattern="\d{3}" // Regex pattern for MM/YY format
        maxLength={3} // Limit input length to 3 characters (MM/YY)
        required
      />
      {/* {error && (
        <p className="absolute right-0 w-[200px] text-xs text-red-500">
          {error}
        </p>
      )}{' '} */}
      {/* Error message */}
    </div>
  );
};

export default CVVInput;
