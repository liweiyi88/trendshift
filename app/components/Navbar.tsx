'use client'

import Link from 'next/link'
import React from 'react'
import { routes } from '../lib/config'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const Navbar = () => {
  const path = usePathname()

  return (
    <div className="flex space-x-6 border-t border-gray-200 pt-4 items-center">
      <Link
        href={routes.trendingRepositories}
        className={classNames(
          'px-4 py-2 rounded text-gray-700',
          path === routes.trendingRepositories ? 'bg-gray-100' : null,
        )}
      >
        Trending repositories
      </Link>
      <Link
        href={routes.trendingDevelopers}
        className={classNames(
          'px-4 py-2 rounded text-gray-700',
          path === routes.trendingDevelopers ? 'bg-gray-100' : null,
        )}
      >
        Trending developers
      </Link>
    </div>
  )
}

export default Navbar
