'use client'

import React from 'react'
import Widget from '../Widget'
import { Pie, PieConfig } from '@ant-design/plots'
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
    return { type: key, value: Number((data[key] / totalCount).toFixed(2)) }
  })

  const config = {
    appendPadding: 10,
    data: entries,
    angleField: 'value',
    colorField: 'type',
    legend: {
      position: 'bottom',
      itemSpacing: 3,
    },
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  } as PieConfig

  return (
    <Widget label="Language Percent">
      <div className="h-[400px]">
        <Pie {...config} />
      </div>
    </Widget>
  )
}

export default LanguagePercentWidget
