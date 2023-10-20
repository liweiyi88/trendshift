import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

interface Props {
  modal: React.ReactNode
  children: React.ReactNode
}

const SiteLayout = ({ modal, children }: Props) => {
  return (
    <>
      <div className="border-b-gray-200 border md:border-none">
        <Header />
      </div>
      <div className="hidden md:block border-b border-gray-200 pb-4">
        <Container>
          <Navbar />
        </Container>
      </div>
      {modal}
      <Container className="bg-gray-50/40 pt-6 pb-6 md:pb-24 min-h-screen">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default SiteLayout
