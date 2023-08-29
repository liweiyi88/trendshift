import { config } from './config'

export interface Tag {
  id: number
  name: string
}

export interface Repository {
  repository_id: number
  id: number
  full_name: string
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

export const getRepositories = async (): Promise<Repository[]> => {
  const res = await fetch(`${config.apiHost}/api/repositories`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}

export const getTags = async (): Promise<Tag[]> => {
  const res = await fetch(`${config.apiHost}/api/tags`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}
