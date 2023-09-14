'use client'

import React, { useRef, useEffect, useReducer } from 'react'
import CreatableSelect from 'react-select/creatable'
import { v4 } from 'uuid'
import { Repository } from '@/app/lib/repository'
import { useTagContext } from './context/useTagContext'
import { Tag } from '../lib/tag'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'

interface Props {
  repository: Repository
}

interface State {
  isEditing: boolean
  isAdding: boolean
  prevRepository: Repository
  tagChanged: boolean
  isUpdating: boolean
}

type Action =
  | { type: 'editing' }
  | { type: 'edited' }
  | { type: 'adding' }
  | { type: 'added' }
  | { type: 'updateTags'; tags: Tag[] }
  | { type: 'createTag'; tag: Tag }
  | { type: 'updating' }
  | { type: 'updated' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'editing': {
      return {
        ...state,
        isEditing: true,
      }
    }
    case 'edited': {
      return {
        ...state,
        isEditing: false,
      }
    }
    case 'adding': {
      return {
        ...state,
        isAdding: true,
      }
    }
    case 'added': {
      return {
        ...state,
        isAdding: false,
      }
    }
    case 'updateTags': {
      return {
        ...state,
        tagChanged: true,
        prevRepository: {
          ...state.prevRepository,
          tags: [...action.tags],
        },
      }
    }
    case 'createTag': {
      return {
        ...state,
        prevRepository: {
          ...state.prevRepository,
          tags: [...state.prevRepository.tags, action.tag],
        },
      }
    }
    case 'updating': {
      return {
        ...state,
        isUpdating: true,
      }
    }
    case 'updated': {
      return {
        ...state,
        isUpdating: false,
        tagChanged: false,
      }
    }
    default: {
      throw Error('Unknown action')
    }
  }
}

interface TagsBarProps {
  isUpdating: boolean
  tags: Tag[]
}

const TagsBar = ({ isUpdating, tags }: TagsBarProps) => {
  if (isUpdating) {
    return <div>updating...</div>
  }

  if (tags.length > 0) {
    return tags.map((tag) => {
      return (
        <div className="bg-gray-200 px-2 py-1" key={v4()}>
          {tag.name}
        </div>
      )
    })
  }

  return <div className="py-1">+ Add tags</div>
}

const RepositoryCard = ({ repository }: Props) => {
  const [
    { isAdding, isEditing, tagChanged, prevRepository, isUpdating },
    dispatch,
  ] = useReducer(reducer, {
    isEditing: false,
    isAdding: false,
    prevRepository: repository,
    tagChanged: false,
    isUpdating: false,
  })

  const { tags, setTags } = useTagContext()

  const tagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = async (event: MouseEvent) => {
      if (tagRef.current && tagRef.current.contains(event.target as Node)) {
        return
      }

      if (isEditing) {
        dispatch({
          type: 'edited',
        })
      }

      if (tagChanged) {
        dispatch({
          type: 'updating',
        })

        fetch(`/api/repositories/${prevRepository.repository_id}`, {
          method: 'PUT',
          body: JSON.stringify([...prevRepository.tags]),
        })
          .catch((e) => {
            console.log(e)
          })
          .finally(() => {
            dispatch({
              type: 'updated',
            })
          })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [prevRepository.repository_id, prevRepository.tags, tagChanged, isEditing])

  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
      <div className="mb-4 flex justify-between items-center">
        <div className="">
          <span className="text-sm text-blue-400">
            <Link
              href={`https://github.com/${prevRepository.full_name}`}
              target="_blank"
            >
              {prevRepository.full_name}
            </Link>
          </span>
        </div>
        <div className="text-xs text-gray-400">{prevRepository.language}</div>
      </div>
      <div className="mt-3 border-b mb-4">
        {isEditing && (
          <div ref={tagRef}>
            <CreatableSelect
              onChange={(options) => {
                const updatedTags = options.map((option) => {
                  return { name: option.label, id: Number(option.value) }
                })

                dispatch({
                  type: 'updateTags',
                  tags: updatedTags,
                })
              }}
              isDisabled={isAdding}
              isLoading={isAdding}
              onCreateOption={async (input) => {
                dispatch({
                  type: 'adding',
                })
                try {
                  const res = await fetch('/api/tags', {
                    method: 'POST',
                    body: JSON.stringify({ name: input }),
                  })

                  const tag = await res.json()
                  setTags((prevTags) => [...prevTags, tag])

                  dispatch({
                    type: 'createTag',
                    tag,
                  })

                  dispatch({
                    type: 'updateTags',
                    tags: [...prevRepository.tags, tag],
                  })
                } catch (e) {
                  console.error(e)
                } finally {
                  dispatch({
                    type: 'added',
                  })
                }
              }}
              value={prevRepository.tags.map((tag) => {
                return { value: String(tag.id), label: tag.name }
              })}
              isMulti
              options={tags.map((tag) => {
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
              dispatch({
                type: 'editing',
              })
            }}
          >
            <TagsBar tags={prevRepository.tags} isUpdating={isUpdating} />
          </div>
        )}
      </div>

      <Link
        href={`/repository/ask-ai/${repository.id}?name=${repository.full_name}`}
        scroll={false}
        className="text-blue-500 text-xs font-semibold rounded hover:underline"
      >
        <span className="pr-1">Ask AI</span>
        <FontAwesomeIcon icon={faBoltLightning} className="text-yellow-400" />
      </Link>
    </div>
  )
}

export default RepositoryCard
