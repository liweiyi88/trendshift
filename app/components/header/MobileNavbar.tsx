import React from 'react'
import { NavItem } from './Navbar'
import Link from 'next/link'
import classNames from 'classnames'
import { routes } from '@/app/lib/config'
import { motion } from 'framer-motion'

interface Props {
  open: boolean
  items: NavItem[]
  onClick: () => void
}

const variants = {
  open: { display: 'block', opacity: 1, x: 0, height: 'auto' },
  closed: { opacity: 0, height: 0, transitionEnd: { display: 'none' } },
}

const MobileNavbar = ({ open, items, onClick }: Props) => {
  return (
    <motion.div
      className="flex flex-col"
      transition={{ ease: [0.3, 0.3, 0.3, 0.3], duration: 0.3 }}
      initial={false}
      animate={open ? 'open' : 'closed'}
      variants={variants}
    >
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
    </motion.div>
  )
}

export default MobileNavbar
