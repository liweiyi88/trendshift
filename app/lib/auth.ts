import { config } from './config'

export interface LoginRequest {
  username: string
  password: string
}

export const login = async (data: LoginRequest) => {
  const res = await fetch(`${config.apiHost}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return res.json()
}
