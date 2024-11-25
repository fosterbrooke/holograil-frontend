import React from 'react';

interface NumberShow2Props {
  numberStr: string;
  color: string;
  diameter?: number; // Optional with default
  blurAmount?: number; // Optional with default
}

const NumberShow2: React.FC<NumberShow2Props> = ({
  numberStr,
  color,
  diameter = 42, // Default diameter
  blurAmount = 10, // Default blur amount
}) => {
  const radius = diameter / 2; // Calculate the radius from the diameter

  return (
    <div className="relative flex items-center justify-center lg:mt-[-14px] mt-0">
      {/* SVG Circle with blur effect */}
      <svg
        width={diameter}
        height={diameter}
        style={{ filter: `blur(${blurAmount}px)` }} // Apply blur using inline style
        className="absolute z-0 lg:mt-[-32px] mt-0 ml-[-8px]"
      >
        {/* Solid Circle */}
        <circle
          cx={radius}
          cy={radius}
          r={radius} // Radius equal to half of diameter for a full circle
          fill={color} // Fill with the specified color
        />
      </svg>

      {/* Number display */}
      <span className="font-semibold text-primary sm:text-[52px] text-[20px] z-10">
        {numberStr}
      </span>
    </div>
  );
};

export default NumberShow2;
