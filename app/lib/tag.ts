import { config } from './config'

export interface Tag {
  id: number
  name: string
}

export const getTags = async (): Promise<Tag[]> => {
  const res = await fetch(`${config.apiHost}/api/tags`, {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}
