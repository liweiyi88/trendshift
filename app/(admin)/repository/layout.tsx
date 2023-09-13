import React from 'react'

interface Props {
  modal: React.ReactNode
  children: React.ReactNode
}

const RepositoryLayout = ({ modal, children }: Props) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default RepositoryLayout
