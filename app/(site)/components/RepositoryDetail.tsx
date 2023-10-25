import { getLanguageColor } from '@/app/lib/config'
import { Repository, getBestRanking } from '@/app/lib/repository'
import React from 'react'
import uEmojiParser from 'universal-emoji-parser'
import TrendingLineChart from './TrendingLineChart'
import Badge from '@/app/components/badge/Badge'
import EmbedBadgeBtn from '@/app/components/badge/EmbedBadgeBtn'
import VisitGithubLink from '@/app/components/trending/VisitGithubLink'

interface Props {
  repository: Repository
}

const RepositoryDetail = ({ repository }: Props) => {
  const languageColor = getLanguageColor(repository.language)

  const bestRanking = getBestRanking(repository)

  return (
    <>
      <div className="flex items-center text-blue-400 text-lg justify-between mb-1">
        <div>{repository.full_name}</div>

        {repository.language !== '' && (
          <div className="text-gray-500 flex items-center text-xs md:text-sm">
            <span
              className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-1 shrink-0"
              style={{
                backgroundColor: languageColor,
              }}
            ></span>
            {repository.language}
          </div>
        )}
      </div>

      <div className="mb-4">
        <div className="mb-2">
          <Badge type="Repository" rank={bestRanking} />
        </div>

        <div className="text-xs mb-2 flex items-center font-medium text-yellow-700 space-x-4">
          <div className="flex items-center">
            <VisitGithubLink uri={repository.full_name} />
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            <EmbedBadgeBtn
              id={repository.repository_id}
              fullName={repository.full_name}
            />
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        {uEmojiParser.parseToUnicode(repository.description)}
      </div>

      <div className="mt-4 overflow-auto">
        <TrendingLineChart trendings={repository.trendings} />
      </div>
    </>
  )
}

export default RepositoryDetail
