import type { Context } from 'react'
import type {
  InferIDBPDatabase,
  InferIDBSchema,
  LocalDbConfigType,
} from '../idb/types'
import type { DatabaseStatusType, UserType } from '../utils'

import { openDB } from 'idb'
import React, { useState } from 'react'

import MigrateSchema from '../idb/MigrateSchema'
import SyncLocalDatabase from '../idb/SyncLocalDatabase'
import { consoleLog } from '../utils'

export default function buildProvider<LocalDbConfig extends LocalDbConfigType>({
  DbConfig: schema,
  DbContext,
}: {
  DbConfig: LocalDbConfig
  DbContext: Context<{
    database: null | InferIDBPDatabase<LocalDbConfig>
    status: DatabaseStatusType
  }>
}) {
  // Types:
  type DatabaseType = InferIDBPDatabase<LocalDbConfig>
  type IdbSchemaType = InferIDBSchema<LocalDbConfig['tables']>

  // Provider:
  return function DatabaseProvider({
    dbIdPrefix,
    children,
    auth,
  }: {
    dbIdPrefix: string
    children: React.ReactNode
    auth: { getUser: () => UserType | undefined }
  }) {
    // State:
    const [status, setDbStatus] = useState<DatabaseStatusType>('connecting')
    const [database, setDatabase] = useState<null | DatabaseType>(null)

    // Connect:
    if (status === 'connecting') {
      // TODO: Check Storage and Eviction Criteria
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria

      openDB<IdbSchemaType>(dbIdPrefix, schema.version, {
        async upgrade(database, oldVersion, newVersion, transaction, event) {
          if (newVersion && oldVersion > newVersion)
            throw 'Downgrade not possible'
          MigrateSchema<LocalDbConfig>({ database, schema, transaction })
          setDbStatus('online')
          // TODO: Inform server that the schema has been upgraded
        },
        blocked() {
          // TODO: Open Popup
          console.log('Refresh the page to upgrade the database.')
          setDbStatus('upgrading')
          // database?.close()
        },
        blocking() {
          // TODO: Open Popup
          console.log('Your system is being upgraded.')
          setDbStatus('upgrading')
        },
        terminated() {
          // TODO: Gracefully close connections and shared worker
          setDbStatus('failed')
        },
      })
        .then(async database => {
          // @ts-expect-error
          setDatabase(database)
          if (database.version === schema.version) setDbStatus('online')
        })
        .catch(error => {
          console.error('ERROR:', { error })
          setDbStatus('failed')
        })
    }

    // Sync Data:
    const $user = auth.getUser()
    if (status === 'online' && database && $user)
      SyncLocalDatabase({ schema, database, $user })

    consoleLog(`Database Status = ${status}`)
    return (
      <DbContext.Provider value={{ status, database }}>
        {status === 'connecting' ? <div>Loading</div> : children}
      </DbContext.Provider>
    )
  }
}
