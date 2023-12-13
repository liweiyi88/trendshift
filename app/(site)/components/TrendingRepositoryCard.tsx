import { routes } from '@/app/lib/config'
import { Repository } from '@/app/lib/repository'
import uEmojiParser from 'universal-emoji-parser'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Language from '@/app/components/Language'
import VisitGithubLink from '@/app/components/trending/VisitGithubLink'
import FeaturedMessage from '@/app/components/trending/FeaturedMessage'
import RepositoryWebsiteLink from '@/app/components/trending/RepositoryWebsiteLink'
import StarsForks from '@/app/components/trending/StarsForks'

interface Props {
  repository: Repository
  searchRange?: number
}

const TrendingRepositoryCard = ({ repository, searchRange }: Props) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
      <div className="md:flex md:justify-between md:items-center text-sm md:text-base mb-1">
        <Link
          className="text-indigo-400 font-medium hover:underline max-w-[3/4] break-all"
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

      <div className="mb-2">
        <StarsForks repository={repository} />
      </div>

      <div className="flex mb-4">
        {repository.language !== '' && (
          <div className="md:hidden mr-2">
            <Language language={repository.language} />
          </div>
        )}
        <div className="flex text-xs items-center font-medium text-yellow-700 mr-2">
          <VisitGithubLink uri={repository.full_name} />
        </div>
        {repository.homepage && repository.homepage !== '' && (
          <div className="flex text-xs items-center font-medium text-yellow-700">
            <RepositoryWebsiteLink url={repository.homepage} />
          </div>
        )}
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
