import { config } from './config'

export interface LoginRequest {
  username: string
  password: string
}

// @TODO should turn this into server action so we can get rid of process.env.NEXT_PUBLIC_API_HOST.
export const login = async (data: LoginRequest) => {
  const res = await fetch(`${config.publicApiHost}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}
