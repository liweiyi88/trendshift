'use client'

import React from 'react'

interface Props {
  open: boolean
  onClick: () => void
}

const MobileNavToggle = ({ open, onClick }: Props) => {
  return (
    <>
      <div className="flex items-center md:hidden">
        <button
          onClick={onClick}
          type="button"
          className="text-sm relative inline-flex items-center justify-center border border-gray-300 rounded p-2 text-gray-500 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="absolute -inset-0.5"></span>
          <svg
            className={`h-4 w-4 ${!open ? 'block' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          <svg
            className={`h-4 w-4 ${open ? 'block' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </>
  )
}

export default MobileNavToggle
