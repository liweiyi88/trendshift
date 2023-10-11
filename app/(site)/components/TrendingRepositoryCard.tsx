import { routes } from '@/app/lib/config'
import { Repository } from '@/app/lib/repository'
import uEmojiParser from 'universal-emoji-parser'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Language from '@/app/components/Language'

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
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
      <div className="md:flex md:justify-between md:items-center text-sm md:text-base mb-1">
        <Link
          className="text-blue-400 font-medium hover:underline max-w-[3/4] break-all"
          href={`${routes.repositories}/${repository.repository_id}`}
          scroll={false}
        >
          {repository.full_name}
        </Link>
        {repository.language !== '' && (
          <div className="hidden md:block">
            <Language language={repository.language} />
          </div>
        )}
      </div>

      <div className="flex">
        <div className="md:hidden mr-1">
          <Language language={repository.language} />
        </div>
        <div className="flex text-xs items-center font-medium text-yellow-700 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
          <Link
            className="underline hover:cursor-pointer"
            href={`https://github.com/${repository.full_name}`}
            target="_blank"
            scroll={true}
          >
            Visit GitHub
          </Link>
        </div>
      </div>

      <div className="flex items-center border-b pb-4 mb-4">
        <Link
          href={`https://github.com/${repository.owner.login}`}
          target="_blank"
          className="mr-2 h-5 w-5"
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
          Featured on GitHub Trending{' '}
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
