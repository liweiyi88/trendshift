'use client'

import Widget from '@/app/components/Widget'
import { Chart, Line, Point, Tooltip } from 'bizcharts'

const data = [
  {
    month: 'Jan',
    tag: 'AI',
    count: 7,
  },
  {
    month: 'Jan',
    tag: 'Network',
    count: 3.9,
  },
  {
    month: 'Jan',
    tag: 'Database',
    count: 1,
  },
  {
    month: 'Feb',
    tag: 'Database',
    count: 10,
  },
  {
    month: 'Feb',
    tag: 'AI',
    count: 6.9,
  },
  {
    month: 'Feb',
    tag: 'Network',
    count: 4.2,
  },
  {
    month: 'Mar',
    tag: 'AI',
    count: 9.5,
  },
  {
    month: 'Mar',
    tag: 'Network',
    count: 5.7,
  },
  {
    month: 'Apr',
    tag: 'AI',
    count: 14.5,
  },
  {
    month: 'Apr',
    tag: 'Network',
    count: 8.5,
  },
  {
    month: 'May',
    tag: 'AI',
    count: 18.4,
  },
  {
    month: 'May',
    tag: 'Network',
    count: 11.9,
  },
  {
    month: 'Jun',
    tag: 'AI',
    count: 21.5,
  },
  {
    month: 'Jun',
    tag: 'Network',
    count: 15.2,
  },
  {
    month: 'Jul',
    tag: 'AI',
    count: 25.2,
  },
  {
    month: 'Jul',
    tag: 'Network',
    count: 17,
  },
  {
    month: 'Aug',
    tag: 'AI',
    count: 26.5,
  },
  {
    month: 'Aug',
    tag: 'Network',
    count: 16.6,
  },
  {
    month: 'Sep',
    tag: 'AI',
    count: 23.3,
  },
  {
    month: 'Sep',
    tag: 'Network',
    count: 14.2,
  },
  {
    month: 'Oct',
    tag: 'AI',
    count: 18.3,
  },
  {
    month: 'Oct',
    tag: 'Network',
    count: 10.3,
  },
  {
    month: 'Nov',
    tag: 'AI',
    count: 13.9,
  },
  {
    month: 'Nov',
    tag: 'Network',
    count: 6.6,
  },
  {
    month: 'Dec',
    tag: 'AI',
    count: 9.6,
  },
  {
    month: 'Dec',
    tag: 'Network',
    count: 4.8,
  },
]

const scale = {
  count: { min: 0 },
  tag: {
    formatter: (v: string): string | undefined => {
      return {
        Network: 'Network',
        AI: 'AI',
        Database: 'Database',
      }[v]
    },
  },
}

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <Widget className="col-span-2 h-[402px]">
        <Chart
          scale={scale}
          padding={[30, 20, 60, 40]}
          autoFit
          data={data}
          interactions={['element-active']}
        >
          <Point position="month*count" color="tag" shape="circle" />
          <Line
            shape="smooth"
            position="month*count"
            color="tag"
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
      <Widget className="" />
      <Widget className="h-52" />
      <Widget className="h-52" />
      <Widget className="h-52" />
      <Widget className="h-52" />
      <Widget className="h-52" />
      <Widget className="h-52" />
      <Widget className="h-52" />
    </div>
  )
}

export default Home
