import { PageProps } from '../lib/pagetypes'
import TrendingRepositoryList from './components/TrendingRepositoryList'
import { getTrendingRepositories } from '../lib/repository'
import Section from '../components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Github Trending Insight',
  description: 'Analyse Github trending repositories.',
}

const Home = async ({ searchParams }: PageProps<null>) => {
  // const topicRange = searchParams['topic-range'] as string
  const trendingRange = searchParams['trending-range'] as string
  const trendingLanguage = searchParams['trending-language'] as string
  const trendingLimit = searchParams['trending-limit'] as string

  // const trendingTopicsStats = await fetchTrendingTopicStats(topicRange)
  const trendingRepositories = await getTrendingRepositories(
    trendingRange,
    trendingLanguage,
    trendingLimit,
  )

  return (
    <>
      <Section>
        <TrendingRepositoryList
          repositories={trendingRepositories}
          searchLanguage={trendingLanguage}
        />
      </Section>

      {/* <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <TrendingTopicsWidget
            stats={trendingTopicsStats.map((stat) => {
              return {
                ...stat,
                trend_date: dayjs(stat.trend_date).format('DD/MM'),
              }
            })}
          />
        </div>
      </Section> */}
    </>
  )
}

export default Home
