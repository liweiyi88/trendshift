export const config = {
  jwtCookie: 'gti_access_token',
  apiHost: process.env.API_HOST ?? 'http://127.0.0.1:8080',
  publicApiHost: process.env.NEXT_PUBLIC_API_HOST ?? 'http://127.0.0.1:8080',
}
