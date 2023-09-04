import { config } from './config'

export interface DailyStats {
  trend_date: string
  name: string
  count: number
}

export const fetchDailyStats = async (): Promise<DailyStats[]> => {
  const res = await fetch(`${config.apiHost}/api/stats/daily`, {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}
