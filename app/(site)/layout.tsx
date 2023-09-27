import React from 'react'

interface Props {
  modal: React.ReactNode
  children: React.ReactNode
}

const SiteLayout = ({ modal, children }: Props) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default SiteLayout
