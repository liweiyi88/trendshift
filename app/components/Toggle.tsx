import React from 'react'

interface Props {
  enabled: boolean
  text: string
  onToggle: () => void
}

const Toggle = ({ enabled, text, onToggle }: Props) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-4 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
      role="switch"
      aria-checked="false"
    >
      <span className="sr-only">{text}</span>

      <span
        aria-hidden="true"
        className={`${
          enabled ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      ></span>
    </button>
  )
}

export default Toggle
