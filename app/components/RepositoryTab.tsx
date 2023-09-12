'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { routes } from '../lib/config'

type ActiveTab = 'today' | 'all'

interface Props {
  active: ActiveTab
}

const RepositoryTab = ({ active }: Props) => {
  const router = useRouter()

  return (
    <div className="flex">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          value={active}
          onChange={(event) => {
            event.target.value === 'all'
              ? router.push(`${routes.repository}?q=all`)
              : router.push(routes.repository)
          }}
          id="tabs"
          name="tabs"
          className="text-sm block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-2 border"
        >
          <option value="today">Today</option>
          <option value="all">All</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          <Link
            href={routes.repository}
            className="text-gray-900 rounded-l-lg group relative min-w-0 overflow-hidden bg-white py-2 px-8 text-center text-sm hover:bg-gray-50 focus:z-10"
          >
            <span>Today</span>
            <span
              aria-hidden="true"
              className={`${
                active === 'today' ? 'bg-blue-500' : 'bg-transparent'
              } absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </Link>

          <Link
            href={`${routes.repository}?q=all`}
            className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 overflow-hidden bg-white py-2 px-8 text-center text-sm hover:bg-gray-50 focus:z-10"
          >
            <span>All</span>
            <span
              className={`${
                active === 'all' ? 'bg-blue-500' : 'bg-transparent'
              } absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default RepositoryTab
