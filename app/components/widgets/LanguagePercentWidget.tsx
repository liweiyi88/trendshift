'use client'

import React from 'react'
import Widget from '../Widget'
import { Axis, Chart, Coordinate, Interval, getTheme, Tooltip } from 'bizcharts'
import { Repository } from '@/app/lib/repository'

interface Props {
  repositories: Repository[]
}

const LanguagePercentWidget = ({ repositories }: Props) => {
  const data = {} as Record<string, number>
  let totalCount = 0

  repositories.forEach((repository) => {
    const language =
      repository.language === '' ? 'Unknown' : repository.language

    if (language in data) {
      data[language]++
    } else {
      data[language] = 1
    }

    totalCount++
  })

  const entries = Object.keys(data).map((key) => {
    return { item: key, percent: Number((data[key] / totalCount).toFixed(2)) }
  })

  const colors = entries.reduce((pre: Record<string, unknown>, cur, idx) => {
    pre[cur.item] = getTheme().colors10[idx]
    return pre
  }, {})

  const cols = {
    percent: {
      formatter: (val: number) => {
        const v = val * 100 + '%'
        return v
      },
    },
  }

  return (
    <Widget label="Language Percent">
      <Chart
        height={400}
        data={entries}
        scale={cols}
        interactions={['element-active']}
        autoFit
      >
        <Coordinate type="theta" radius={0.75} />
        <Tooltip showTitle={false} />
        <Axis visible={false} />
        <Interval
          position="percent"
          adjust="stack"
          color="item"
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
          label={[
            'item',
            (item) => {
              return {
                offset: 20,
                content: (data) => {
                  return `${data.item}\n ${
                    Number((data.percent * 100).toFixed(2)) - 0
                  }%`
                },
                style: {
                  fill: colors[item],
                },
              }
            },
          ]}
        />
      </Chart>
    </Widget>
  )
}

export default LanguagePercentWidget
