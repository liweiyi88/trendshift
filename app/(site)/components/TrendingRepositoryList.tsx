'use client'

import { Repository } from '@/app/lib/repository'
import React from 'react'
import TrendingRepositoryCard from './TrendingRepositoryCard'
import TrendingRepositoryFilters from './TrendingRepositoryFilters'
import { BackTop } from '@/app/components/BackTop'

interface Props {
  repositories: Repository[]
}

const TrendingRepositoryList = ({ repositories }: Props) => {
  return (
    <>
      <div className="block md:flex items-center text-base w-auto rounded mb-3">
        <div className="md:px-2 text-base font-medium mb-1 md:mb-0">
          Trending repositories
        </div>
        <div>
          <TrendingRepositoryFilters />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {repositories.map((repository) => (
          <TrendingRepositoryCard
            key={repository.repository_id}
            repository={repository}
          />
        ))}
      </div>
      <BackTop />
    </>
  )
}

export default TrendingRepositoryList
