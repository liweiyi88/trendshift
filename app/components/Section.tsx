import React from 'react'

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <section className="mb-24">{children}</section>
}

export default Section
