'use client'

import type { StoreNames } from 'idb'
import type { Context } from 'react'
import type {
  InferIDBPDatabase,
  InferIDBSchema,
  LocalDbConfigType,
} from '../idb/types'
import type { DatabaseStatusType } from '../utils'

import React, { useContext } from 'react'

export default function buildHook<LocalDbConfig extends LocalDbConfigType>({
  DbContext,
}: {
  DbContext: Context<{
    database: null | InferIDBPDatabase<LocalDbConfig>
    status: DatabaseStatusType
  }>
}) {
  return function useDatabase() {
    const { status, database } = useContext(DbContext)
    if (!status)
      throw 'useDatabase() is called outside of <DatabaseProvider> context'

    type TableNames = StoreNames<InferIDBSchema<LocalDbConfig['tables']>>

    async function read({
      tableName,
      keyRange,
    }: {
      tableName: TableNames
      keyRange: IDBKeyRange
    }) {
      if (status !== 'online' || !database)
        throw 'ERROR: DB NOT CONNECTED / INITIALIZED'

      // TODO: Fetch interval
      // keyRange

      // TODO: GET TYPE, IF "RANGE" FETCH "RANGE" AND COMPARE.
      // const storedRange = await database.get('_SyncMetadata', tableName)

      const SyncState = await database.get(
        '_SyncMetadata',
        IDBKeyRange.only(`table:${tableName}`),
      )
      console.log({ SyncState })

      const response = await database.get(tableName, keyRange)
      console.log('Database Read: ', { response })
      return response
    }

    return { read }

    // return use(
    //   new Promise<typeof api>((resolve) =>
    //     status !== 'connecting' ? resolve({ read, readAll }) : null,
    //   ),
    // )

    // TODO: TS improve parameters entry and make it more verbose with DynamoDB API
    // * BatchGet BatchWrite DeleteItem GetItem PutItem Query TransactGetItems TransactWriteItems

    // function readAll({ table, keyRange }: ReadProps) {
    //   if (['online', 'offline'].includes(status) || !database)
    //     throw 'ERROR: DB NOT CONNECTED / INITIALIZED'
    //   else if (table.startsWith('_'))
    //     throw 'ERROR: TABLE NAME CANNOT START WITH _'

    //   // TODO: Fetch interval
    //   // keyRange

    //   const response = use(database.getAll(table, keyRange))
    //   console.log('Database Read: ', { response })
    //   return response
    // }

    // async function query({ table, index, keyRange, allEntries }: QueryProps) {
    //   if (['online', 'offline'].includes(status) || !database)
    //     throw 'ERROR: DB NOT CONNECTED / INITIALIZED'

    //   // TODO: Fetch interval
    //   // keyRange

    //   if (allEntries)
    //     return await database.getAllFromIndex(table, index, keyRange)
    //   return await database.getAllFromIndex(table, index, keyRange)
    //   // const queryFn = allEntries
    //   //   ? database.getAllFromIndex
    //   //   : database.getFromIndex
    //   const response = await queryFn(table, index, keyRange)
    //   return response
    // }
  }
}
