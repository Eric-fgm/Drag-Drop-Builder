import React from 'react'

const SolidImagePlaceholder: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
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
      <path
        d="M33.5 37C33.5 37 20 19 15.5 19C11 19 3 28 3 28"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M37 28C37 28 30.5 19 28 19C25.5 19 21.5 22.5 21.5 22.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )

export default SolidImagePlaceholder
