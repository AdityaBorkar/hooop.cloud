'use client'

import { useParams } from 'next/navigation'

import $ProjectLinkGithubRepo from '@/actions/project/link/githubRepo'
import Button from '@/components/Form/Button'
import SelectInput from '@/components/Form/SelectInput'
import useForm from '@/hooks/useForm'

export default function AddGitHubRepoForm({
  repos,
}: {
  repos: { id: string; name: string }[]
}) {
  const { projectId } = useParams()
  const { isPending, Form } = useForm({
    action: $ProjectLinkGithubRepo,
  })

  // TODO: Repos that have been used in the current project must be disabled

  return (
    <Form className="">
      <h3 className="mb-4 text-lg font-medium text-neutral-200">
        Connect GitHub Repository
      </h3>
      <input type="hidden" name="projectId" value={projectId} />
      <SelectInput list={repos} label="GitHub Repository" name="repoName" />
      <Button
        loading={isPending}
        className="mt-4"
        variant="green"
        type="submit"
      >
        Link Repository
      </Button>
    </Form>
  )
}
