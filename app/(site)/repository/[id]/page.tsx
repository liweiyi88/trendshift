import { PageProps } from '@/app/lib/pagetypes'
import { getRepository } from '@/app/lib/repository'
import React from 'react'
import RepositoryDetail from '../../components/RepositoryDetail'

const Repository = async ({ params: { id } }: PageProps<{ id: number }>) => {
  const repository = await getRepository(id)

  return (
    <div className="max-w-4xl mx-auto">
      <RepositoryDetail repository={repository} />
    </div>
  )
}

export default Repository
