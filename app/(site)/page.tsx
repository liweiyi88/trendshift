import dayjs from 'dayjs'
import TrendingTopicsWidget from '../components/widgets/TrendingTopicsWidget'
import { fetchTrendingTopicStats } from '../lib/stats'
import { PageProps } from '../lib/page'
import TrendingRepositoryList from './components/TrendingRepositoryList'
import { getTrendingRepositories } from '../lib/repository'
import Section from '../components/Section'

const Home = async ({ searchParams }: PageProps<null>) => {
  const topicRange = searchParams['topic-range'] as string
  const trendingRange = searchParams['trending-range'] as string
  const trendingLanguage = searchParams['trending-language'] as string
  const trendingLimit = searchParams['trending-limit'] as string

  const trendingTopicsStats = await fetchTrendingTopicStats(topicRange)
  const trendingRepositories = await getTrendingRepositories(
    trendingRange,
    trendingLanguage,
    trendingLimit,
  )

  return (
    <>
      <Section>
        <TrendingRepositoryList repositories={trendingRepositories} />
      </Section>

      <Section>
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
      </Section>
    </>
  )
}

export default Home
