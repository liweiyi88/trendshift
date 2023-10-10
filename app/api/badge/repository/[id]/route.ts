import { getBestRanking, getRepository } from '@/app/lib/repository'

export const GET = async (
  request: Request,
  { params }: { params: { id: number } },
): Promise<Response> => {
  const repository = await getRepository(params.id)
  const bestRanking = getBestRanking(repository)

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 250 53" width="250" height="55" data-date-format="longDate">
    <rect xmlns="http://www.w3.org/2000/svg" stroke="#4a0e99" stroke-width="1" fill="none" x="0.5" y="0.5" width="249" height="53" rx="10"/>
    <foreignObject width="198" height="17" style="font-size: 9px;color: rgb(67, 39, 135);font-family: Arial;font-weight: 400;text-align: center;letter-spacing: 0em;line-height: 1.5;" x="6" y="10" selection="true">
      <div xmlns="http://www.w3.org/1999/xhtml">GITHUB TRENDING</div>
    </foreignObject>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="&#x421;&#x43B;&#x43E;&#x439;_1" viewBox="0 0 80 80" width="48" height="45" x="10" y="8">
  <path fill="#49278e" d="M70.71,40.31C75.74,44.3,80,37.86,80,37.86s-5.64-2.17-8.55,0.61c0.59-1.62,1.02-3.31,1.28-5.01  c4.08,2.16,6.44-2.95,6.44-2.95s-4.41-0.97-6.26,1.4c0.08-0.91,0.12-1.82,0.1-2.73c-0.01-0.36-0.02-0.73-0.05-1.09  c2.96-3.68-1.73-6.99-1.73-6.99s-2.14,5.09,0.98,7.09c0.02,0.33,0.03,0.66,0.03,1c0.01,0.76-0.03,1.52-0.1,2.27  c-0.85-2.69-4.91-3.69-4.91-3.69s-0.13,5.78,4.68,5.48c-0.28,1.69-0.73,3.35-1.34,4.95c-0.19-4.03-5.79-6.33-5.79-6.33  s-1.33,7.55,5.01,8.16c-0.38,0.8-0.8,1.57-1.25,2.32c-0.56,0.95-1.21,1.84-1.89,2.71c0.97-3.99-3.96-7.72-3.96-7.72  s-3.18,6.94,2.73,9.15c-0.38,0.43-0.8,0.81-1.2,1.21c-0.21,0.2-0.43,0.38-0.64,0.58l-0.32,0.29c-0.11,0.09-0.22,0.18-0.33,0.27  l-0.67,0.54l-0.7,0.51c-0.08,0.05-0.16,0.11-0.23,0.16c1.62-3.42-2.07-7.77-2.07-7.77s-4.21,5.55,0.49,8.78  c-1.34,0.79-2.74,1.45-4.2,1.98c1.91-2.59-0.23-6.89-0.23-6.89s-4.66,3.77-1.52,7.46c-1.15,0.33-2.33,0.57-3.51,0.74  c1.46-1.68,0.55-4.83,0.55-4.83s-3.7,2.03-2.18,5c-0.52,0.03-1.05,0.07-1.57,0.06c-0.29,0-0.57,0.01-0.86,0l-0.86-0.04  c-0.85-0.06-1.7-0.15-2.54-0.28l0.68-0.27l0.42-0.17l0.41-0.19l0.82-0.38c0,0,0.01,0,0.01,0c0.39-0.18,0.55-0.65,0.37-1.03  c-0.18-0.39-0.65-0.55-1.03-0.37l-0.04,0.02l-0.77,0.37l-0.39,0.18l-0.39,0.16l-0.79,0.33l-0.8,0.29l-0.4,0.14l-0.41,0.12L40,53.6  l-0.51-0.15l-0.41-0.12l-0.4-0.14l-0.8-0.29l-0.79-0.33l-0.39-0.16l-0.39-0.18l-0.77-0.37l-0.04-0.02c0,0,0,0-0.01,0  c-0.39-0.18-0.85-0.01-1.03,0.38c-0.18,0.39-0.01,0.85,0.38,1.03l0.82,0.38l0.41,0.19l0.42,0.17l0.68,0.27  c-0.84,0.14-1.69,0.22-2.54,0.28l-0.86,0.04c-0.29,0.01-0.57,0-0.86,0c-0.53,0.01-1.05-0.03-1.57-0.06c1.51-2.98-2.18-5-2.18-5  s-0.92,3.15,0.55,4.83c-1.19-0.16-2.36-0.41-3.51-0.74c3.15-3.7-1.52-7.46-1.52-7.46s-2.14,4.31-0.23,6.89  c-1.46-0.53-2.86-1.19-4.2-1.98c4.7-3.22,0.49-8.78,0.49-8.78s-3.69,4.34-2.07,7.77c-0.08-0.05-0.16-0.1-0.23-0.16l-0.7-0.51  l-0.67-0.54c-0.11-0.09-0.23-0.18-0.33-0.27l-0.32-0.29c-0.21-0.19-0.43-0.38-0.64-0.58c-0.4-0.4-0.82-0.79-1.2-1.21  c5.91-2.21,2.73-9.15,2.73-9.15s-4.93,3.73-3.96,7.72c-0.68-0.86-1.33-1.76-1.89-2.71c-0.46-0.75-0.87-1.53-1.25-2.32  c6.33-0.61,5.01-8.16,5.01-8.16s-5.6,2.31-5.79,6.33c-0.61-1.6-1.06-3.26-1.34-4.95c4.81,0.3,4.68-5.48,4.68-5.48  s-4.05,0.99-4.91,3.69c-0.07-0.76-0.1-1.51-0.1-2.27c0-0.33,0.01-0.66,0.03-1c3.11-2.01,0.98-7.09,0.98-7.09s-4.69,3.31-1.73,6.99  C7,28.46,6.99,28.82,6.98,29.18c-0.02,0.91,0.01,1.82,0.1,2.73c-1.84-2.38-6.26-1.4-6.26-1.4s2.37,5.11,6.44,2.95  c0.26,1.71,0.69,3.39,1.28,5.01C5.64,35.69,0,37.86,0,37.86s4.26,6.43,9.29,2.45c0.39,0.87,0.83,1.72,1.31,2.54  c0.47,0.83,1.01,1.63,1.58,2.4C8.71,43.7,4.11,47,4.11,47s5.7,5.1,9.56,0.08c0.04,0.04,0.07,0.08,0.11,0.12  c0.39,0.45,0.82,0.87,1.24,1.3c0.21,0.21,0.44,0.41,0.66,0.61l0.33,0.3c0.11,0.1,0.23,0.19,0.34,0.29l0.69,0.57l0.23,0.17  c-3.34-0.34-6.58,3.29-6.58,3.29s6.19,3.47,8.69-1.83c1.2,0.75,2.47,1.41,3.78,1.96c-2.76,0.6-4.62,4.13-4.62,4.13  s5.89,1.62,6.98-3.26c1.03,0.32,2.07,0.58,3.13,0.78c-1.63,0.99-2.39,3.38-2.39,3.38s4.31,0.39,4.61-3.07  c0.07,0.01,0.14,0.02,0.21,0.02c0.6,0.04,1.2,0.1,1.8,0.09c0.3,0,0.6,0.02,0.9,0.01l0.9-0.03c1.2-0.07,2.41-0.18,3.59-0.42  l0.45-0.08c0.15-0.03,0.29-0.07,0.44-0.1L40,55.13l0.81,0.19c0.15,0.03,0.29,0.07,0.44,0.1l0.45,0.08c1.18,0.23,2.39,0.35,3.59,0.42  l0.9,0.03c0.3,0.01,0.6-0.01,0.9-0.01c0.6,0,1.2-0.06,1.8-0.09c0.07-0.01,0.14-0.02,0.21-0.02c0.31,3.45,4.61,3.07,4.61,3.07  s-0.76-2.39-2.39-3.38c1.06-0.2,2.11-0.46,3.13-0.78c1.09,4.88,6.98,3.26,6.98,3.26s-1.86-3.52-4.62-4.13  c1.31-0.55,2.57-1.21,3.78-1.96c2.5,5.3,8.69,1.83,8.69,1.83s-3.24-3.63-6.58-3.29l0.23-0.17l0.69-0.57  c0.11-0.1,0.23-0.19,0.34-0.29l0.33-0.3c0.22-0.2,0.45-0.4,0.66-0.61c0.42-0.43,0.85-0.84,1.24-1.3c0.03-0.04,0.07-0.08,0.11-0.12  C70.19,52.1,75.89,47,75.89,47s-4.6-3.31-8.08-1.75c0.57-0.77,1.11-1.56,1.58-2.4C69.88,42.03,70.31,41.18,70.71,40.31z"/>
  </svg>
    <foreignObject width="230" height="35" style="font-size: 14px;color: rgb(67, 39, 135);font-family: Arial;font-weight: 700;text-align: left;letter-spacing: 0em;line-height: 1.5;" x="64" y="24">
      <div xmlns="http://www.w3.org/1999/xhtml">#${bestRanking} Repository Of The Day</div>
    </foreignObject>
    <foreignObject width="141" height="36" style="font-size: 18px;color: rgb(74, 14, 153);font-family: Arial;font-weight: 400;text-align: center;letter-spacing: 0em;line-height: 1.5;" x="-36" y="9">
      <div xmlns="http://www.w3.org/1999/xhtml">${bestRanking}</div>
    </foreignObject>
  </svg>`

  return new Response(svg, {
    status: 200,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Download-Options': 'noopen',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Permitted-Cross-Domain-Policies': 'none',
      'X-Xss-Protection': '1; mode=block',
      'Content-Type': 'image/svg+xml',
    },
  })
}
