import RepositoryCard from '@/app/components/RepositoryCard'
import { getRepositories, getTags } from '@/app/lib/repository'
import React from 'react'

const Repository = async () => {
  const repositories = await getRepositories()
  const tags = await getTags()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repositories &&
        repositories.map((repository) => (
          <RepositoryCard
            key={repository.repository_id}
            repository={repository}
            tags={tags}
          />
        ))}
    </div>
  )
}

export default Repository
