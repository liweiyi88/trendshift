'use client'

import React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'

interface Props {
  toggle: () => void
}

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const MobileNavToggle = ({ toggle }: Props) => {
  return (
    <button
      onClick={toggle}
      className="flex items-center md:hidden text-gray-500 border border-gray-300 bg-gray-50  p-2 text-sm rounded"
    >
      <svg width="16" height="16" viewBox="0 0 20 20" fill="current">
        <Path
          strokeWidth={1}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          strokeWidth={1}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          strokeWidth={1}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  )
}

export default MobileNavToggle
