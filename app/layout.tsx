import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // has to import the css to resolve the large icon when first load.
import Header from '@/app/components/Header'
import Container from './components/Container'
import Script from 'next/script'

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
      <div>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
        </Script>
      </div>
      <Container className="bg-gray-50/40 pt-24 min-h-screen">
        {children}
      </Container>
    </>
  )
}
