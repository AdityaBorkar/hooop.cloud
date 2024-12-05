'use server'

import db from '@/database'
import { CreateProjectSchema } from '@/schemas/CreateProjectSchema'
import ValidateApiEndpoint from '@/utils/ValidateApiEndpoint'

// TODO: Replace `FormData` with `CreateProjectSchema`
export async function $ProjectCreate(formData: FormData) {
  const ApiValidationResult = await ValidateApiEndpoint({
    formData,
    auth: true,
    schema: CreateProjectSchema,
  })
  if (ApiValidationResult.error) return ApiValidationResult.error
  const { user, data } = ApiValidationResult

  const existingProject = await db.read({
    tableName: 'Projects',
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

  // TODO: MAKE IT A TRANSACTION:
  //   Put — Initiates a PutItem operation to create a new item or replace an old item with a new item, conditionally or without specifying any condition.
  // Update — Initiates an UpdateItem operation to edit an existing item's attributes or add a new item to the table if it does not already exist. Use this action to add, delete, or update attributes on an existing item conditionally or without a condition.
  // Delete — Initiates a DeleteItem operation to delete a single item in a table identified by its primary key.
  // ConditionCheck — Checks that an item exists or checks the condition of specific attributes of the item.

  const status = await db.txnWrites(db => {
    db.put({
      table: 'Projects',
      data: projectData,
    })
    db.update({
      tableName: 'Users',
      key: { id: user.id },
      appendList: { projectList: [data.slug] },
    })
  })

  if (!status) return { error: 'Failed to Create Project' }
  return { success: 'Project created successfully.', redirect: `/${data.slug}` }
}
