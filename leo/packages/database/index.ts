/**
 * ? VERSION 0.5.0 dated 16-03-2024 (DD-MM-YYYY)
 * * ONLY SUPPORTS SST V3.0.0
 * This library is designed to be used for prototyping and development purpose.
 * We highly recommend to use a SQL database for production.
 */
<<<<<<< HEAD
<<<<<<< HEAD
import chalk from 'chalk'

import 'server-only'

import _DbCommands, { TxnProvidor, TxnProvidorType } from './commands'
import {
  BatchReadProps,
=======
import 'server-only'

=======
>>>>>>> b030934 (progress)
import chalk from 'chalk'

import 'server-only'

import _DbCommands, { TxnProvidor, TxnProvidorType } from './commands'
import {
>>>>>>> a530fbf (progress)
  CreateProps,
  QueryProps,
  ReadProps,
  RemoveProps,
  ScanProps,
  UpdateProps,
} from './types'
import {
  DynamoDBClient,
  ResourceNotFoundException,
  ScanCommandInput,
} from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocument,
  TransactGetCommandInput,
  TransactWriteCommandInput,
} from '@aws-sdk/lib-dynamodb'

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
  return ddb.get(_DbCommands.read(props)).then((res) => res.Item as RT)
  // .catch(ErrorHandler('GET'))
}

<<<<<<< HEAD
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

=======
>>>>>>> a530fbf (progress)
function scan<RT>(props: ScanProps) {
  return ddb.scan(_DbCommands.scan(props)).then((res) => ({
    cursor: res.LastEvaluatedKey as RT,
    items: (res.Items || []) as RT[],
    count: res.Count as number,
  }))
  // .catch(ErrorHandler('SCAN'))
}

function rawScan<RT>(props: ScanCommandInput) {
  return ddb.scan(props).then((res) => ({
    cursor: res.LastEvaluatedKey as RT,
    items: (res.Items || []) as RT[],
    count: res.Count as number,
  }))
  // .catch(ErrorHandler('SCAN'))
}

function create(props: CreateProps) {
  return ddb.put(_DbCommands.create(props)).then((res) => true)
  // .catch(ErrorHandler('PUT'))
}

function remove(props: RemoveProps) {
  return ddb.delete(_DbCommands.remove(props)).then((res) => true)
  // .catch(ErrorHandler('DELETE'))
}

function update(props: UpdateProps) {
  return ddb.update(_DbCommands.update(props)).then((res) => true)
  // .catch(ErrorHandler('UPDATE'))
}

function query<RT>(props: QueryProps) {
  return ddb.query(_DbCommands.query(props)).then((res) => ({
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
<<<<<<< HEAD
  batchReads,
=======
>>>>>>> a530fbf (progress)
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
    .then((res) => true)
    .catch(ErrorHandler('TRANSACTION'))
}

function txnWrites(props: TxnCallback_WRITE) {
  const TransactItems = props(TxnProvidor)
  return ddb
    .transactWrite({ TransactItems })
    .then((res) => true)
    .catch(ErrorHandler('TRANSACTION'))
}
