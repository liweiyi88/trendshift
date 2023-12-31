import classNames from 'classnames'
import React from 'react'

export interface RepositoryResult {
  id: number
  fullName: string
}

export interface DeveloperResult {
  id: number
  username: string
}

interface Props {
  isLoading: boolean
  isEmptyQuery: boolean
  repositories?: RepositoryResult[]
  developers?: DeveloperResult[]
}

const SearchResults = ({
  repositories,
  developers,
  isEmptyQuery,
  isLoading,
}: Props) => {
  if (isLoading) {
    return (
      <div className="flex items-center">
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Searching...
      </div>
    )
  }

  if (isEmptyQuery) {
    return null
  }

  if (!repositories && !developers) {
    return <>No result found</>
  }

  return (
    <>
      {repositories && repositories.length > 0 && (
        <div
          className={classNames({
            'border-b mb-4 pb-4': developers && developers.length,
          })}
        >
          <div className="mb-2 font-medium">Repositories</div>
          {repositories.map((repository) => {
            return (
              <a key={repository.id} href={`/repositories/${repository.id}`}>
                <div className="flex items-center justify-between hover:bg-gray-200 hover:cursor-pointer -mx-4 px-3 py-2 rounded text-gray-700">
                  <div className="flex items-center">
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                        />
                      </svg>
                    </span>

                    {repository.fullName}
                  </div>

                  <div className="hidden sm:block">Jump To</div>
                </div>
              </a>
            )
          })}
        </div>
      )}

      {developers && developers.length > 0 && (
        <>
          <div className="mb-2 font-medium">Developers</div>
          {developers.map((developer) => {
            return (
              <a key={developer.id} href={`/developers/${developer.id}`}>
                <div className="flex items-center justify-between hover:bg-gray-200 hover:cursor-pointer -mx-4 px-3 py-2 rounded text-gray-700">
                  <div className="flex items-center">
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>

                    {developer.username}
                  </div>

                  <div className="hidden sm:block">Jump To</div>
                </div>
              </a>
            )
          })}
        </>
      )}
    </>
  )
}

export default SearchResults
