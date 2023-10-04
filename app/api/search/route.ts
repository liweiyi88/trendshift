import { config } from '@/app/lib/config'
import { SearchResult } from '@/app/lib/search'
import { NextResponse } from 'next/server'

export const POST = async (
  request: Request,
): Promise<NextResponse<SearchResult[]>> => {
  const requestData = await request.text()

  const res = await fetch(`${config.apiHost}/api/search?q=${requestData}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return NextResponse.json(data)
}
