import AskAIModalButtons from '@/app/admin/repository/components/AskAIModalButtons'
import GoBackButton from '@/app/components/GoBackButton'
import { Modal } from '@/app/components/Modal'
import { PageProps } from '@/app/lib/pagetypes'
import { getRepository } from '@/app/lib/repository'
import { getTags } from '@/app/lib/tag'
import React from 'react'

const AskAIModal = async ({
  params: { id },
  searchParams,
}: PageProps<{ id: string }>) => {
  const tags = await getTags()

  const repositoryName = searchParams['name'] as string

  if (!repositoryName) {
    return (
      <Modal>
        Missing repository name
        <GoBackButton />
      </Modal>
    )
  }

  const repository = await getRepository(repositoryName)

  const res = await fetch(
    `https://raw.githubusercontent.com/${repository.full_name}/${repository.default_branch}/README.md`,
  )

  const readme = res.status === 200 ? await res.text() : null

  const expect = {
    id,
    tags: [],
  }

  const content = `${repository.description} ${readme}`

  const prompt = `base on ${content}", Assign "at most 3 tags" to the expected json: ${JSON.stringify(
    expect,
  )} "only from the tags list I provide: ${JSON.stringify(
    tags,
  )}" returns me the "expected json"`

  return (
    <Modal>
      <div>
        <div className="mt-3 sm:mt-5">
          <h3
            className="text-base font-semibold leading-6 text-gray-900 pb-2"
            id="modal-title"
          >
            AI prompts
          </h3>
          <div className="px-2 py-3 mt-2 text-sm overflow-auto  text-gray-500 h-48 bg-gray-50 rounded-lg">
            {prompt}
          </div>
        </div>
      </div>
      <AskAIModalButtons copyContent={prompt} />
    </Modal>
  )
}

export default AskAIModal
