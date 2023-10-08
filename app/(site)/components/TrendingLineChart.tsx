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

  const allLanguage = data.filter((trending) => {
    return (
      trending.trending_language == null || trending.trending_language == ''
    )
  })

  const language = data.filter((trending) => {
    return (
      trending.trending_language !== null && trending.trending_language !== ''
    )
  })

  const trandingLanguage =
    language && language.length > 0 ? language[0].trending_language : 'Unknown'

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
    <>
      <div className="mb-4">
        {allLanguage && allLanguage.length > 0 && (
          <Widget label="All language ranking">
            <div className="mt-10 h-[300px]">
              <Line {...config} data={allLanguage} />
            </div>
          </Widget>
        )}
      </div>

      {language && language.length > 0 && (
        <div className="pb-6">
          <Widget
            label={<div className="capitalize">{trandingLanguage} ranking</div>}
          >
            <div className="mt-10 h-[300px]">
              <Line {...config} data={language} color="orange" />
            </div>
          </Widget>
        </div>
      )}
    </>
  )
}

export default TrendingLineChart
