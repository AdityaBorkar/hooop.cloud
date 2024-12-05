'use server'

import { auth } from '@/auth'
import db from '@/packages/database'

export default async function $DbUpdateSyncState(props: {
  userId: string
  version: number
  deviceId: string
  lastSynced: string
}) {
  // TODO: Validate Params using `superstruct`
  const { userId, version, deviceId } = props
  const user = await auth()
  const _userId = user?.user.id
  if (userId !== _userId) throw 'Unauthorized'

  const lastSynced = props.lastSynced
  if (!lastSynced) throw 'Invalid Params'

  const status = await db.update({
    tableName: 'SyncStatus',
    key: { userId, deviceId },
    set: { lastSynced },
  })

  // TODO: Compare versions

  return status
}
