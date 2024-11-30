import React from 'react';
import CustomRing from './CustomRing';

interface NubmerShowProps {
  number: number;
  content: string;
  isApproximate?: boolean;
  color: string;
}

const NumberShow: React.FC<NubmerShowProps> = ({
  number,
  content,
  isApproximate = false,
  color,
}) => {
  const formattedNumber = number.toLocaleString();

  return (
    <div className="flex flex-col sm:space-y-[10px] space-y-[22px] items-center relative">
      <CustomRing
        diameter={39}
        arcBig={100}
        arcSmall={76.6}
        color={color}
        className="absolute z-0 pt-[14px]"
      />
      <span className="font-semibold text-black sm:text-[34px] text-[15px] z-10">
        {formattedNumber}
        {isApproximate && '+'}
      </span>
      <span className="text-center">{content}</span>
    </div>
  );
};

export default NumberShow;
