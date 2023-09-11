'use server'

import { config, routes } from './config'
import { cookies } from 'next/headers'

interface TokenResponse {
  access_token: string
  expired_at: number
}

export const login = async (formData: FormData) => {
  const request = {
    username: formData.get('username'),
    password: formData.get('password'),
  }

  const res = await fetch(`${config.apiHost}${routes.login}`, {
    method: 'POST',
    body: JSON.stringify(request),
    cache: 'no-store',
  })

  if (!res.ok) {
    return { error: 'Incorrect username or password' }
  }

  const { access_token, expired_at } = (await res.json()) as TokenResponse

  const cookieStore = cookies()
  const now = Math.floor(Date.now() / 1000)
  const maxAge = expired_at - now

  cookieStore.set(config.jwtCookie, access_token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge,
  })
}
