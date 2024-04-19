'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const TrendingFilters = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const range = searchParams.get('trending-range') ?? 'all'
  const language = searchParams.get('trending-language') ?? 'all'
  const limit = searchParams.get('trending-limit') ?? '25'

  const getURLSearchParam = (
    range: string,
    language: string,
    limit: string,
  ) => {
    const url = new URLSearchParams()
    if (range !== 'all') {
      url.append('trending-range', range)
    }

    if (language !== 'all') {
      url.append('trending-language', language)
    }

    if (limit !== '25') {
      url.append('trending-limit', limit)
    }

    return url
  }

  return (
    <div className="group space-x-4">
      <select
        className="text-xs bg-gray-100 px-1 py-1 rounded"
        value={range}
        onChange={(e) => {
          const range = e.target.value
          const searchParams = getURLSearchParam(range, language, limit)

          router.push(`?${searchParams.toString()}`, { scroll: false })
        }}
      >
        <option value="all">All days</option>
        <option value="1">Today</option>
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="360">Last one year</option>
      </select>

      <select
        className="text-xs bg-gray-100 px-1 py-1 rounded"
        value={language}
        onChange={(e) => {
          const language = e.target.value
          const searchParams = getURLSearchParam(range, language, limit)

          router.push(`?${searchParams.toString()}`, { scroll: false })
        }}
      >
        <option value="all">All Languages</option>
        <option value="javascript">Javascript</option>
        <option value="go">Go</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="typescript">Typescript</option>
        <option value="c#">C#</option>
        <option value="python">Python</option>
        <option value="ruby">Ruby</option>
        <option value="rust">Rust</option>
        <option value="c">C</option>
        <option value="c++">C++</option>
        <option value="dart">Dart</option>
      </select>

      <select
        className="text-xs bg-gray-100 px-1 py-1 rounded"
        value={limit}
        onChange={(e) => {
          const limit = e.target.value
          const searchParams = getURLSearchParam(range, language, limit)

          router.push(`?${searchParams.toString()}`, { scroll: false })
        }}
      >
        <option value="25">Show 25</option>
        <option value="50">Show 50</option>
        <option value="100">Show 100</option>
      </select>
    </div>
  )
}

export default TrendingFilters
