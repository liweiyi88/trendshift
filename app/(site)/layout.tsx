import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'

interface Props {
  modal: React.ReactNode
  children: React.ReactNode
}

const SiteLayout = ({ modal, children }: Props) => {
  return (
    <>
      <Header />
      {modal}
      <Container className="bg-gray-50/40 pt-24 min-h-screen">
        {children}
      </Container>
    </>
  )
}

export default SiteLayout
