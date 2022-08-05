import React from 'react'

const SolidPlus: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="16px"
      height="16px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
      />
    </svg>
  )

export default SolidPlus
