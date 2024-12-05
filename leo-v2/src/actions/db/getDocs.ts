'use server'

import type { BatchReadProps } from '@/packages/database/types'
import type {
  ReplocalDynamoDBQuery,
  ReplocalDynamoDBSchema,
} from '@/packages/replocal/database/ddb_idb'

import db from '@/packages/database'
import { DatabaseSchema } from '@/replocal'

export default async function $DbGetDocs(query: ReplocalDynamoDBQuery) {
  const schema = DatabaseSchema as ReplocalDynamoDBSchema

  // Cache Management:
  type FieldValueType =
    | string
    | number
    | boolean
    | FieldValueType[]
    | { [key: string]: FieldValueType }
  const DOCS_CACHE: {
    [tableName: string]: { [key: string]: FieldValueType }[]
  } = {}
  function PUSH_DOCS_CACHE(docs: Record<string, Record<string, any>[]>) {
    for (const table in docs) {
      if (!DOCS_CACHE[table]) DOCS_CACHE[table] = []
      DOCS_CACHE[table].push(...docs[table])
      // TODO: Deep Merge instead
    }
  }

  // Read Reference:
  const RefReadResult = await db.batchRead(
    generateRefBatchReadCommand({ refs: query.References }),
  )
  PUSH_DOCS_CACHE(RefReadResult.success)

  // TODO: Report Failure:
  if (Object.keys(RefReadResult.failure).length > 0) {
    console.error({ failure: RefReadResult.failure })
  }

  // Read Docs:
  const BatchRead: BatchReadProps = {}
  for (const doc of query.BatchRead) {
    let _tableName = 'tableName' in doc ? doc.tableName : ''
    let _docs = [doc]

    if ('refId' in doc) {
      const { hashKey, tableName, projection, rangeKey } =
        query.References[doc.refId]

      const TableSchema = schema.tables?.[tableName]
      if (!TableSchema.hashKey) throw new Error('HashKey not found')

      const refDocs = (DOCS_CACHE[tableName] || []).filter(
        doc => doc[TableSchema.hashKey] === hashKey,
      )
      if (refDocs.length !== 1) throw new Error('RefDoc not found')
      const refDoc = refDocs[0]

      const docs = refDoc[projection] // TODO : Allow Deep Object Reference
      if (!Array.isArray(docs))
        throw new Error('Reference did not returned proper data')

      _tableName = tableName
      _docs = docs.map(doc => ({
        tableName,
        hashKey: doc[TableSchema.hashKey],
        rangeKey: TableSchema.rangeKey ? doc[TableSchema.rangeKey] : undefined,
      }))
    }

    if (!BatchRead[_tableName])
      BatchRead[_tableName] = { keys: [], projection: '' }
    BatchRead[_tableName].keys.push(..._docs)
  }

  // Execute Query:
  const BatchReadResult = await db.batchRead(BatchRead)
  PUSH_DOCS_CACHE(BatchReadResult.success)

  // TODO: Report Failure:
  if (Object.keys(BatchReadResult.failure).length > 0) {
    console.error({ failure: BatchReadResult.failure })
  }

  console.log(JSON.stringify(BatchRead, null, 2))

  return {
    QueryResult: DOCS_CACHE,
    timestamp: new Date().valueOf().toString(),
  }
}

function generateRefBatchReadCommand({
  refs,
}: {
  refs: ReplocalDynamoDBQuery['References']
}) {
  const BatchReads: BatchReadProps = {}
  const tables = DatabaseSchema.tables as ReplocalDynamoDBSchema['tables']

  for (const { tableName, projection, hashKey, rangeKey } of refs) {
    const HashKeyId = tables[tableName]?.hashKey || ''
    if (!HashKeyId) throw new Error('HashKey not found')
    if (!hashKey) throw new Error('HashKey not provided')

    if (!BatchReads[tableName])
      BatchReads[tableName] = { keys: [], projection: '' }
    BatchReads[tableName].keys.push({ [HashKeyId]: hashKey })

    // TODO: Projection must be unique for each key.

    const existingProjection = BatchReads[tableName].projection
    BatchReads[tableName].projection = existingProjection.length
      ? [existingProjection, projection].join(', ')
      : projection || ''
  }

  return BatchReads
}
