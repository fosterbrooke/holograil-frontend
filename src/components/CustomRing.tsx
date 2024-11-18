import React from 'react';

interface CustomRingProps {
  diameter: number;
  arcBig?: number;
  arcSmall?: number;
  color?: string;
  blurAmount?: number;
  className?: string;
}

const CustomRing: React.FC<CustomRingProps> = ({
  diameter,
  arcBig = 100,
  arcSmall = 76.6,
  color = '#add8e6', // Default light blue color in hex format
  blurAmount = 3,
  className = '',
}) => {
  const radius = diameter / 2;
  const bigRadius = (radius * arcBig) / 100;
  const smallRadius = (radius * arcSmall) / 100;

  // Calculate a limited strokeWidth to avoid distortions
  const strokeWidth = Math.min(bigRadius - smallRadius, bigRadius / 2);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={diameter}
        height={diameter}
        style={{ filter: `blur(${blurAmount}px)` }} // Apply blur using inline style
      >
        {/* Outer Circle */}
        <circle
          cx={radius}
          cy={radius}
          r={bigRadius - strokeWidth / 2} // Adjust the radius for the stroke width
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        {/* Inner Circle (to create the ring effect) */}
        <circle
          cx={radius}
          cy={radius}
          r={smallRadius}
          fill="white" // Fill with white to create a ring effect
        />
      </svg>
    </div>
  );
};

export default CustomRing;
