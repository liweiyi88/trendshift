import React from 'react'
import { NavItem } from './Navbar'
import Link from 'next/link'
import classNames from 'classnames'
import { routes } from '@/app/lib/config'

interface Props {
  items: NavItem[]
  onClick: () => void
}

const MobileNavbar = ({ items, onClick }: Props) => {
  return (
    <div className="md:hidden" aria-label="Global" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {items.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              onClick={onClick}
              className={classNames(
                'px-3 py-2 rounded-md text-gray-700 block text-base font-medium hover:bg-gray-50',
                item.active ? 'bg-gray-100' : null,
              )}
            >
              {item.text}
            </Link>
          )
        })}
      </div>
      <Link
        href={routes.adminRepository}
        className="block mx-2 py-2 my-6 bg-indigo-700 rounded text-white text-sm text-center"
      >
        Login
      </Link>
    </div>
  )
}

export default MobileNavbar
