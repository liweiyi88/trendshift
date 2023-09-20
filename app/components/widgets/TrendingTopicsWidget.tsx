'use client'

import { TrandingTopicStats } from '@/app/lib/stats'
import React from 'react'
import Widget from '../Widget'
import { Chart, Line, Point, Tooltip } from 'bizcharts'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  stats: TrandingTopicStats[]
}

const scale = {
  count: { min: 0 },
}

const TrendingTopicsWidget = ({ stats }: Props) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const range = searchParams.get('topic-range') ?? 'all'

  return (
    <>
      <div className="inline-flex items-center text-base hover:cursor-pointer w-auto rounded">
        <div className="px-2 text-base font-medium">Trending topics</div>
        <select
          className="text-xs bg-gray-100 px-1 py-1 rounded"
          value={range}
          onChange={(e) => {
            const range = e.target.value
            if (range !== 'all') {
              const searchParams = new URLSearchParams({
                'topic-range': range,
              })
              router.push(`?${searchParams.toString()}`, { scroll: false })
            } else {
              router.push('?', { scroll: false })
            }
          }}
        >
          <option value="all">All days</option>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="360">Last one year</option>
        </select>
      </div>
      <Widget className="col-span-3 h-[402px]">
        <Chart
          scale={scale}
          padding={[30, 20, 60, 40]}
          autoFit
          data={stats}
          interactions={['element-active']}
        >
          <Point position="trend_date*count" color="name" shape="circle" />
          <Line
            shape="smooth"
            position="trend_date*count"
            color="name"
            label="count"
          />
          <Tooltip
            shared
            showCrosshairs
            region={null}
            g2-tooltip-list-item={{ display: 'flex' }}
          />
        </Chart>
      </Widget>
    </>
  )
}

export default TrendingTopicsWidget
