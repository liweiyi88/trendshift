'use client'

import React, { useState } from 'react'
import RepositoryCard from './RepositoryCard'
import RepositoryTab from './RepositoryTab'
import { useSearchParams } from 'next/navigation'
import { Repository } from '@/app/lib/repository'
import { Tag } from '@/app/lib/tag'
import { TagContextProvider } from '@/app/components/context/useTagContext'
import { BackTop } from '@/app/components/BackTop'
import Toggle from '@/app/components/Toggle'

interface Props {
  tags: Tag[]
  repositories: Repository[]
}

const RepositoryList = ({ tags, repositories }: Props) => {
  const [toggle, setToggle] = useState(true)

  const searchParams = useSearchParams()

  const filter = searchParams.get('q')

  const repos = toggle
    ? repositories.filter((repo) => {
        return repo.tags.length === 0
      })
    : repositories

  return (
    <>
      <div className="block md:flex items-center mb-6 md:space-x-2 border-b pb-4">
        <div className="mr-8 mb-4 md:mb-0">
          <RepositoryTab
            active={filter && filter === 'all' ? 'all' : 'today'}
          />
        </div>

        <Toggle
          enabled={toggle}
          text="Only show untagged"
          onToggle={() => {
            setToggle(!toggle)
          }}
        />
        <span className="text-sm text-gray-500 border-r pr-2 pl-2 md:pl-0">
          Only show untagged
        </span>
        <span className="text-sm text-gray-500 pl-2 md:pl-0">
          {repos.length} repositories
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <TagContextProvider tags={tags}>
          {repos &&
            repos.map((repository) => (
              <RepositoryCard
                key={repository.repository_id}
                repository={repository}
              />
            ))}
        </TagContextProvider>
      </div>
      <BackTop />
    </>
  )
}

export default RepositoryList
