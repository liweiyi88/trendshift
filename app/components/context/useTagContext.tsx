import { Tag } from '@/app/lib/tag'
import { createContext, useContext, useState } from 'react'

interface TagContextProviderProps {
  tags: Tag[]
  children: React.ReactNode
}

interface TagContext {
  tags: Tag[]
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>
}

const TagContext = createContext<TagContext | null>(null)

export const TagContextProvider = ({
  tags,
  children,
}: TagContextProviderProps) => {
  const [prevTags, setPrevTags] = useState<Tag[]>(tags)

  return (
    <TagContext.Provider
      value={{
        tags: prevTags,
        setTags: setPrevTags,
      }}
    >
      {children}
    </TagContext.Provider>
  )
}

export const useTagContext = () => {
  const context = useContext(TagContext)
  if (!context) {
    throw new Error(
      'useRepositoryContext must be used within a TagContextProvider',
    )
  }

  return context
}
