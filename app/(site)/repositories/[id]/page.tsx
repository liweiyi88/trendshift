import { PageProps } from '@/app/lib/pagetypes'
import { getRepository } from '@/app/lib/repository'
import React from 'react'
import RepositoryDetail from '../../components/RepositoryDetail'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trendshift - Trending Repository Details',
  description: 'Trending repository details.',
  keywords: ['github', 'trending', 'repository'],
}

const Repository = async ({ params: { id } }: PageProps<{ id: number }>) => {
  const repository = await getRepository(id)

  return (
    <div className="max-w-lg mx-auto">
      <RepositoryDetail repository={repository} />
    </div>
  )
}

export default Repository
