import React from 'react'

const SolidSections: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <rect
        x="3"
        y="3"
        width="34"
        height="34"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="2"
        x2="14"
        y2="38"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="26"
        y1="2"
        x2="26"
        y2="38"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )

export default SolidSections
