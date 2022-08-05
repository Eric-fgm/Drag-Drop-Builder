import React from 'react'

const SolidVideo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      width="48"
      height="40"
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="3"
        y="3"
        width="42"
        height="34"
        rx="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 24.2104V15.7896C20 15.0072 20.8578 14.5279 21.5241 14.9379L28.3661 19.1483C29.0006 19.5388 29.0006 20.4612 28.3661 20.8517L21.5241 25.0621C20.8578 25.4721 20 24.9928 20 24.2104Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )

export default SolidVideo
