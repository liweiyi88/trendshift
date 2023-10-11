'use client'

import Link from 'next/link'
import Container from './Container'
import { routes } from '../lib/config'
import { usePathname } from 'next/navigation'
import Search from './search/Search'
import { useState } from 'react'
import Logo from './logo/Logo'

const Header = () => {
  const path = usePathname()

  const [showSearch, setShowSearch] = useState(false)

  return (
    <>
      <nav className="bg-white">
        <Container className="border-b-gray-200 border-b">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                <div className="pr-4 font-semibold" aria-current="page">
                  <Logo />
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setShowSearch(true)
              }}
              className="sm:bg-gray-50 px-0 py-0 sm:px-3 sm:py-2 rounded text-base text-gray-500 flex-1 ml-4 sm:ml-0 mx-2 max-w-4xl sm:border flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-0 sm:mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="hidden sm:block">Search...</span>
            </button>

            {!path.startsWith(routes.adminRepository) && (
              <div>
                <Link
                  href={routes.adminRepository}
                  className="px-4 py-2 bg-black rounded text-white text-sm"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </Container>

        {showSearch && (
          <Search
            onClose={() => {
              setShowSearch(false)
            }}
          />
        )}
      </nav>
    </>
  )
}

export default Header
