'use server'

import { redirect } from 'next/navigation'
import { is } from 'superstruct'

import db from '@/packages/database'

import { CreateProjectSchema } from '@/schemas/CreateProjectSchema'

import getUser from '@/utils/getUser'

export async function CreateProjectAction(formData: FormData) {
  const data = Object.keys(CreateProjectSchema.schema).reduce(
    (data, key) => {
      data[key] = formData.get(key)
      return data
    },
    {} as { [key: string]: any },
  )
  console.log('CreateProjectAction', data)

  const { user } = getUser()
  if (!user) return { error: 'Not Authenticated' }
  else if (!is(data, CreateProjectSchema))
    return { error: 'Invalid Data Format' }

  // TODO - Convert slug to lowercase in schema

  // TODO - DISALLOW CREATION IS SLUG ALREADY EXISTS

  const projectData = {
    ...data,
    github: [],
    discord: [],
    status: 'OK',
    id: data.slug,
    userId: user.id,
  } satisfies ProjectRecordType
  const creationStatus = await db.create({
    table: 'Projects',
    data: projectData,
  })
  if (!creationStatus) return { error: 'Failed to Create Project' }

  return redirect(`/${data.slug}`)
}

// const repos = await getAllRepos(github)
// const isAccessible = repos.filter(
//   (repo) => repo.full_name === data.githubRepo,
// )
// if (!isAccessible)
//   return {
//     error: 'Not Authorized',
//   }
