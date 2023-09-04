'use client'

import { DailyStats } from '@/app/lib/stats'
import React from 'react'
import Widget from '../Widget'
import { Chart, Line, Point, Tooltip } from 'bizcharts'

interface Props {
  stats: DailyStats[]
}

const scale = {
  count: { min: 0 },
}

const DailyStatWidget = ({ stats }: Props) => {
  return (
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
  )
}

export default DailyStatWidget
