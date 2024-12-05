import { NewReplocalDb_DDB_IDB } from './adapters/DDB_IDB'

export type { ReplocalDynamoDBSchema, ReplocalDynamoDBQuery } from './ddb/types'
export type { ReplocalDbMigrationSchema, DatabaseStatusType } from './utils'

export const NewReplocalDatabase = {
  DDB_IDB: NewReplocalDb_DDB_IDB,
}

// export const DbRangeKey = {
//   only: (key: string) => IDBKeyRange?.only(key),
//   lessThan: (key: string) => IDBKeyRange?.upperBound(key, true),
//   lessThanOrEqualTo: (key: string) => IDBKeyRange?.upperBound(key),
//   greaterThan: (key: string) => IDBKeyRange?.lowerBound(key, true),
//   greaterThanOrEqualTo: (key: string) => IDBKeyRange?.lowerBound(key),
//   bound: (
//     lower: { key: string; include: boolean },
//     upper: { key: string; include: boolean },
//   ) => IDBKeyRange?.bound(lower.key, upper.key, lower.include, upper.include),
// }
