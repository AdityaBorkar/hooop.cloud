import type { ReplocalDynamoDBQuery } from '../ddb/types'
import type { UserType } from '../utils'
import type { LocalDbConfigType } from './types'

export default function buildQuery<LocalDbConfig extends LocalDbConfigType>({
  $user,
  schema,
  isNewDevice,
  DeviceSyncRecord,
}: {
  $user: UserType
  schema: LocalDbConfig
  isNewDevice: boolean
  DeviceSyncRecord: SyncStatusRecord
}) {
  const queries: ReplocalDynamoDBQuery = {
    References: [],
    BatchRead: [],
    Query: [],
    Scan: [],
  }

  if (isNewDevice) {
    // Get All Records:
    for (const tableName in schema.tables) {
      const table = schema.tables[tableName]
      if (!table || !table.localSync || table.localOnly) continue

      const result = table.localSync.init({ $user }) // TODO: Make it observable
      type ResultType = typeof result

      for (const op in result) {
        const docs = result[op] as unknown as ResultType[keyof ResultType]
        if (!docs) continue
        if (!['BatchRead', 'Query', 'Scan'].includes(op)) continue

        for (const doc of docs) {
          if (typeof doc === 'string') {
            queries[op]?.push({ tableName, hashKey: doc })
          } else {
            const refId = queries.References.length
            queries.References[refId] = doc
            queries[op]?.push({ refId })
          }
        }
      }
    }
  } else {
    // TODO - Refresh Records:
    // DeviceSyncRecord.records
    // queries.BatchRead.push()
  }

  return queries
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
