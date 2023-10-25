'use client'

import React, { useState } from 'react'
import { config } from '@/app/lib/config'

interface Props {
  id: number
  name: string
  type: 'repository' | 'developer'
}

const EmbedBadgeBtn = ({ id, name: name, type }: Props) => {
  const [copied, setCopied] = useState(false)

  const opacity = copied ? 'opacity-100' : 'opacity-0'

  const uri = type === 'repository' ? 'repositories' : 'developers'

  return (
    <>
      <button
        onClick={() => {
          const embedCode = `<a href="${
            config.host
          }/${uri}/${id}" target="_blank"><img src="${
            config.host
          }/api/badge/${uri}/${id}" alt="${encodeURIComponent(
            name,
          )} | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>`
          navigator.clipboard.writeText(embedCode)

          setCopied(true)

          setTimeout(() => {
            setCopied(false)
          }, 2000)
        }}
        className="hover:underline"
      >
        Embed Badge
      </button>
      <span
        className={`${opacity} bg-gray-700 transition duration-200 text-white px-2 rounded text-xs ml-2 hover:cursor-default`}
      >
        Link copied
      </span>
    </>
  )
}

export default EmbedBadgeBtn
