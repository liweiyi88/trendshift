export interface SearchResult {
  repositories: RepositoryResult[] | null
  developers: DeveloperResult[] | null
}

export interface RepositoryResult {
  _highlightResult: {
    full_name: {
      fullyHighlighted: boolean
      matchLevel: string
      matchedWords: string[]
      value: string
    }
  }
  full_name: string
  objectID: string
}

export interface DeveloperResult {
  _highlightResult: {
    username: {
      fullyHighlighted: boolean
      matchLevel: string
      matchedWords: string[]
      value: string
    }
  }
  username: string
  objectID: string
}

export const search = async (query: string): Promise<SearchResult> => {
  const url = `/api/search`
  const res = await fetch(url, {
    method: 'POST',
    body: query,
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}
