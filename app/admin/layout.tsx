import { cookies } from 'next/headers'
import Login from '../login/page'
import { config } from '../lib/config'
import { Metadata } from 'next'
import Header from '../components/Header'
import Container from '../components/Container'

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
    return (
      <>
        <Header />
        <Container className="bg-gray-50/40 pt-24 min-h-screen">
          <Login />
        </Container>
      </>
    )
  }

  return (
    <>
      <Header />
      <Container className="bg-gray-50/40 pt-24 min-h-screen">
        {children}
      </Container>
    </>
  )
}

export default Layout
