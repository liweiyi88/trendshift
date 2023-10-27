import Notice from '@/app/components/Notice'
import TrendingFilters from '@/app/components/trending/TrendingFilters'
import { Developer } from '@/app/lib/developer'
import { BackTop } from '@/app/components/BackTop'
import dayjs from 'dayjs'
import React from 'react'
import TrendingDeveloperCard from './TrendingDeveloperCard'

interface Props {
  developers?: Developer[]
  searchRange?: number
}

const TrendingDeveloperList = ({ developers, searchRange }: Props) => {
  return (
    <>
      <div className="mb-3">
        <Notice
          text={`GitHub trending developers data is fetched since ${dayjs(
            '2023-10-16',
          ).format('D MMM, YYYY')}.`}
        />
      </div>
      <div className="block md:flex items-center text-base w-auto rounded mb-3">
        <div className="md:pr-2 text-base font-medium mb-1 md:mb-0">
          Trending developers
        </div>

        <TrendingFilters />
      </div>

      {!developers && (
        <div className="text-sm text-blue-800 font-semibold">
          Data is not avaiable yet.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-0">
        {developers &&
          developers.map((developer) => (
            <TrendingDeveloperCard
              key={developer.developer_id}
              developer={developer}
              searchRange={searchRange}
            />
          ))}
      </div>
      <BackTop />
    </>
  )
}

export default TrendingDeveloperList
