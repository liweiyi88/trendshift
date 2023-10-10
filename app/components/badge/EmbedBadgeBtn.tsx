'use client'

import React, { useState } from 'react'
import { config } from '@/app/lib/config'

interface Props {
  id: number
  fullName: string
}

const EmbedBadgeBtn = ({ id, fullName }: Props) => {
  const [copied, setCopied] = useState(false)

  const opacity = copied ? 'opacity-100' : 'opacity-0'

  return (
    <>
      <button
        onClick={() => {
          const embedCode = `<a href="${
            config.host
          }/repository/${id}" target="_blank"><img src="${
            config.host
          }/api/badge/repository/${id}" alt="${encodeURIComponent(
            fullName,
          )} | GitHub Trending Insight" style="width: 250px; height: 55px;" width="250" height="55"/></a>`
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
