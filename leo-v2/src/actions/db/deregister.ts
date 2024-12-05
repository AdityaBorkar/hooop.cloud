'use server'

import { auth } from '@/auth'
import db from '@/packages/database'

export default async function $DbDeregister({
  deviceId,
}: { deviceId: string }) {
  const user = await auth()
  const userId = user?.user.id as string
  if (!userId) throw new Error('User not found')

  const status = await db.remove({
    tableName: 'SyncStatus',
    key: { userId, deviceId },
  })
  if (!status) throw new Error('DB Deregister failed')
  return status
}
