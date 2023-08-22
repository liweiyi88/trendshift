import { cookies } from 'next/headers'

export const config = {
  jwtCookie: 'gti_access_token',
}

export const authenticated = async () => {
  const cookieStore = cookies()

  return !!cookieStore.get(config.jwtCookie)
}
