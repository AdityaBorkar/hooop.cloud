import type { ReplocalDynamoDBSchema } from '../ddb/types'
import type {
  InferIDBPDatabase,
  LocalDbConfigType,
  LocalDbConfigType_WORKAROUND,
} from '../idb/types'
import type { DatabaseStatusType } from '../utils'

import { createContext } from 'react'

import buildHook from '../react/constructHook'
import buildProvider from '../react/constructProvider'
import { metaSchema } from '../utils'

export function NewReplocalDb_DDB_IDB<
  InputSchemaType extends ReplocalDynamoDBSchema,
>(inputSchema: ReplocalDynamoDBSchema) {
  // TODO - GENERATE SCHEMA FOR SST
  // const SERVER_DB_CONFIG = inputSchema

  // Schema:
  // @ts-expect-error
  const LocalDbTables: LocalDbConfigType_WORKAROUND<
    keyof InputSchemaType['tables']
  > = {}
  for (const tableName in inputSchema.tables) {
    const table = inputSchema.tables[tableName]
    if (!table.localSync) continue
    // @ts-expect-error
    LocalDbTables[tableName] = {
      key: table.hashKey,
      value: table.fields,
      indexes: table.localSync.indexes || {},
      localSync: {
        init: table.localSync.init,
        strategy: table.localSync.strategy,
      },
    }
  }

  // Config:
  const LOCAL_DB_CONFIG = {
    version: inputSchema.version === 'dev' ? 20 : inputSchema.version,
    tables: { ...metaSchema, ...LocalDbTables },
  } as const satisfies LocalDbConfigType
  type LocalDbConfig = typeof LOCAL_DB_CONFIG

  // Context:
  const DbContext = createContext<{
    status: DatabaseStatusType
    database: null | InferIDBPDatabase<LocalDbConfig>
  }>({
    status: 'connecting',
    database: null,
  })

  // Return:
  return {
    useDatabase: buildHook<LocalDbConfig>({ DbContext }),
    DatabaseProvider: buildProvider<LocalDbConfig>({
      DbConfig: LOCAL_DB_CONFIG,
      DbContext,
    }),
  }
}
