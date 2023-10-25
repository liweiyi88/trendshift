import { routes } from '@/app/lib/config'
import { Developer } from '@/app/lib/developer'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import uEmojiParser from 'universal-emoji-parser'
import VisitGithubLink from '@/app/components/trending/VisitGithubLink'
import FeaturedMessage from '@/app/components/trending/FeaturedMessage'

interface Props {
  developer: Developer
  searchRange?: number
}

const TrendingDeveloperCard = ({ developer, searchRange }: Props) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
      <div className="mb-2 flex items-start space-x-4">
        <div>
          <Link href={`${routes.developers}/${developer.developer_id}`}>
            <Image
              src={developer.avatar_url}
              alt={developer.login}
              width={50}
              height={50}
              className="rounded-full border-4 border-indigo-600 h-18 w-18 text-base md:text-base mb-2"
            />
          </Link>
        </div>

        <div>
          <Link
            className="block text-indigo-400 font-medium hover:underline max-w-[3/4] break-all text-xl"
            href={`${routes.developers}/${developer.developer_id}`}
            scroll={false}
          >
            {developer.login}
          </Link>

          {developer.name && developer.name !== '' && (
            <div className="text-gray-400 text-base">{developer.name}</div>
          )}
        </div>
      </div>

      <div className="flex text-xs items-center font-medium text-yellow-700 mb-4">
        <VisitGithubLink uri={developer.login} />
      </div>

      {/* <div className="my-2">
        <DeveloperSocial developer={developer} />
      </div> */}

      <div className="border-b pb-4 mb-4">
        <FeaturedMessage
          featuredCount={developer.featured_count}
          searchRange={searchRange}
        />
      </div>

      {developer.bio && (
        <div className="text-gray-500 text-xs">
          {uEmojiParser.parseToUnicode(developer.bio)}
        </div>
      )}
    </div>
  )
}

export default TrendingDeveloperCard
