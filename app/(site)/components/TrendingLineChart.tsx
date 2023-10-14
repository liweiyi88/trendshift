'use client'

import { Trending } from '@/app/lib/repository'
import React from 'react'
import dayjs from 'dayjs'
import Widget from '@/app/components/Widget'
import { Line, LineConfig } from '@ant-design/plots'

interface Props {
  trendings: Trending[]
}

const TrendingLineChart = ({ trendings }: Props) => {
  const data = trendings
    .map((trending) => {
      return {
        ...trending,
        trend_date: dayjs(trending.trend_date).format('YYYY-MM-DD'),
      }
    })
    .sort((a, b) => {
      if (a.trend_date > b.trend_date) {
        return 1
      } else if (a.trend_date === b.trend_date) {
        return 0
      } else {
        return -1
      }
    })

  const languageMap = {} as Record<string, Trending[]>

  data.forEach((trending) => {
    if (
      trending.trending_language === null ||
      trending.trending_language == ''
    ) {
      if (!languageMap['all language']) {
        languageMap['all language'] = [trending]
      } else {
        languageMap['all language'].push(trending)
      }
    } else {
      if (!languageMap[trending.trending_language]) {
        languageMap[trending.trending_language] = [trending]
      } else {
        languageMap[trending.trending_language].push(trending)
      }
    }
  })

  const config = {
    xField: 'trend_date',
    yField: 'rank',
    autoFit: true,
    padding: 40,
    reflect: 'y',
    legend: {
      position: 'bottom',
    },
    point: {
      size: 3,
      shape: 'dot',
      style: {
        fill: 'white',
        lineWidth: 1,
      },
    },
    yAxis: {},
    xAxis: {
      animate: true,
      type: 'timeCat',
    },
    smooth: true,
  } as LineConfig

  return (
    <div className="flex flex-col space-y-4">
      {Object.entries(languageMap)
        .sort()
        .map(([key, value]) => (
          <Widget
            key={key}
            label={<div className="capitalize">{key} ranking</div>}
          >
            <div className="mt-10 h-[300px]">
              <Line {...config} data={value} />
            </div>
          </Widget>
        ))}
    </div>
  )
}

export default TrendingLineChart
