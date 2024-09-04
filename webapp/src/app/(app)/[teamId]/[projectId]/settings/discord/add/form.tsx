'use client'

import $ProjectLinkGithubRepo from '@/actions/project/link/githubRepo'
import Button from '@/components/Form/Button'
import SelectInput from '@/components/Form/SelectInput'
import useForm from '@/hooks/useForm'

export default function AddDiscordServerForm({
  repos,
}: {
  repos: { id: string; name: string }[]
}) {
  const { isPending, Form } = useForm({
    action: $ProjectLinkGithubRepo,
  })

  // TODO: Repos that have been used in the current project must be disabled

  return (
    <Form className="">
      <h3 className="mb-4 text-lg font-medium text-neutral-200">
        Connect Discord Server
      </h3>
      <SelectInput list={repos} label="GitHub Repository" name="repoName" />
      <Button
        loading={isPending}
        className="mt-4"
        variant="green"
        type="submit"
      >
        Link Server
      </Button>
    </Form>
  )
}
