import { Modal } from '@/app/components/Modal'
import { PageProps } from '@/app/lib/pagetypes'
import React from 'react'
import { Metadata } from 'next'
import CloseButton from '../../components/CloseButton'
import { getDeveloper } from '@/app/lib/developer'
import DeveloperDetail from '@/app/(site)/components/DeveloperDetail'

export const metadata: Metadata = {
  title: 'Trendshift - Trending Developer Details',
  description: 'Trending developer details.',
  keywords: ['github', 'trending', 'developer'],
}

const RepositoryModal = async ({
  params: { id },
}: PageProps<{ id: number }>) => {
  const developer = await getDeveloper(id)

  return (
    <Modal bgColor="bg-gray-50">
      <div className="max-h-[600px]">
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <div className="font-semibold text-lg">Developer Details</div>
          <CloseButton />
        </div>

        <DeveloperDetail developer={developer} />
      </div>
    </Modal>
  )
}

export default RepositoryModal
