import { PageProps } from '@/app/lib/pagetypes'
import React from 'react'
import { Metadata } from 'next'
import { getDeveloper } from '@/app/lib/developer'
import DeveloperDetail from '../../components/DeveloperDetail'

export const metadata: Metadata = {
  title: 'Trendshift - Trending Developer Details',
  description: 'Trending Developer details.',
  keywords: ['github', 'trending', 'developer'],
}

const Developer = async ({ params: { id } }: PageProps<{ id: number }>) => {
  const developer = await getDeveloper(id)

  return (
    <div className="max-w-4xl mx-auto">
      <DeveloperDetail developer={developer} />
    </div>
  )
}

export default Developer
