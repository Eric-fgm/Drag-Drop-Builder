import React from 'react'

const SolidDrag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        fill="currentColor"
        fillRule="evenodd"
        d="M22 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm8-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
        clipRule="evenodd"
      />
    </svg>
  )

export default SolidDrag
