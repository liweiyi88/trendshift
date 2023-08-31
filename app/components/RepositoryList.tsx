'use client'

import React from 'react'
import { Tag } from '../lib/tag'
import { Repository } from '../lib/repository'
import RepositoryCard from './RepositoryCard'
import { TagContextProvider } from './context/useTagContext'

interface Props {
  tags: Tag[]
  repositories: Repository[]
}

const RepositoryList = ({ tags, repositories }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <TagContextProvider tags={tags}>
        {repositories &&
          repositories.map((repository) => (
            <RepositoryCard
              key={repository.repository_id}
              repository={repository}
            />
          ))}
      </TagContextProvider>
    </div>
  )
}

export default RepositoryList
