import React from 'react'

const SolidTextInput: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_6_83)">
        <rect
          x="3"
          y="3"
          width="74"
          height="34"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="23"
          y="-1"
          width="4"
          height="42"
          rx="2"
          fill="currentColor"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M15.2344 14.625V26H12.6953V14.625H15.2344ZM18.6953 14.625V16.6016H9.30469V14.625H18.6953Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_83">
          <rect width="80" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )

export default SolidTextInput
