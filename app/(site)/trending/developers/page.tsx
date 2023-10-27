import Section from '@/app/components/Section'
import React from 'react'
import TrendingDeveloperList from './components/TrendingDeveloperList'
import type { Metadata } from 'next'
import { PageProps } from '@/app/lib/pagetypes'
import { getTrendingDevelopers } from '@/app/lib/developer'

export const metadata: Metadata = {
  title: 'Trendshift - Github Trending developers',
  description: 'Github trending developers.',
  keywords: ['github', 'trending', 'developer', 'repository'],
}

const TrendingDevelopers = async ({ searchParams }: PageProps<null>) => {
  const trendingRange = searchParams['trending-range'] as string | undefined
  const trendingLanguage = searchParams['trending-language'] as string
  const trendingLimit = searchParams['trending-limit'] as string

  const trendingDevelopers = await getTrendingDevelopers(
    trendingRange,
    trendingLanguage,
    trendingLimit,
  )

  return (
    <>
      <Section>
        <TrendingDeveloperList
          developers={trendingDevelopers}
          searchRange={trendingRange ? Number(trendingRange) : undefined}
        />
      </Section>
    </>
  )
}

export default TrendingDevelopers
