'use client'

import React, { useState } from 'react'
import Search from './Search'

const SearchButton = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowSearch(true)
        }}
        className="flex relative justify-center md:justify-normal items-center bg-gray-50 border border-gray-300 md:w-full pl-2 pr-2 md:pr-12 py-2 rounded text-sm text-gray-500"
      >
        <span className="absolute -inset-0.5"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <span className="hidden md:block pl-0 md:pl-1">Search...</span>
      </button>
      {showSearch && (
        <Search
          onClose={() => {
            setShowSearch(false)
          }}
        />
      )}
    </>
  )
}

export default SearchButton
