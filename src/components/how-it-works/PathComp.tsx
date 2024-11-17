import React from 'react';

interface PathCompProps {
  pathLength: number; // Length of the path between circles
  circleRadius: number; // Radius of the circles
  className?: string;
}

const PathComp: React.FC<PathCompProps> = ({
  pathLength,
  circleRadius,
  className = '',
}) => {
  const fixedCircleY = circleRadius; // Fixed Y position for Circle 1

  // Calculate Y positions for Circle 2 and Circle 3 based on path length
  const circleYPositions = [
    fixedCircleY, // Circle 1 at a fixed position
    fixedCircleY + pathLength, // Circle 2
    fixedCircleY + pathLength * 2, // Circle 3
  ];

  return (
    <svg
      width="200"
      height={circleYPositions[circleYPositions.length - 1] + circleRadius + 20}
      className={className}
    >
      {/* Circles with shadows */}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="rgba(0, 0, 0, 0.5)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Circle 1 */}
      <circle
        cx="100"
        cy={circleYPositions[0]}
        r={circleRadius}
        fill="rgba(255, 197, 111, 0.11)"
        filter="url(#shadow)"
      />
      <text
        x="100"
        y={circleYPositions[0] + 5}
        textAnchor="middle"
        fill="#F9A526"
        fontSize="20"
        fontWeight={600}
      >
        1
      </text>

      {/* Circle 2 */}
      <circle
        cx="100"
        cy={circleYPositions[1]}
        r={circleRadius}
        fill="rgba(17, 178, 111, 0.11)"
        filter="url(#shadow)"
      />
      <text
        x="100"
        y={circleYPositions[1] + 7}
        textAnchor="middle"
        fill="#FF39EB"
        fontSize="20"
        fontWeight={600}
      >
        2
      </text>

      {/* Circle 3 */}
      <circle
        cx="100"
        cy={circleYPositions[2]}
        r={circleRadius}
        fill="rgba(13, 195, 255, 0.11)"
        filter="url(#shadow)"
      />
      <text
        x="100"
        y={circleYPositions[2] + 7}
        textAnchor="middle"
        fill="#0DC3FF"
        fontSize="20"
        fontWeight={600}
      >
        3
      </text>

      {/* Paths */}
      <line
        x1="100"
        y1={circleYPositions[0] + circleRadius}
        x2="100"
        y2={circleYPositions[1] - circleRadius}
        stroke="#F9A526"
        strokeWidth={1.5}
        strokeDasharray="5,5"
      />
      <line
        x1="100"
        y1={circleYPositions[1] + circleRadius}
        x2="100"
        y2={circleYPositions[2] - circleRadius}
        stroke="#11B26F"
        strokeWidth={1.5}
        strokeDasharray="5,5"
      />
    </svg>
  );
};

export default PathComp;
