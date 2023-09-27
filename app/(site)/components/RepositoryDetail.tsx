import { getLanguageColor } from '@/app/lib/config'
import { Repository } from '@/app/lib/repository'
import Link from 'next/link'
import React from 'react'
import uEmojiParser from 'universal-emoji-parser'
import TrendingLineChart from './TrendingLineChart'

interface Props {
  repository: Repository
}

const RepositoryDetail = ({ repository }: Props) => {
  const languageColor = getLanguageColor(repository.language)

  const bestRanking = repository.trendings.sort((a, b) => {
    if (a.rank === b.rank) {
      return 0
    }

    return a.rank < b.rank ? -1 : 1
  })[0].rank

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

      <div className="text-xs mb-4 flex items-center text-yellow-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-[2px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
        <span className="font-semibold mr-2">Best ranking: #{bestRanking}</span>

        <Link
          className="underline hover:cursor-pointer"
          href={`https://github.com/${repository.full_name}`}
          target="_blank"
          scroll={true}
        >
          Visit GitHub
        </Link>
      </div>

      <div className="text-sm text-gray-500">
        {uEmojiParser.parseToUnicode(repository.description)}
      </div>

      <div className="my-4">
        <TrendingLineChart trendings={repository.trendings} />
      </div>
    </>
  )
}

export default RepositoryDetail
