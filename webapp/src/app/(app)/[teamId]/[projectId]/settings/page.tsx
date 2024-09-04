'use client'

import type { Metadata } from 'next'
import { useSession } from 'next-auth/react'
import { HiPauseCircle, HiTrash } from 'react-icons/hi2'

// import { useDatabase } from '@/packages/replocal/database'

// import { $ProjectDelete } from '@/actions/project/delete'
// import { $ProjectPause } from '@/actions/project/pause'
// import { $ProjectUpdate } from '@/actions/project/update'
// import Button from '@/components/Button'
// import { HeadMetadata } from '@/components/HeadMetadata'
// import useUser from '@/hooks/useUser'

// import AddDiscordServer from './discord/add'
// import DiscordPanel from './discord/panel'
// import AddGitHubRepo from './github/add'
// import GithubPanel from './github/panel'
// import ModalWrapper from '@/components/Modal/ModalWrapper'
// import SingleInputForm from '@/components/SingleInputForm'

// export const metadata: Metadata = { title: 'Settings' }

export default function ProjectSettings(props: {
  params: { projectId: string }
  searchParams: { modal?: string }
}) {
  // const user = useUser()
  // const idb = useDatabase()

  // const { projectId } = props.params
  // const project = idb.read({
  //   table: 'Projects',
  //   key: { id: projectId },
  // })

  // console.log({ user, project })

  return (
    <>
      {/* <HeadMetadata metadata={metadata} /> */}
      <main className="mx-auto max-w-[1000px] pt-12">
        <div className="grid grid-cols-5 gap-8">
          {/* <SingleInputForm
          formAction={$ProjectUpdate}
          formClass="col-span-3"
          label="Project Name"
          defaultValue={project.name}
        /> */}
          {/* <Button
            disabled
            className="mt-7"
            variant="secondary"
            onMouseDown={$ProjectPause}
          >
            <HiPauseCircle className="mr-2 inline align-[-2px]" />
            Pause Project
          </Button>
          <Button
            disabled
            className="mt-7"
            variant="danger"
            onMouseDown={$ProjectDelete}
          >
            <HiTrash className="mr-2 inline align-[-2px]" />
            Delete Project
          </Button> */}
        </div>

        {/* <GithubPanel github={project.github} />

        <DiscordPanel discord={project.discord} /> */}

        {/* <ModalWrapper
          modalId={props.searchParams.modal || ''}
          modals={{
            github: AddGitHubRepo,
            discord: AddDiscordServer,
          }}
        /> */}
      </main>
    </>
  )
}
