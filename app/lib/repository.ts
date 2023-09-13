import { config } from './config'
import { Tag } from './tag'

export interface Repository {
  repository_id: number
  id: number
  full_name: string
  description: string
  default_branch: string
  owner: {
    login: string
    avatar_url: string
  }
  forks: number
  watchers: number
  language: string
  tags: Tag[]
  created_at: string
  updated_at: string
}

type Filter = 'today' | 'all'

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

export const getRepository = async (fullName: string): Promise<Repository> => {
  const query = `${config.apiHost}/api/repositories/${encodeURIComponent(
    fullName,
  )}`

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
