import RepositoryCard from '@/app/components/RepositoryCard'
import React from 'react'

const Repository = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <RepositoryCard />
      </div>
      <div>
        <RepositoryCard />
      </div>
      <div>
        <RepositoryCard />
      </div>
      <div>
        <RepositoryCard />
      </div>
      <div>
        <RepositoryCard />
      </div>
      <div>
        <RepositoryCard />
      </div>
    </div>
  )
}

export default Repository
