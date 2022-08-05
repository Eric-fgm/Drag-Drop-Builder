import React from 'react'

const SolidHeadline: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M25.8333 20H14.1666M8.33331 31.6667H31.6666H8.33331ZM11.6666 25L14.1666 20L11.6666 25ZM28.3333 25L25.8333 20L28.3333 25ZM25.8333 20L20 8.33337L14.1666 20H25.8333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

export default SolidHeadline
