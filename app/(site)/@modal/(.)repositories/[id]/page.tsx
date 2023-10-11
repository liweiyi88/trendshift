import RepositoryDetail from '@/app/(site)/components/RepositoryDetail'
import { Modal } from '@/app/components/Modal'
import { PageProps } from '@/app/lib/pagetypes'
import { getRepository } from '@/app/lib/repository'
import React from 'react'
import CloseButton from './components/CloseButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trendshift - Trending Repository Details',
  description: 'Trending repository details.',
  keywords: ['github', 'trending', 'repository'],
}

const RepositoryModal = async ({
  params: { id },
}: PageProps<{ id: number }>) => {
  const repository = await getRepository(id)

  return (
    <Modal bgColor="bg-gray-50">
      <div className="max-h-[600px]">
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <div className="font-semibold text-lg">Repository Details</div>
          <CloseButton />
        </div>

        <RepositoryDetail repository={repository} />
      </div>
    </Modal>
  )
}

export default RepositoryModal
