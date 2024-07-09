// import getAllRepos from '@/packages/github/getOwnedRepos'
// import { CreateProjectAction } from '@/actions/CreateProject'
import Button from '@/components/Form/Button'
import Input from '@/components/Form/Input'
import getUserData from '@/utils/getUserData'

export default function CreateProjectPage() {
  // const { github } = getUser()
  // const repos = await getAllRepos(github)

  return (
    <form
      className="mx-auto flex max-w-[350px] flex-col gap-6 py-16"
      // action={CreateProjectAction}
    >
      <h1 className="mb-4 text-2xl font-semibold text-neutral-200">
        Create New Project
      </h1>

      <Input label="GitHub Repository" defaultValue="" />

      <Input label="Organization Name" defaultValue="" />

      <Input label="Project Name" defaultValue="" />

      <Input label="Project Slug" defaultValue="" />

      <Button type="submit" className="mt-4 border border-neutral-700 text-sm">
        Create Project
      </Button>
    </form>
  )
}
