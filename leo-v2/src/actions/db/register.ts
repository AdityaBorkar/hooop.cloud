'use server'

import db from '@/packages/database'

import { auth } from '@/auth'
import { DatabaseSchema } from '@/replocal'
import { createId } from '@paralleldrive/cuid2'

export default async function $DbRegister({ version }: { version: number }) {
  const user = await auth()
  const userId = user?.user.id as string
  if (!userId) throw new Error('User not found')

  const data: {
    userId: string
    version: number
    deviceId: string
    lastSynced: string
    records: { [key: string]: string[] }
  } = {
    userId,
    version,
    deviceId: createId(),
    lastSynced: new Date().toISOString(),
    records: {},
  }
  for (const tableName in DatabaseSchema.tables) {
    // @ts-expect-error
    const tableSchema = DatabaseSchema.tables[tableName]
    if (tableSchema.localOnly || !tableSchema.localSync) continue
    data.records[tableName] = []
  }

  const status = await db.create({ table: 'SyncStatus', data })
  if (!status) throw new Error('DB Register failed')
  return data
}
