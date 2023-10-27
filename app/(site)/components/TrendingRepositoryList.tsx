import { Repository } from '@/app/lib/repository'
import React from 'react'
import TrendingRepositoryCard from './TrendingRepositoryCard'
import { BackTop } from '@/app/components/BackTop'
import LanguagePercentWidget from '@/app/components/widgets/LanguagePercentWidget'
import Notice from '@/app/components/Notice'
import dayjs from 'dayjs'
import TrendingFilters from '@/app/components/trending/TrendingFilters'

interface Props {
  repositories?: Repository[] // repositories could be null if today's data is not ready.
  searchLanguage?: string
  searchRange?: number
}

const TrendingRepositoryList = ({
  repositories,
  searchLanguage,
  searchRange,
}: Props) => {
  return (
    <>
      <div className="mb-3">
        <Notice
          text={`GitHub trending repositories data is fetched since ${dayjs(
            '2023-09-08',
          ).format('D MMM, YYYY')}.`}
        />
      </div>
      <div className="block md:flex items-center text-base w-auto rounded mb-3">
        <div className="md:pr-2 text-base font-medium mb-1 md:mb-0">
          Trending repositories
        </div>

        <TrendingFilters />
      </div>

      {!searchLanguage && repositories && (
        <div className="mb-3">
          <LanguagePercentWidget repositories={repositories} />
        </div>
      )}

      {!repositories && (
        <div className="text-sm text-blue-800 font-semibold">
          Data is not avaiable yet.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-0">
        {repositories &&
          repositories.map((repository) => (
            <TrendingRepositoryCard
              key={repository.repository_id}
              repository={repository}
              searchRange={searchRange}
            />
          ))}
      </div>
      <BackTop />
    </>
  )
}

export default TrendingRepositoryList
