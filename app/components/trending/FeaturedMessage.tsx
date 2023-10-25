import React from 'react'

interface Props {
  featuredCount?: number
  searchRange?: number
}

const period = (searchRange?: number): string => {
  if (!searchRange) {
    return 'of all days.'
  }

  if (searchRange === 1) {
    return 'of today.'
  }

  if (searchRange === 360) {
    return 'over past a year.'
  }

  return `over past ${searchRange} days.`
}

const FeaturedMessage = ({ featuredCount, searchRange }: Props) => {
  return (
    <div className="text-sm text-gray-500">
      Featured on GitHub Trending{' '}
      <span className="text-indigo-600 font-semibold relative group">
        {featuredCount}
      </span>{' '}
      times {period(searchRange)}
    </div>
  )
}

export default FeaturedMessage
