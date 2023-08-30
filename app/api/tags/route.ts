import { config } from '@/app/lib/config'
import { Tag } from '@/app/lib/tag'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const POST = async (request: Request): Promise<NextResponse<Tag>> => {
  const requestData = await request.json()

  const cookieStore = cookies()

  const res = await fetch(`${config.apiHost}/api/tags`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookieStore.get(config.jwtCookie)?.value}`,
    },
    method: 'POST',
    body: JSON.stringify(requestData),
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return NextResponse.json(data)
}
