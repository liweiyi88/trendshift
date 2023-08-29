'use client'

import React, { useState, useRef, useEffect, forwardRef } from 'react'
import CreatableSelect from 'react-select/creatable'
import { v4 } from 'uuid'
import { Repository } from '@/app/lib/repository'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

interface Props {
  repository: Repository
}

interface TagItemProps {
  isEditing: boolean
}

const TagItem = forwardRef<HTMLDivElement | null, TagItemProps>(
  ({ isEditing }, ref) => {
    if (isEditing) {
      return (
        <div ref={ref}>
          <CreatableSelect
            onChange={(options) => {
              // set the current edit tags
              console.log(options)
            }}
            onCreateOption={(input) => {
              //@TODO: create the tag.
              console.log(input)
            }}
            defaultValue={[options[2], options[0]]}
            isMulti
            options={options}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#eee',
                primary: 'black',
              },
            })}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: '12px',
                minHeight: '20px',
                borderWith: '1px',
                borderRadius: 0,
                borderSize: state.isFocused ? '1px' : '1px',
                boxShadow: 'none',
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                padding: '0',
              }),
              multiValue: (baseStyles) => ({
                ...baseStyles,
                fontSize: '12px',
                padding: '0 3px 0 3px',
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                fontSize: '12px',
                borderRadius: 0,
              }),
              multiValueLabel: (baseStyles) => ({
                ...baseStyles,
                padding: '2px 0 2px 0',
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                paddingTop: 6,
                paddingBottom: 6,
              }),
              clearIndicator: (baseStyles) => ({
                ...baseStyles,
                paddingTop: 6,
                paddingBottom: 6,
              }),
            }}
          />
        </div>
      )
    }
  },
)

TagItem.displayName = 'TagItem'

const RepositoryCard = ({ repository }: Props) => {
  const [isEditing, setEditing] = useState(false)

  const tagRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (tagRef.current && tagRef.current.contains(event.target as Node)) {
      return
    }

    setEditing(false)
    // save tags
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [tagRef])

  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-6">
      <div className="mb-4 flex justify-between">
        <div className="">
          <span className="text-base font-semibold text-blue-400">
            {repository.full_name}
          </span>
        </div>
        <div className="text-base text-gray-500">Python</div>
      </div>
      <div className="mt-3">
        {!isEditing && (
          <div
            className="flex space-x-2 text-xs hover:bg-gray-50 hover:cursor-pointer py-1"
            onClick={() => {
              setEditing(true)
            }}
          >
            {repository.tags &&
              repository.tags.map((tag) => {
                return (
                  <div className="bg-gray-200 px-2 py-1" key={v4()}>
                    {tag.name}
                  </div>
                )
              })}
          </div>
        )}
        <TagItem isEditing={isEditing} ref={tagRef} />
      </div>
    </div>
  )
}

export default RepositoryCard
