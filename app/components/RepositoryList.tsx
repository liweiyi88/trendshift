'use client'

import React, { useState } from 'react'
import { Tag } from '../lib/tag'
import { Repository } from '../lib/repository'
import RepositoryCard from './RepositoryCard'
import { TagContextProvider } from './context/useTagContext'
import { BackTop } from './BackTop'
import RepositoryTab from './RepositoryTab'
import Toggle from './Toggle'
import { useSearchParams } from 'next/navigation'
import AskAIModal from './AskAIModal'

interface Props {
  tags: Tag[]
  repositories: Repository[]
}

const RepositoryList = ({ tags, repositories }: Props) => {
  const [toggle, setToggle] = useState(true)

  const searchParams = useSearchParams()

  const filter = searchParams.get('q')
  const askAi = searchParams.get('ask-ai')

  console.log(askAi)

  const repos = toggle
    ? repositories.filter((repo) => {
        return repo.tags.length === 0
      })
    : repositories

  return (
    <>
      <div className="flex items-center mb-6 space-x-2 border-b pb-4">
        <div className="mr-8">
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
        <div className="text-sm text-gray-500 border-r pr-2">
          Only show untagged
        </div>
        <div className="text-sm text-gray-500">{repos.length} repositories</div>
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
      {askAi && (
        <AskAIModal tags={tags} id={123} fullName="liweiyi88/onedump" />
      )}
    </>
  )
}

export default RepositoryList
