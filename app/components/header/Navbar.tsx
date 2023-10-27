import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'

export interface NavItem {
  link: string
  text: string
  active: boolean
}

interface Props {
  items: NavItem[]
}

const Navbar = ({ items }: Props) => {
  return (
    <div className="flex space-x-6 border-t border-gray-200 pt-4 items-center">
      {items.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className={classNames(
              'px-4 py-2 rounded text-gray-700',
              item.active ? 'bg-gray-100' : null,
            )}
          >
            {item.text}
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar
