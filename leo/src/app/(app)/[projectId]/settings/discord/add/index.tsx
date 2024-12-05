import Link from 'next/link'
import { HiOutlineArrowPath } from 'react-icons/hi2'

import AddGitHubRepoForm from './form'
import Button from '@/components/Button'
import getInstallationId from '@/external-api/github/getInstallationId'
import getReposAccessibleByApp from '@/external-api/github/getReposAccessibleByApp'
import getUser from '@/utils/getUser'

export default async function AddDiscordServer() {
  const { accessToken, userName } = await getUser()
  const installationId = await getInstallationId({ accessToken })
  const repos = (
    await getReposAccessibleByApp({
      userName,
      accessToken,
      installationId,
    })
  ).map((repo) => ({ id: repo.id, name: repo.full_name }))

  return (
    <div className="relative mx-auto w-[350px] rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-neutral-200">
      {installationId ? (
        <AddGitHubRepoForm repos={repos} />
      ) : (
        <div className="text-center text-sm font-medium text-neutral-300">
          <div className="mb-20 mt-12 text-xl tracking-tighter text-neutral-700">
            GitHub Integration With Leo
          </div>

          <div>
            You need to install
            <Link
              target="_blank"
              href="https://github.com/apps/leo-by-aditya-borkar"
              className="mx-1 cursor-alias underline underline-offset-4"
            >
              "Leo GitHub App"
            </Link>
            from GitHub Marketplace to integrate GitHub Repositories and Leo.
          </div>

          <div className="mt-12 flex flex-row justify-around px-12">
            <Button variant="green">Install App</Button>
            <Button icon={HiOutlineArrowPath}>Refresh</Button>
          </div>
        </div>
      )}
    </div>
  )
}
