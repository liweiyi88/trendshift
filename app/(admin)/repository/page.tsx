import RepositoryList from '@/app/components/RepositoryList'
import { getRepositories } from '@/app/lib/repository'
import { getTags } from '@/app/lib/tag'
import React from 'react'

const RepositoryPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const filter = searchParams['q']

  const repositories = await getRepositories(
    filter && filter == 'all' ? 'all' : 'today',
  )
  const tags = await getTags()

  return <RepositoryList repositories={repositories} tags={tags} />
}

export default RepositoryPage
