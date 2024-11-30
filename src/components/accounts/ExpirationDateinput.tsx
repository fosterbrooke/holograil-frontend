import React, { useState } from 'react';

const ExpirationDateInput: React.FC = () => {
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    console.log(value);
    let formattedValue = '';

    if (value.length > 0) {
      formattedValue += value.substring(0, 2); // MM
      if (value.length >= 3) {
        formattedValue += ' / ' + value.substring(2, 4); // /YY
      }
    }

    // Validate month and year
    const month = parseInt(formattedValue.substring(0, 2), 10);
    const year = parseInt(formattedValue.substring(5, 7), 10);

    const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year

    if (formattedValue.length === 7) {
      if (month < 1 || month > 12) {
        setError('Month must be between 01 and 12.');
      } else if (year < currentYear || year > 99) {
        setError('Year must be between ' + currentYear + ' and 99.');
      } else {
        setError(''); // Clear error if valid
      }
    }

    setExpiryDate(formattedValue);
  };

  return (
    <div className="relative">
      <label htmlFor="expiry-date"></label>
      <input
        type="text"
        id="expiry-date"
        value={expiryDate}
        onChange={handleChange}
        className={`mx-[9px] bg-transparent text-[24px] rounded-[10px] font-semibold p-2 flex-grow flex-shrink-0 w-[114px] ${error ? 'border-red-500' : ''}`}
        placeholder="MM / YY"
        pattern="\d{2}/\d{2}" // Regex pattern for MM/YY format
        maxLength={7} // Limit input length to 5 characters (MM/YY)
        required
      />
      {error && (
        <p className="absolute right-0 w-[200px] text-xs text-red-500">
          {error}
        </p>
      )}{' '}
      {/* Error message */}
    </div>
  );
};

export default ExpirationDateInput;
