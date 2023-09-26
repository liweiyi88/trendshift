import { cookies } from 'next/headers'
import Login from '../login/page'
import { config } from '../lib/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Github Trending Insight | Login',
  description: 'Login',
}

interface Props {
  children: React.ReactNode
}

const authenticated = async () => {
  const cookieStore = cookies()

  return !!cookieStore.get(config.jwtCookie)
}

const Layout = async ({ children }: Props) => {
  const isAuthenticated = await authenticated()

  if (!isAuthenticated) {
    return <Login />
  }

  return <>{children}</>
}

export default Layout
