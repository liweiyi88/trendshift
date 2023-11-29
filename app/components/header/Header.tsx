'use client'

import Link from 'next/link'
import Container from '../Container'
import { routes } from '../../lib/config'
import { usePathname } from 'next/navigation'
import Logo from '../logo/Logo'
import SearchButton from '../search/SearchButton'
import MobileNavButton from './MobileNavToggle'
import { useState } from 'react'
import Navbar, { NavItem } from './Navbar'
import MobileNavbar from './MobileNavbar'
import { motion } from 'framer-motion'

const MobileNavVariants = {
  open: { opacity: 1, x: 0, height: 'auto' },
  closed: { opacity: 0, height: 0 },
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const onMobileViewToggle = () => {
    setOpen(!open)
  }

  const navItems = [
    {
      text: 'Trending repositories',
      link: routes.trendingRepositories,
      active: path === routes.trendingRepositories,
    },
    {
      text: 'Trending developers',
      link: routes.trendingDevelopers,
      active: path === routes.trendingDevelopers,
    },
  ] as NavItem[]

  return (
    <>
      <nav className="bg-white">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center z-10">
              <div className="flex items-baseline space-x-4">
                <div className="font-semibold w-[160px]" aria-current="page">
                  <Logo />
                </div>
              </div>
            </div>

            <div className="flex flex-1 max-w-4xl z-10 items-center mx-2 md:mx-12 justify-end md:justify-normal">
              <SearchButton />
            </div>

            <motion.nav initial={false} animate={open ? 'open' : 'closed'}>
              <MobileNavButton toggle={onMobileViewToggle} />
            </motion.nav>

            {!path.startsWith(routes.adminRepository) && (
              <Link
                href={routes.adminRepository}
                className="hidden md:block z-0 px-4 py-2 bg-indigo-700 rounded text-white text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </Container>

        <div className="hidden md:block border-b border-gray-200 pb-4">
          <Container>
            <Navbar items={navItems} />
          </Container>
        </div>

        <motion.nav
          transition={{ ease: [0.3, 0.3, 0.3, 0.3], duration: 0.2 }}
          initial={false}
          animate={open ? 'open' : 'closed'}
          variants={MobileNavVariants}
        >
          <MobileNavbar items={navItems} onClick={onMobileViewToggle} />
        </motion.nav>
      </nav>
    </>
  )
}

export default Header
