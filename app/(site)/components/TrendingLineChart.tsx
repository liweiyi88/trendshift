'use client'

import { Trending } from '@/app/lib/repository'
import { Chart, Coord, Line, Point, Tooltip } from 'bizcharts'
import React from 'react'
import dayjs from 'dayjs'
import Widget from '@/app/components/Widget'

const scale = {
  count: { min: 0 },
}

interface Props {
  trendings: Trending[]
}

const TrendingLineChart = ({ trendings }: Props) => {
  const data = trendings.map((trending) => {
    return {
      ...trending,
      trend_date: dayjs(trending.trend_date).format('DD/MM YYYY'),
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

  return (
    <>
      <div className="mb-4">
        {allLanguage && allLanguage.length > 0 && (
          <Widget label="All language ranking">
            <div className="mt-10">
              <Chart
                height={300}
                scale={scale}
                padding={[30, 20, 60, 40]}
                autoFit
                data={allLanguage}
                interactions={['element-active']}
              >
                <Point
                  position="trend_date*rank"
                  color="green"
                  shape="circle"
                />
                <Line
                  shape="smooth"
                  position="trend_date*rank"
                  color="green"
                  label="rank"
                />
                <Coord reflect="y" />
                <Tooltip
                  shared
                  showCrosshairs
                  region={null}
                  g2-tooltip-list-item={{ display: 'flex' }}
                />
              </Chart>
            </div>
          </Widget>
        )}
      </div>

      {language && language.length > 0 && (
        <div className="pb-6">
          <Widget
            label={<div className="capitalize">{trandingLanguage} ranking</div>}
          >
            <div className="mt-10">
              <Chart
                height={300}
                scale={scale}
                padding={[30, 20, 60, 40]}
                autoFit
                data={language}
                interactions={['element-active']}
              >
                <Coord reflect="y" />
                <Point
                  position="trend_date*rank"
                  color="orange"
                  shape="circle"
                />
                <Line
                  shape="smooth"
                  position="trend_date*rank"
                  color="orange"
                  label="rank"
                />
                <Tooltip
                  shared
                  showCrosshairs
                  region={null}
                  g2-tooltip-list-item={{ display: 'flex' }}
                />
              </Chart>
            </div>
          </Widget>
        </div>
      )}
    </>
  )
}

export default TrendingLineChart
