import type { UserType } from '../utils'
import type { InferIDBPDatabase, LocalDbConfigType } from './types'

import $DbGetDocs from '@/actions/db/getDocs'
import $DbUpdateSyncState from '@/actions/db/update'
import { consoleLog } from '../utils'
import buildQuery from './buildQuery'
import getDeviceSyncRecord from './getDeviceSyncRecord'
import tailMqtt from './tailMqtt'

export default async function SyncLocalDatabase<
  LocalDbConfig extends LocalDbConfigType,
>({
  $user,
  schema,
  database,
}: {
  $user: UserType
  schema: LocalDbConfig
  database: InferIDBPDatabase<LocalDbConfig>
}) {
  if (database.version !== schema.version) throw 'Version Mismatch'

  const DeviceSyncData = await getDeviceSyncRecord({ database })
  const { deviceId, userId, DeviceSyncRecord, isNewDevice } = DeviceSyncData
  consoleLog('Device Recorded: ', { deviceId, userId })

  const TailMqtt = await tailMqtt({ deviceId, database })
  if (!TailMqtt) throw 'Unable to Sync Database'
  consoleLog('Tailing Live Records from ', TailMqtt.timestamp.toLocaleString())

  // // Execute Query:
  // const queries = buildQuery({ $user, schema, DeviceSyncRecord, isNewDevice })
  // consoleLog('Updating Records...')
  // const { QueryResult, timestamp } = await $DbGetDocs(queries)
  // for (const tableName in QueryResult) {
  //   const TableResults = QueryResult[tableName]
  //   if (!schema.tables[tableName]) continue
  //   const txn = database.transaction(tableName, 'readwrite')
  //   for await (const doc of TableResults) {
  //     await txn.store.put(doc)
  //   }
  //   const result = await txn.done
  //   console.log({ result })
  // }

  // // Update `DeviceSyncRecord` and `lastUpdated`
  // const updateLastSync = await $DbUpdateSyncState({
  //   userId,
  //   deviceId,
  //   lastSynced: timestamp,
  //   version: database.version,
  // })
  // if (updateLastSync)
  //   await database.put('_SyncMetadata', {
  //     key: 'lastSynced',
  //     value: timestamp.toString(),
  //     updatedAt: new Date().valueOf(),
  //   })
  // consoleLog('Updated Records.')

  // TODO: Update Optimistic Updates if they are pending:
  // const OptimisticUpdatesTable = transaction.objectStore('_OptimisticUpdates')

  return true
}
