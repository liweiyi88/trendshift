import { cookies } from 'next/headers'
import Login from '../login/page'
import { config } from '../lib/config'

interface Props {
  children: React.ReactNode
}

export const authenticated = async () => {
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
