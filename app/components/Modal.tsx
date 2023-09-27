'use client'

import classNames from 'classnames'
import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
  bgColor?: string
}

export const Modal = ({ children, bgColor }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <div
            className={classNames(
              bgColor ? bgColor : 'bg-white',
              'relative transform overflow-auto rounded-lg  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
