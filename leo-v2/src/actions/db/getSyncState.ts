'use server'

import { auth } from '@/auth'
import db from '@/packages/database'

export default async function $DbGetSyncState(props: {
  userId: string
  version: number
  deviceId: string
}) {
  // TODO: Validate Params using `superstruct`
  const { userId, version, deviceId } = props
  const user = await auth()
  const _userId = user?.user.id

  if (userId !== _userId) throw 'Unauthorized'

  const SyncState = await db.read<SyncStatusRecord>({
    tableName: 'SyncStatus',
    key: { userId, deviceId },
  })

  // TODO: Compare versions

  return SyncState || null
}

type SyncStatusRecord = {
  userId: string
  version: number
  deviceId: string
  lastSynced: string
  records: {
    [key: string]: string[]
  }
}
