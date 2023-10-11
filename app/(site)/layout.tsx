import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Props {
  modal: React.ReactNode
  children: React.ReactNode
}

const SiteLayout = ({ modal, children }: Props) => {
  return (
    <>
      <Header />
      {modal}
      <Container className="bg-gray-50/40 pt-6 pb-24 min-h-screen">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default SiteLayout
