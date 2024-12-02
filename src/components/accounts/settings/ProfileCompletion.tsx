import React from 'react';

interface ProfileCompletionProps {
  completionPercentage: number;
}

const ProfileCompletion: React.FC<ProfileCompletionProps> = ({
  completionPercentage,
}) => {
  const radius = 52; // Radius of the circle
  const strokeWidth = 2; // Width of the stroke
  const normalizedRadius = radius - strokeWidth * 0.5; // Adjust radius for stroke width
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset =
    circumference - (completionPercentage / 100) * circumference; // Calculate offset based on percentage

  return (
    <div className="flex bg-primary rounded-[10px] px-[20px] pt-[22px] pb-[24px] text-white items-center space-x-[32px] w-full">
      <div className="flex-shrink-0 w-[104px] h-[104px] relative">
        <div className="text-[24px] font-semibold absolute w-full h-full flex items-center justify-center">
          {completionPercentage}%
        </div>
        <svg height="104" width="104">
          <circle
            stroke="transparent" // Background circle color
            fill="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx="52"
            cy="52"
          />
          <circle
            stroke="#FFF" // Progress circle color
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius - 1.5}
            cx="52"
            cy="52"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: -strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s ease-in-out',
            }}
          />
        </svg>
      </div>

      <div className="text-white flex-grow flex-shrink-1">
        <div className="font-bold text-[20px]">Profile Information</div>
        <div className="text-[14px] mt-[1px]">Complete your profile! </div>
        <button className="mt-[17px] px-[16px] py-[9px] rounded-[7px] bg-white text-primary text-[16px] font-bold">
          Complete Your Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCompletion;
