'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
const GoBackButton = () => {
  const router = useRouter()
  return (
    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
      <button
        type="button"
        className="mt-3 inline-flex w-full py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:underline sm:col-start-1 sm:mt-0"
        onClick={() => {
          router.back()
        }}
      >
        {`<-`} Go back
      </button>
    </div>
  )
}

export default GoBackButton
