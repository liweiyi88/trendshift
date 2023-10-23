'use client'

import Link from 'next/link'
import Container from './Container'
import { routes } from '../lib/config'
import { usePathname } from 'next/navigation'
import Logo from './logo/Logo'
import SearchButton from './search/SearchButton'
import MobileNavButton from './MobileNav'
import { useState } from 'react'
import classNames from 'classnames'
import Navbar from './Navbar'

const Header = () => {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const onMobileViewToggle = () => {
    setOpen(!open)
  }

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

            <div className="flex flex-1 max-w-4xl z-20 items-center mx-2 md:mx-12 justify-end md:justify-normal">
              <SearchButton />
            </div>

            <MobileNavButton open={open} onClick={onMobileViewToggle} />

            {!path.startsWith(routes.adminRepository) && (
              <Link
                href={routes.adminRepository}
                className="hidden md:block z-10 px-4 py-2 bg-indigo-700 rounded text-white text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </Container>

        <div className="hidden md:block border-b border-gray-200 pb-4">
          <Container>
            <Navbar />
          </Container>
        </div>

        {open && (
          <div className="md:hidden" aria-label="Global" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                onClick={onMobileViewToggle}
                href={routes.trendingRepositories}
                className={classNames(
                  'px-3 py-2 rounded-md text-gray-700 block text-base font-medium hover:bg-gray-50',
                  path === routes.trendingRepositories ? 'bg-gray-100' : null,
                )}
              >
                Trending repositories
              </Link>
              <Link
                onClick={onMobileViewToggle}
                href={routes.trendingDevelopers}
                className={classNames(
                  'px-3 py-2 rounded-md text-gray-700 block text-base font-medium hover:bg-gray-50',
                  path === routes.trendingDevelopers ? 'bg-gray-100' : null,
                )}
              >
                Trending developers
              </Link>
            </div>
            <Link
              href={routes.adminRepository}
              className="block mx-2 py-2 my-6 bg-indigo-700 rounded text-white text-sm text-center"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header
