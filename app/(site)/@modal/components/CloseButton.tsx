'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const CloseButton = () => {
  const router = useRouter()
  return (
    <button
      className="text-gray-400 hover:text-gray-700"
      onClick={() => {
        router.back()
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="current"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

export default CloseButton
