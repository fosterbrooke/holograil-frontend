import React, { ReactNode } from 'react';

// Placeholder icons for expand/collapse
const UpIcon = () => (
  <img src="/accounts/settings/up-icon.png" alt="Expand" className="w-4 h-4" />
);
const DownIcon = () => (
  <img
    src="/accounts/settings/down-icon.png"
    alt="Collapse"
    className="w-4 h-4"
  />
);

interface CollapsibleSectionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode; // Content to display when expanded
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div
        onClick={onToggle}
        className="cursor-pointer flex items-center justify-between"
      >
        <span className="font-bold text-black sm:text-[20px] text-[14px]">
          {title}
        </span>
        {isOpen ? <UpIcon /> : <DownIcon />}
      </div>
      <span className="mt-[8px] sm:text-[18px] text-[12px]">{content}</span>
      {isOpen && <div className="mt-[24px]">{children}</div>}
      <hr className="mt-[33px] mb-[29px]" />
    </div>
  );
};

export default CollapsibleSection;
