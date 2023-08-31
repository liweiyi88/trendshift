import { config } from '@/app/lib/config'
import { Repository } from '@/app/lib/repository'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const PUT = async (
  request: Request,
  { params }: { params: { id: number } },
): Promise<NextResponse<Repository>> => {
  const requestData = await request.json()

  const cookieStore = cookies()

  const res = await fetch(
    `${config.apiHost}/api/repositories/${params.id}/tags`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookieStore.get(config.jwtCookie)?.value}`,
      },
      method: 'PUT',
      body: JSON.stringify(requestData),
    },
  )

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return NextResponse.json(data)
}
