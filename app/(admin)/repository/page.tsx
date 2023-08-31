import RepositoryList from '@/app/components/RepositoryList'
import { getRepositories } from '@/app/lib/repository'
import { getTags } from '@/app/lib/tag'
import React from 'react'

const RepositoryPage = async () => {
  const repositories = await getRepositories()
  const tags = await getTags()

  return <RepositoryList repositories={repositories} tags={tags} />
}

export default RepositoryPage
