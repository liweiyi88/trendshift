'use client'

import React, { useState, useRef, useEffect } from 'react'
import CreatableSelect from 'react-select/creatable'
import { v4 } from 'uuid'
import { Repository } from '@/app/lib/repository'
import { Tag } from '../lib/tag'

interface Props {
  repository: Repository
  tags: Tag[]
}

const RepositoryCard = ({ repository, tags }: Props) => {
  const [isEditing, setEditing] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [prevTags, setPrevTags] = useState<Tag[]>(tags)
  const [prevRepository, setPrevRepository] = useState<Repository>(repository)

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

  console.log(prevRepository)

  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-6">
      <div className="mb-4 flex justify-between items-center">
        <div className="">
          <span className="text-sm text-blue-400">
            {prevRepository.full_name}
          </span>
        </div>
        <div className="text-xs text-gray-400">{prevRepository.language}</div>
      </div>
      <div className="mt-3">
        {isEditing && (
          <div ref={tagRef}>
            <CreatableSelect
              onChange={(options) => {
                const updatedTags = options.map((option) => {
                  return { name: option.label, id: Number(option.value) }
                })

                setPrevRepository((prevRepository) => {
                  return {
                    ...prevRepository,
                    tags: [...updatedTags],
                  }
                })

                //@TODO: update current repository with tags.
              }}
              isDisabled={isAdding}
              isLoading={isAdding}
              onCreateOption={async (input) => {
                setIsAdding(true)
                try {
                  const res = await fetch('/api/tags', {
                    method: 'POST',
                    body: JSON.stringify({ name: input }),
                  })

                  const tag = await res.json()
                  setPrevTags((prevTags) => [...prevTags, tag])
                  setPrevRepository((prevRepository) => {
                    return {
                      ...prevRepository,
                      tags: [...prevRepository.tags, tag],
                    }
                  })
                } catch (e) {
                  console.error(e)
                } finally {
                  setIsAdding(false)
                }
              }}
              value={prevRepository.tags.map((tag) => {
                return { value: String(tag.id), label: tag.name }
              })}
              isMulti
              options={prevTags.map((tag) => {
                return { value: String(tag.id), label: tag.name }
              })}
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
        )}
        {!isEditing && (
          <div
            className="flex space-x-2 text-xs hover:bg-gray-50 hover:cursor-pointer py-1 "
            onClick={() => {
              setEditing(true)
            }}
          >
            {prevRepository.tags.length > 0 ? (
              prevRepository.tags.map((tag) => {
                return (
                  <div className="bg-gray-200 px-2 py-1" key={v4()}>
                    {tag.name}
                  </div>
                )
              })
            ) : (
              <div className="py-1">+ Add tags</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default RepositoryCard
