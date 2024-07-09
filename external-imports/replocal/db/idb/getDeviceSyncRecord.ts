import type { InferIDBPDatabase, LocalDbConfigType } from './types'

import $DbDeregister from '@/actions/db/deregister'
import $DbGetSyncState from '@/actions/db/getSyncState'
import $DbRegister from '@/actions/db/register'

export default async function getDeviceSyncRecord<
  LocalDbConfig extends LocalDbConfigType,
>({ database }: { database: InferIDBPDatabase<LocalDbConfig> }) {
  const version = database.version
  const userId = (await database.get('_SyncMetadata', 'userId'))?.value
  const deviceId = (await database.get('_SyncMetadata', 'deviceId'))?.value
  const dataIntegrity = userId && deviceId

  // const lastSynced = (await database.get('_SyncMetadata', 'lastSynced'))?.value
  // TODO: Check for `lastSynced`

  if (!dataIntegrity) {
    // Erase all tables:
    const dbNames = Array.from(database.objectStoreNames)
    for (const dbName of dbNames) {
      await database.clear(dbName)
    }
  }

  const DeviceSyncRecord = dataIntegrity
    ? await $DbGetSyncState({ userId, deviceId, version })
    : await $DbRegister({ version })

  // De-register presumable corruption of data:
  if (!DeviceSyncRecord && deviceId) {
    console.error('Data Corrupted')
    await $DbDeregister({ deviceId })
  }

  // Register Device:
  await database.put('_SyncMetadata', {
    key: 'userId',
    value: DeviceSyncRecord.userId,
    updatedAt: new Date().valueOf(),
  })
  await database.put('_SyncMetadata', {
    key: 'deviceId',
    value: DeviceSyncRecord.deviceId,
    updatedAt: new Date().valueOf(),
  })

  return {
    userId: DeviceSyncRecord.userId,
    deviceId: DeviceSyncRecord.deviceId,
    isNewDevice: !dataIntegrity,
    DeviceSyncRecord,
  }
}
