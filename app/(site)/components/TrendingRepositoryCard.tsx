import { getLanguageColor } from '@/app/lib/config'
import { Repository, Trending } from '@/app/lib/repository'
import uEmojiParser from 'universal-emoji-parser'

import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  repository: Repository
}

const bestTrending = (repository: Repository): Trending => {
  return repository.trendings.reduce((prev, current) => {
    return prev.rank < current.rank ? prev : current
  })
}

const TrendingRepositoryCard = ({ repository }: Props) => {
  const languageColor = getLanguageColor(repository.language)

  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
      <div className="md:flex md:justify-between md:items-center text-sm md:text-base mb-1">
        <Link
          className="text-blue-400 font-medium hover:underline mb-1 md:mb-0 max-w-[3/4] break-all"
          href={`https://github.com/${repository.full_name}`}
          target="_blank"
        >
          {repository.full_name}
        </Link>
        <div className="text-gray-500 flex items-center text-xs md:text-sm">
          <span
            className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-1"
            style={{
              backgroundColor: languageColor,
            }}
          ></span>
          {repository.language}
        </div>
      </div>

      <div className="flex text-xs items-center text-yellow-700 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
        <span className="font-semibold">
          Best ranking: #{bestTrending(repository).rank} on{' '}
          {dayjs(bestTrending(repository).trend_date).format('D/MMM YYYY')}
        </span>
      </div>

      <div className="flex items-center border-b pb-4 mb-4">
        <Link
          href={`https://github.com/${repository.owner.login}`}
          target="_blank"
        >
          <Image
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
            width={20}
            height={20}
            className="rounded-full mr-2"
          />
        </Link>
        <div className="text-sm text-gray-500">
          Featured on GitHub Trending{' '}
          <span className="text-indigo-600 font-semibold relative group">
            {repository.trendings.length}
          </span>{' '}
          times
        </div>
      </div>

      <div className="text-gray-500 text-xs">
        {uEmojiParser.parseToUnicode(repository.description)}
      </div>
    </div>
  )
}

export default TrendingRepositoryCard
