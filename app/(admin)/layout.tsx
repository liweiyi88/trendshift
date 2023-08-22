import { authenticated } from '../lib/auth'
import Login from '../login/page'

interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const isAuthenticated = await authenticated()

  if (!isAuthenticated) {
    return <Login />
  }

  return <>{children}</>
}

export default Layout
