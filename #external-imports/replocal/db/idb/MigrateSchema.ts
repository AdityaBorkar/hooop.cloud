// @ts-nocheck

import type { IDBPDatabase, IDBPTransaction, StoreNames } from 'idb'
import type { InferIDBSchema, LocalDbConfigType } from './types'

export default function MigrateSchema<LocalDbConfig extends LocalDbConfigType>({
  schema,
  database: db,
  transaction,
}: {
  schema: LocalDbConfig
  database: IDBPDatabase<InferIDBSchema<LocalDbConfig['tables']>> // InferIDBPDatabase<LocalDbConfig>
  transaction: IDBPTransaction<
    InferIDBSchema<LocalDbConfig['tables']>,
    StoreNames<InferIDBSchema<LocalDbConfig['tables']>>[],
    'versionchange'
  >
}) {
  const SchemaStoreNames = Object.keys(schema)

  // EXISTING STORES:
  for (const _storeName in Array.from(db.objectStoreNames)) {
    const storeName = _storeName as StoreNames<
      InferIDBSchema<LocalDbConfig['tables']>
    >

    // Delete if not existing:
    if (!SchemaStoreNames.includes(storeName)) {
      db.deleteObjectStore(storeName)
      return
    }

    const SchemaStore = schema.tables[storeName]
    const store = transaction.objectStore(storeName)

    // Check Key Path:
    if (store.keyPath !== SchemaStore.key) {
      console.log({
        detected: store.keyPath,
        schema: SchemaStore.key,
      })
      throw new Error('Key Path Mismatch:')
    }

    // Check indexes:
    const SchemaIndexNames = Object.keys(SchemaStore.indexes || {})
    const IndexNames = Array.from(store.indexNames) as string[]

    // Delete
    for (const indexName of IndexNames) {
      if (SchemaIndexNames.includes(indexName)) continue
      store.deleteIndex(indexName)
    }

    for (const indexName of SchemaIndexNames) {
      const indexKey = SchemaStore.indexes?.[indexName]
      if (!indexKey) return

      // Create
      if (!IndexNames.includes(indexName)) {
        store.createIndex(indexName, indexKey, { unique: true })
        return
      }

      // Modify
      const index = store.index(indexName)
      if (index.keyPath !== indexKey)
        console.error('Index Key Mismatch:', {
          detected: index.keyPath,
          schema: indexKey,
        })
    }
  }

  // NEW STORES:
  const StoreNames = Array.from(db.objectStoreNames)
  for (const storeName of SchemaStoreNames) {
    if (StoreNames.includes(storeName)) continue
    const store = db.createObjectStore(storeName, {
      keyPath: schema[storeName].key,
    })
    const schemaIndexes = schema[storeName].indexes || {}
    const schemaIndexNames = Object.keys(schemaIndexes)
    for (const indexName of schemaIndexNames) {
      const indexKey = schemaIndexes[indexName]
      store.createIndex(indexName, indexKey)
    }
  }
  return
}
