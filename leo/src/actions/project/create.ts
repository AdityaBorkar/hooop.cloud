'use server'

import { is } from 'superstruct'

import db from '@/packages/database'

import { CreateProjectSchema } from '@/schemas/CreateProjectSchema'
import createJsonFromSchema from '@/utils/createJsonFromSchema'
import getUser from '@/utils/getUser'

export async function $ProjectCreate(formData: FormData) {
  const user = await getUser()
  if (!user) return { error: 'Not Authenticated' }

  const data = createJsonFromSchema({ schema: CreateProjectSchema, formData })
  if (!is(data, CreateProjectSchema)) return { error: 'Invalid Data Format' }

  const existingProject = await db.read({
    table: 'Projects',
    key: { id: data.slug },
  })
  if (existingProject) return { error: 'Slug Already Exists' }

  const projectData = {
    ...data,
    github: [],
    discord: [],
    status: 'OK',
    id: data.slug,
    accessList: [user.id],
    createdBy: user.id,
    createdAt: new Date().valueOf(),
  } satisfies ProjectRecordType

  // -------------
  // TODO: MAKE IT A TRANSACTION:
  const projectCreationStatus = await db.create({
    table: 'Projects',
    data: projectData,
  })
  if (!projectCreationStatus) return { error: 'Failed to Create Project' }

  const userUpdationStatus = await db.update({
    table: 'Users',
    key: { id: user.id },
    appendList: {
      projectList: [
        {
          id: data.slug,
          slug: data.slug,
          name: data.name,
          status: 'OK',
          organization: data.organization,
        },
      ],
    },
  })
  if (!userUpdationStatus) return { error: 'Failed to Create Project' }
  // -------------

  return { success: 'Project created successfully.', redirect: `/${data.slug}` }
}
