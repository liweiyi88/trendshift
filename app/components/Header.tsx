'use client'

import Link from 'next/link'
import Container from './Container'
import { routes } from '../lib/config'
import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname()

  return (
    <nav className="bg-white">
      <Container className="border-b-gray-200 border-b">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-baseline space-x-4">
              <div
                className="border-r border-gray-300 pr-4 font-semibold"
                aria-current="page"
              >
                <Link href={'/'}>GitHub Trending Insight</Link>
              </div>
            </div>
          </div>
          {!path.startsWith(routes.repository) && (
            <div>
              <Link
                href={routes.repository}
                className="px-4 py-2 bg-black rounded text-white text-sm"
              >
                Admin Login
              </Link>
            </div>
          )}
        </div>
      </Container>
    </nav>
  )
}

export default Header
