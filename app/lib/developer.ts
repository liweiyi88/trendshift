import { config } from './config'
import { Trending } from './repository'

export interface Developer {
  developer_id: number
  id: number
  login: string
  avatar_url: string
  name: string
  company?: string
  blog?: string
  location?: string
  email?: string
  bio?: string
  twitter_username?: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  best_ranking?: number
  featured_count?: number
  trendings?: Trending[]
}

export const getTrendingDevelopers = async (
  range: string | undefined,
  language: string | null,
  limit: string | null,
): Promise<Developer[]> => {
  const url = new URLSearchParams()

  if (range) {
    url.append('range', range)
  }

  if (language) {
    url.append('language', language)
  }

  limit ? url.append('limit', limit) : url.append('limit', '25')

  const query = `${config.apiHost}/api/trending-developers?${url.toString()}`
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

export const getDeveloper = async (id: number): Promise<Developer> => {
  const query = `${config.apiHost}/api/developers/${id}`

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
