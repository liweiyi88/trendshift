import { routes } from '@/app/lib/config'
import { Developer } from '@/app/lib/developer'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { period } from '@/app/(site)/components/TrendingRepositoryCard'
import uEmojiParser from 'universal-emoji-parser'

interface Props {
  developer: Developer
  searchRange?: number
}

const TrendingDeveloperCard = ({ developer, searchRange }: Props) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
      <div className="mb-2">
        <Image
          src={developer.avatar_url}
          alt={developer.login}
          width={60}
          height={60}
          className="rounded-full border-4 border-indigo-600 h-18 w-18 text-sm md:text-base mb-2"
        />

        <Link
          className="block text-blue-400 font-medium hover:underline max-w-[3/4] break-all"
          href={`${routes.developers}/${developer.developer_id}`}
          scroll={false}
        >
          {developer.login}
        </Link>

        {developer.name && developer.name !== '' && (
          <div className="text-gray-500">{developer.name}</div>
        )}
      </div>

      {/* <div className="my-2">
        <DeveloperSocial developer={developer} />
      </div> */}

      <div className="border-b pb-4 mb-4">
        <div className="text-sm text-gray-500">
          Featured on GitHub Trending{' '}
          <span className="text-indigo-600 font-semibold relative group">
            {developer.featured_count}
          </span>{' '}
          times {period(searchRange)}
        </div>
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
