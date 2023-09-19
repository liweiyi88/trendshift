import { getRepositories } from '@/app/lib/repository'
import { getTags } from '@/app/lib/tag'
import React from 'react'
import RepositoryList from './components/RepositoryList'
import { PageProps } from '@/app/lib/page'

const RepositoryPage = async ({ searchParams }: PageProps<null>) => {
  const filter = searchParams['q']

  const repositories = await getRepositories(
    filter && filter == 'all' ? 'all' : 'today',
  )
  const tags = await getTags()

  return <RepositoryList repositories={repositories} tags={tags} />
}

export default RepositoryPage
