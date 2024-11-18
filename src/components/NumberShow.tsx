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
    <div className="flex flex-col space-y-[10px] items-center">
      <CustomRing
        diameter={39}
        arcBig={100}
        arcSmall={76.6}
        color={color}
        className="absolute z-0 pt-4"
      />
      <span className="font-semibold text-black text-[34px] z-10">
        {formattedNumber}
        {isApproximate && '+'}
      </span>
      <span>{content}</span>
    </div>
  );
};

export default NumberShow;
