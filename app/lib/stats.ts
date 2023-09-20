import { config } from './config'

export interface TrandingTopicStats {
  trend_date: string
  name: string
  count: number
}

export const fetchTrendingTopicStats = async (
  range: string | null,
): Promise<TrandingTopicStats[]> => {
  const url = range
    ? `${config.apiHost}/api/stats/trending-topics?range=${range}`
    : `${config.apiHost}/api/stats/trending-topics`

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
    next: {
      revalidate: 24 * 3600,
    },
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}
