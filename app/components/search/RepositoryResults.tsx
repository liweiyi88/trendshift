import React from 'react'

export interface RepositoryResult {
  id: number
  fullName: string
}

interface Props {
  repositories?: RepositoryResult[]
}

const RepositoryResults = ({ repositories }: Props) => {
  if (!repositories) {
    return <></>
  }

  if (repositories.length === 0) {
    return <>No result found</>
  }

  return (
    <>
      <div className="mb-4 font-medium">Repositories</div>
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
    </>
  )
}

export default RepositoryResults
