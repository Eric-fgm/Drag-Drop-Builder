import React from 'react'

const SolidGrid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_6_245)">
        <path
          d="M0 0H3.91425V3.91425H0V0ZM7.0425 0H10.9567V3.91425H7.0425V0ZM13.4985 0H17.4127V3.91425H13.4985V0ZM0 7.0425H3.91425V10.9567H0V7.0425ZM7.0425 7.0425H10.9567V10.9567H7.0425V7.0425ZM13.4985 7.0425H17.4127V10.9567H13.4985V7.0425ZM0 14.0858H3.91425V18H0V14.0858ZM7.0425 14.0858H10.9567V18H7.0425V14.0858ZM13.4985 14.0858H17.4127V18H13.4985V14.0858Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_245">
          <rect width="17.25" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )

export default React.memo(SolidGrid)
