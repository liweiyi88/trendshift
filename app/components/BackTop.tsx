import React, { useEffect, useState } from 'react'
import { scrollToTop } from '../lib/scroll'

interface Props {
  visibilityHeight?: number
}

export const BackTop = ({ visibilityHeight = 400 }: Props) => {
  const [buttonVisible, setButtonVisible] = useState(false)

  useEffect(() => {
    const listener = () => {
      const visible = window.scrollY > visibilityHeight

      if (buttonVisible === visible) {
        return
      }

      setButtonVisible(visible)
    }

    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return (
    <div
      className={`fixed text-white p-1 rounded text-xs right-1 sm:right-12 bottom-12 transition duration-400 ${
        buttonVisible ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="focus:outline-none w-10 h-10 text-base cursor-pointer bg-blue-500 text-white rounded"
      >
        Top
      </button>
    </div>
  )
}
