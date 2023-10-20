'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import RepositoryResults from './RepositoryResults'
import { SearchResult, search } from '@/app/lib/search'

interface Props {
  onClose: () => void
}

const debounce = (func: (query: string | undefined) => void, wait: number) => {
  let timeout: NodeJS.Timeout

  return (query: string | undefined) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(query), wait)
  }
}

const Search = ({ onClose }: Props) => {
  const [results, setResults] = useState<SearchResult[] | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const repositories = results?.map((result) => {
    return {
      id: Number(result.objectID),
      fullName: result.full_name,
    }
  })

  const searchInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    searchInput.current?.focus()

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((inputVal: string | undefined) => {
      if (inputVal) {
        search(inputVal)
          .then((data) => {
            setResults(data)
            setError(null)
          })
          .catch((e) => {
            console.error(e)
            setError(e)
          })
      }
    }, 250),
    [],
  )

  return (
    <div className="relative z-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-x-0 inset-y-0 md:inset-y-1 z-10 w-screen">
        <div className="flex justify-center text-center items-center">
          <div className="bg-gray-50 relative transform overflow-auto md:rounded text-left shadow-xl transition-all w-full sm:max-w-4xl p-6 h-screen md:h-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="flex justify-end mb-3">
                <button
                  onClick={onClose}
                  className="hover:cursor-pointer hover:underline font-medium"
                >
                  Close
                </button>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <input
                  ref={searchInput}
                  onChange={() => handleSearch(searchInput.current?.value)}
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-4 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  placeholder="Search repositories..."
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm mt-4">
                Opps, Search is not available at the moment.
              </div>
            )}

            <div className="mt-8 pt-8 border-t text-sm text-gray-700 h-[450px] pb-12">
              <RepositoryResults repositories={repositories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
