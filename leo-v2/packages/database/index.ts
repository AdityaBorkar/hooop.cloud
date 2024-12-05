/**
 * ? VERSION 0.5.0 dated 16-03-2024 (DD-MM-YYYY)
 * * ONLY SUPPORTS SST V3.0.0
 * This library is designed to be used for prototyping and development purpose.
 * We highly recommend to use a SQL database for production.
 */
import 'server-only'

import {
  DynamoDBClient,
  type ResourceNotFoundException,
  type ScanCommandInput,
} from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocument,
  type TransactGetCommandInput,
  type TransactWriteCommandInput,
} from '@aws-sdk/lib-dynamodb'
import chalk from 'chalk'
import { Resource } from 'sst'
import _DbCommands, { TxnProvidor, type TxnProvidorType } from './commands'
import type {
  BatchReadProps,
  CreateProps,
  QueryProps,
  ReadProps,
  RemoveProps,
  ScanProps,
  UpdateProps,
} from './types'

// TODO - CHANGE REGION ACCORDING TO THE DATABASE DEFINATION
const ddb_client = new DynamoDBClient({
  region: 'ap-south-1',
})
export const ddb = DynamoDBDocument.from(ddb_client)

export const ErrorHandler =
  (operation: string) => (error: ResourceNotFoundException) => {
    // TODO - MARK AS SERIOUS ERROR AND REPORT TO ADMIN
    console.error(chalk.bgRed(`DB ERROR: [${operation}]`), error)
  }

function read<RT>(props: ReadProps) {
  return ddb.get(_DbCommands.read(props)).then(res => res.Item as RT)
  // .catch(ErrorHandler('GET'))
}

function batchReads<RT>(props: BatchReadProps) {
  return ddb
    .batchGet(_DbCommands.batchReads(props))
    .then(({ Responses, UnprocessedKeys }) => {
      //   Responses?: Record<string, Record<string, NativeAttributeValue>[]>;
      // const {} = res
      console.log({ Responses })
      if (UnprocessedKeys)
        console.error({
          length: Object.keys(UnprocessedKeys || {}).length,
          UnprocessedKeys,
        })
      return Responses as RT
    })
  // .catch(ErrorHandler('GET'))
}

const TableMap: Record<string, string> = {}
for (const tableName in Resource) {
  const { name, type } = Resource[tableName]
  if (type !== 'sst.aws.Dynamo') continue
  TableMap[name] = tableName
}

function batchRead(props: BatchReadProps) {
  return ddb
    .batchGet(_DbCommands.batchRead(props))
    .then(({ Responses, UnprocessedKeys }) => {
      // Changing the Table Names:

      const success: Record<string, Record<string, any>[]> = {}
      for (const table in Responses) {
        const tableName = TableMap[table]
        if (!tableName) throw new Error('Table Name not found')
        success[tableName] = Responses[table]
      }

      const failure: Record<string, any> = {}
      for (const table in UnprocessedKeys) {
        const tableName = TableMap[table]
        if (!tableName) throw new Error('Table Name not found')
        failure[tableName] = UnprocessedKeys[table]
      }

      return { success, failure }
    })
  // .catch(ErrorHandler('GET'))
}

function scan<RT>(props: ScanProps) {
  return ddb.scan(_DbCommands.scan(props)).then(res => ({
    cursor: res.LastEvaluatedKey as RT,
    items: (res.Items || []) as RT[],
    count: res.Count as number,
  }))
  // .catch(ErrorHandler('SCAN'))
}

function rawScan<RT>(props: ScanCommandInput) {
  return ddb.scan(props).then(res => ({
    cursor: res.LastEvaluatedKey as RT,
    items: (res.Items || []) as RT[],
    count: res.Count as number,
  }))
  // .catch(ErrorHandler('SCAN'))
}

function create(props: CreateProps) {
  return ddb.put(_DbCommands.create(props)).then(res => true)
  // .catch(ErrorHandler('PUT'))
}

function remove(props: RemoveProps) {
  return ddb.delete(_DbCommands.remove(props)).then(res => true)
  // .catch(ErrorHandler('DELETE'))
}

function update(props: UpdateProps) {
  return ddb.update(_DbCommands.update(props)).then(res => true)
  // .catch(ErrorHandler('UPDATE'))
}

function query<RT>(props: QueryProps) {
  return ddb.query(_DbCommands.query(props)).then(res => ({
    cursor: res.LastEvaluatedKey as RT,
    items: (res.Items || []) as RT[],
    count: res.Count as number,
  }))
  // .catch(ErrorHandler('QUERY'))
}

// TODO: Solve the typescript error and intellisense for this function:
// function transaction(props: TxnCallback) {
//   const TransactItems = props(TxnProvidor)
//   if ('Get' in TransactItems[0])
//     return ddb
//       .transactGet({ TransactItems })
//       .then((res) => true)
//       .catch(ErrorHandler('TRANSACTION'))
//   return ddb
//     .transactWrite({ TransactItems })
//     .then((res) => true)
//     .catch(ErrorHandler('TRANSACTION'))
// }

const db = {
  read,
  create,
  update,
  scan,
  rawScan,
  query,
  remove,
  txnReads,
  txnWrites,
  batchRead,
  batchReads,
}
export default db

// ! TEMPORARY FIX FOR TRANSACTION:

type TxnCallback_READ = (
  TxnProvidor: TxnProvidorType,
) => NonNullable<TransactGetCommandInput['TransactItems']>

type TxnCallback_WRITE = (
  TxnProvidor: TxnProvidorType,
) => NonNullable<TransactWriteCommandInput['TransactItems']>

function txnReads(props: TxnCallback_READ) {
  const TransactItems = props(TxnProvidor)
  return ddb
    .transactGet({ TransactItems })
    .then(res => true)
    .catch(ErrorHandler('TRANSACTION'))
}

function txnWrites(props: TxnCallback_WRITE) {
  const TransactItems = props(TxnProvidor)
  return ddb
    .transactWrite({ TransactItems })
    .then(res => true)
    .catch(ErrorHandler('TRANSACTION'))
}
