import { routes } from '@/app/lib/config'
import { Repository } from '@/app/lib/repository'
import uEmojiParser from 'universal-emoji-parser'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Language from '@/app/components/Language'
import VisitGithubLink from '@/app/components/trending/VisitGithubLink'
import FeaturedMessage from '@/app/components/trending/FeaturedMessage'

interface Props {
  repository: Repository
  searchRange?: number
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
        {repository.language !== '' && (
          <div className="md:hidden mr-1">
            <Language language={repository.language} />
          </div>
        )}
        <div className="flex text-xs items-center font-medium text-yellow-700 mb-4">
          <VisitGithubLink uri={repository.full_name} />
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

        <FeaturedMessage
          featuredCount={repository.featured_count}
          searchRange={searchRange}
        />
      </div>

      <div className="text-gray-500 text-xs">
        {uEmojiParser.parseToUnicode(repository.description)}
      </div>
    </div>
  )
}

export default TrendingRepositoryCard
