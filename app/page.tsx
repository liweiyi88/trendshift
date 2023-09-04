import dayjs from 'dayjs'
import DailyStatWidget from './components/widgets/DailyStatWidget'
import { fetchDailyStats } from './lib/stats'

const Home = async () => {
  const dailyStats = await fetchDailyStats()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <DailyStatWidget
        stats={dailyStats.map((stat) => {
          return {
            ...stat,
            trend_date: dayjs(stat.trend_date).format('DD/MM'),
          }
        })}
      />
    </div>
  )
}

export default Home
