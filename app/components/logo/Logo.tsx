import Link from 'next/link'
import React from 'react'
import logoIcon from './logo.svg'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={logoIcon} alt="Trendshift" />
    </Link>
  )
}

export default Logo
