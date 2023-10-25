import { config } from './config'
import { Tag } from './tag'

export interface Trending {
  trending_language: string | null
  trend_date: string
  rank: number
}

export interface Repository {
  repository_id: number
  id: number
  full_name: string
  description: string
  default_branch: string
  best_ranking?: number
  featured_count?: number
  owner: {
    login: string
    avatar_url: string
  }
  trendings: Trending[]
  forks: number
  watchers: number
  language: string
  tags: Tag[]
  created_at: string
  updated_at: string
}

type Filter = 'today' | 'all'

export const getTrendingRepositories = async (
  range: string | undefined,
  language: string | null,
  limit: string | null,
): Promise<Repository[]> => {
  const url = new URLSearchParams()

  if (range) {
    url.append('range', range)
  }

  if (language) {
    url.append('language', language)
  }

  limit ? url.append('limit', limit) : url.append('limit', '25')

  const query = `${config.apiHost}/api/trending-repositories?${url.toString()}`
  const res = await fetch(query, {
    method: 'GET',
    next: {
      revalidate: 2 * 3600,
    },
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}

export const getRepositories = async (
  filter: Filter,
): Promise<Repository[]> => {
  const query =
    filter === 'today'
      ? `${config.apiHost}/api/repositories?q=${filter}`
      : `${config.apiHost}/api/repositories`

  const res = await fetch(query, {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}

export const getRepository = async (id: number): Promise<Repository> => {
  const query = `${config.apiHost}/api/repositories/${id}`

  const res = await fetch(query, {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}

export const getBestRanking = (trendings: Trending[]): number => {
  return trendings.sort((a, b) => {
    if (a.rank === b.rank) {
      return 0
    }

    return a.rank < b.rank ? -1 : 1
  })[0].rank
}
