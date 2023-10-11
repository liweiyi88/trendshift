import React from 'react'
import { getLanguageColor } from '../lib/config'

interface Props {
  language: string
}

const Language = ({ language }: Props) => {
  const languageColor = getLanguageColor(language)

  return (
    <div className="text-gray-500 flex items-center text-xs md:text-sm">
      <span
        className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-1 shrink-0"
        style={{
          backgroundColor: languageColor,
        }}
      ></span>
      {language}
    </div>
  )
}

export default Language
