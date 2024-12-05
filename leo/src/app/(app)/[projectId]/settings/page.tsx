<<<<<<< HEAD
<<<<<<< HEAD
import { HiPauseCircle, HiTrash } from 'react-icons/hi2'

import db from '@/packages/database'

import { $ProjectDelete } from '@/actions/project/delete'
import { $ProjectPause } from '@/actions/project/pause'
import $ProjectUpdate from '@/actions/project/update'

import AddDiscordServer from './discord/add'
import DiscordPanel from './discord/panel'
import AddGitHubRepo from './github/add'
import GithubPanel from './github/panel'
import Button from '@/components/Button'
import ModalWrapper from '@/components/Modal/ModalWrapper'
import SingleInputForm from '@/components/SingleInputForm'
import getUser from '@/utils/getUser'

export const metadata = {
  title: 'Settings',
  description: 'Configure your project settings',
}

export default async function ProjectSettings(props: {
  params: { projectId: string }
  searchParams: { modal?: string }
}) {
  const user = await getUser()

  const { projectId } = props.params
  const project = await db.read<ProjectRecordType>({
    table: 'Projects',
    key: { id: projectId },
  })

  return (
    <main className="mx-auto max-w-[1000px] pt-12">
      <div className="grid grid-cols-5 gap-8">
        <SingleInputForm
          formAction={$ProjectUpdate}
          formClass="col-span-3"
          label="Project Name"
          defaultValue={project.name}
        />
        <Button
          disabled
          className="mt-7"
          variant="secondary"
          onClick={$ProjectPause}
        >
          <HiPauseCircle className="mr-2 inline align-[-2px]" />
          Pause Project
        </Button>
        <Button
          disabled
          className="mt-7"
          variant="danger"
          onClick={$ProjectDelete}
        >
          <HiTrash className="mr-2 inline align-[-2px]" />
          Delete Project
        </Button>
      </div>

      <GithubPanel github={project.github} />

      <DiscordPanel discord={project.discord} />

      <ModalWrapper
        modalId={props.searchParams.modal || ''}
        modals={{
          github: AddGitHubRepo,
          discord: AddDiscordServer,
        }}
      />
    </main>
  )
}
=======
import Button from "@/components/Button";
import Input from "@/components/Input";
import { HiTrash } from "react-icons/hi2";
import DiscordSettings from "./DiscordSettings";
=======
import { HiTrash } from 'react-icons/hi2'

import db from '@/packages/database'

import DiscordSettings from './DiscordSettings'
import GithubSettings from './GithubSettings'
import Button from '@/components/Button'
import Input from '@/components/Input'
<<<<<<< HEAD
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
=======
import getUser from '@/utils/getUser'
>>>>>>> b030934 (progress)

export const metadata = {
  title: 'Settings',
  description: 'Configure your project settings',
}

export default async function ProjectSettings(props: {
  params: { projectId: string }
}) {
  const { user } = getUser()
  const { projectId } = props.params
  const project = await db.read<ProjectRecordType>({
    table: 'Projects',
    key: { id: projectId, userId: user?.id },
  })

  console.log({ project })
  // TODO - Add Empty Actions

  return (
    <main className="mx-auto max-w-[1000px] pt-12">
      <div className="grid grid-cols-5 gap-8">
        <Input
          label="Project Name"
          wrapperClass="col-span-3"
          defaultValue={project.name}
        />
        <Button className="mt-7 bg-neutral-800 text-sm text-white">
          <HiTrash className="mr-2 inline align-[-2px]" />
          Pause Project
        </Button>
        <Button className="mt-7 bg-red-800 text-sm text-white">
          <HiTrash className="mr-2 inline align-[-2px]" />
          Delete Project
        </Button>
      </div>

      <GithubSettings github={project.github} />

      <DiscordSettings discord={project.discord} />
    </main>
  )
}
<<<<<<< HEAD

// TODO - Configure Preview Links and Staging Links
<<<<<<< HEAD
>>>>>>> aab19bd (init)
=======
// TODO - Do a GitHub Project Setup Checks in Settings:
// GitHub Branch Protection, Tags Protection, Prettier Config, Style Guide (Only Warnings), Dependency Updates Available, Security Scanning & Vulnerability Checks, Environments
>>>>>>> c6904e7 (progress)
=======
>>>>>>> b030934 (progress)
