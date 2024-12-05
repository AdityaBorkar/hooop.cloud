'use server'

import { is, object, string } from 'superstruct'

import db from '@/packages/database'

import getInstallationId from '@/external-api/github/getInstallationId'
import getReposAccessibleByApp from '@/external-api/github/getReposAccessibleByApp'
import createJsonFromSchema from '@/utils/createJsonFromSchema'
import getUser from '@/utils/getUser'

const ProjectLinkGithubRepoSchema = object({
  projectId: string(),
  repoName: string(),
})

export default async function $ProjectLinkGithubRepo(formData: FormData) {
  const user = await getUser()
  if (!user) return { error: 'Not Authenticated' }

  const data = createJsonFromSchema({
    schema: ProjectLinkGithubRepoSchema,
    formData,
  })
  if (!is(data, ProjectLinkGithubRepoSchema))
    return { error: 'Check Form Inputs' }

  const { accessToken, userName } = user
  const installationId = await getInstallationId({ accessToken })
  const ownedRepos = await getReposAccessibleByApp({
    userName,
    accessToken,
    installationId,
  })
  const repo = ownedRepos.find(repo => repo.full_name === data.repoName)
  if (!repo) return { error: 'Repository not accessible by app' }

  // TODO: Check for permissions, default branch
  // default_branch: 'main'
  // permissions: { admin: true, maintain: true, push: true, triage: true, pull: true }
  // https://api.github.com/repos/AdityaBorkar/AdityaBorkar/branches{/branch}

  // TODO: Check if repo is already added
  const updationStatus = await db.update({
    tableName: 'Projects',
    key: { id: data.projectId },
    appendList: { github: [{ id: repo.id, full_name: repo.full_name }] },
  })
  if (!updationStatus) return { error: 'Failed to link repo' }

  // TODO: Start Running Checks

  // TODO - Revalidate Tag
  return {
    success: 'GitHub Repository Linked Successfully',
    redirect: `settings`,
  }
}
