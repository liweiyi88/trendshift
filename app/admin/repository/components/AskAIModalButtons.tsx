'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Props {
  copyContent: string
}

const AskAIModalButtons = ({ copyContent }: Props) => {
  const [clicked, setClicked] = useState(false)

  const router = useRouter()

  return (
    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:col-start-2"
        onClick={() => {
          navigator.clipboard.writeText(copyContent)
          setClicked(true)
        }}
      >
        {clicked ? 'Copied!' : 'Copy to clipboard'}
      </button>
      <button
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
        onClick={() => {
          router.back()
        }}
      >
        Cancel
      </button>
    </div>
  )
}

export default AskAIModalButtons
