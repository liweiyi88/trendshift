import React from 'react'
import Container from '../components/Container'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

interface Props {
  modal: React.ReactNode
  children: React.ReactNode
}

const SiteLayout = ({ modal, children }: Props) => {
  return (
    <>
      <div className="border-b-gray-200 border-b md:border-none">
        <Header />
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
