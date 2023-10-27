import { Developer } from '@/app/lib/developer'
import React from 'react'
import Image from 'next/image'
import { config, routes } from '@/app/lib/config'
import VisitGithubLink from '@/app/components/trending/VisitGithubLink'
import EmbedBadgeBtn from '@/app/components/badge/EmbedBadgeBtn'
import uEmojiParser from 'universal-emoji-parser'
import TrendingLineChart from './TrendingLineChart'
import DeveloperSocial from '../trending/developers/components/DeveloperSocial'

interface Props {
  developer: Developer
}

const DeveloperDetail = ({ developer }: Props) => {
  return (
    <>
      <div className="mb-2">
        <div className="text-indigo-400 text-lg">{developer.login}</div>

        {developer.name && developer.name !== '' && (
          <div className="text-gray-400">{developer.name}</div>
        )}
      </div>

      <div className="mb-4">
        <DeveloperSocial developer={developer} />
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <Image
            width={250}
            height={55}
            src={`${config.host}${routes.developerBadge(
              developer.developer_id,
            )}`}
            alt={developer.login}
          />
        </div>

        <div className="text-xs mb-2 flex items-center font-medium text-yellow-700 space-x-4">
          <div className="flex items-center">
            <VisitGithubLink uri={developer.login} />
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
              id={developer.developer_id}
              name={developer.login}
              type="developer"
            />
          </div>
        </div>
      </div>

      {developer.bio && (
        <div className="text-sm text-gray-500">
          {uEmojiParser.parseToUnicode(developer.bio)}
        </div>
      )}

      {developer.trendings && (
        <div className="mt-4 overflow-auto">
          <TrendingLineChart trendings={developer.trendings} />
        </div>
      )}
    </>
  )
}

export default DeveloperDetail
