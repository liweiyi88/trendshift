'use client'

import React, { useEffect, useState } from 'react'
import { Tag } from '../lib/tag'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  id: number
  fullName: string
  tags: Tag[]
}

const AskAIModal = ({ id, fullName, tags }: Props) => {
  const [prompt, setPrompt] = useState('')

  const path = usePathname()
  const router = useRouter()

  const shortDescription = 'Database dump with one command and configuration.'

  document.body.style.overflow = 'hidden'
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/liweiyi88/onedump/main/README.md',
      { method: 'GET' },
    ).then((res) => {
      res.text().then((text) => {
        setPrompt(
          `Use the following tags ${JSON.stringify(
            tags,
          )} and content ${shortDescription} ${text} and returns the json`,
        )
      })
    })

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [id, tags])

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <div className="mt-3 sm:mt-5">
                <h3
                  className="text-base font-semibold leading-6 text-gray-900 border-b pb-2"
                  id="modal-title"
                >
                  AI prompts
                </h3>
                <div className="px-2 py-3 mt-2 text-sm overflow-auto  text-gray-500 h-48 bg-gray-50 rounded-lg">
                  {prompt}
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:col-start-2"
                onClick={() => {
                  navigator.clipboard.writeText(prompt)
                }}
              >
                Copy to clipboard
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                onClick={() => {
                  router.push(path)
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskAIModal
