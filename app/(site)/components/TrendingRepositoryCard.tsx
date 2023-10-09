import { getLanguageColor, routes } from '@/app/lib/config'
import { Repository } from '@/app/lib/repository'
import uEmojiParser from 'universal-emoji-parser'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  repository: Repository
  searchRange?: number
}

const period = (searchRange?: number): string => {
  if (!searchRange) {
    return 'of all days.'
  }

  if (searchRange === 1) {
    return 'of today.'
  }

  if (searchRange === 360) {
    return 'over past a year.'
  }

  return `over past ${searchRange} days.`
}

const TrendingRepositoryCard = ({ repository, searchRange }: Props) => {
  const languageColor = getLanguageColor(repository.language)

  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
      <div className="md:flex md:justify-between md:items-center text-sm md:text-base mb-1">
        <Link
          className="text-blue-400 font-medium hover:underline mb-1 md:mb-0 max-w-[3/4] break-all"
          href={`${routes.repository}/${repository.repository_id}`}
          scroll={false}
        >
          {repository.full_name}
        </Link>
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

      <div className="flex text-xs items-center text-yellow-700 mb-4">
        <Link
          className="underline hover:cursor-pointer"
          href={`https://github.com/${repository.full_name}`}
          target="_blank"
          scroll={true}
        >
          Visit GitHub
        </Link>
      </div>

      <div className="flex items-center border-b pb-4 mb-4">
        <Link
          href={`https://github.com/${repository.owner.login}`}
          target="_blank"
          className="mr-0 h-10 w-10"
        >
          <Image
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
            width={20}
            height={20}
            className="rounded-full"
          />
        </Link>
        <div className="text-sm text-gray-500">
          <span className="text-yellow-700 font-medium">
            Highest rank achieved: #{repository.best_ranking}
          </span>{' '}
          and featured on GitHub Trending{' '}
          <span className="text-indigo-600 font-semibold relative group">
            {repository.featured_count}
          </span>{' '}
          times {period(searchRange)}
        </div>
      </div>

      <div className="text-gray-500 text-xs">
        {uEmojiParser.parseToUnicode(repository.description)}
      </div>
    </div>
  )
}

export default TrendingRepositoryCard
