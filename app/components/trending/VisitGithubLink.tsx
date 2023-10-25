import Link from 'next/link'
import React from 'react'

interface Props {
  uri: string
}

const VisitGithubLink = ({ uri }: Props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>

      <Link
        className="hover:cursor-pointer hover:underline"
        href={`https://github.com/${uri}`}
        target="_blank"
        scroll={true}
      >
        Visit GitHub
      </Link>
    </>
  )
}

export default VisitGithubLink
