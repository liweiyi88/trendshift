import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // has to import the css to resolve the large icon when first load.
import Header from '@/app/components/Header'
import type { Metadata } from 'next'
import Container from './components/Container'

export const metadata: Metadata = {
  title: 'Github Trending Insight',
  description: 'Analyse Github trending repositories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container className="bg-gray-50/40 pt-24 min-h-screen">
        {children}
      </Container>
    </>
  )
}
