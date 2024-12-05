import chalk from 'chalk'
import { Resource } from 'sst'

import { SanitizeFieldNames } from './reserved-keys'
import {
<<<<<<< HEAD
  BatchReadProps,
=======
>>>>>>> a530fbf (progress)
  CreateProps,
  QueryProps,
  ReadProps,
  RemoveProps,
  ScanProps,
  UpdateProps,
} from './types'
import {
<<<<<<< HEAD
  BatchGetCommandInput,
=======
>>>>>>> a530fbf (progress)
  DeleteCommandInput,
  GetCommandInput,
  PutCommandInput,
  QueryCommandInput,
  ScanCommandInput,
  TransactGetCommandInput,
  TransactWriteCommandInput,
  UpdateCommandInput,
} from '@aws-sdk/lib-dynamodb'

// TODO: Get only data that's required to save bandwidth!

function create(props: CreateProps) {
  const command = {
    TableName: Resource[props.table].name,
    Item: props.data,
  } satisfies PutCommandInput
  return command
}

function remove(props: RemoveProps) {
  const command = {
    TableName: Resource[props.table].name,
    Key: props.key,
  } satisfies DeleteCommandInput
  return command
}

function read(props: ReadProps) {
  const command = {
    Key: props.key,
    TableName: Resource[props.table].name,
  } satisfies GetCommandInput
  return command
}

<<<<<<< HEAD
function batchReads(props: BatchReadProps) {
  const tableName = Resource[props.table].name
  const command = {
    RequestItems: {
      [tableName]: {
        Keys: props.keys,
      },
    },
  } satisfies BatchGetCommandInput
  return command
}

=======
>>>>>>> a530fbf (progress)
function query(props: QueryProps) {
  const command = {
    IndexName: props.index.name,
    KeyConditionExpression: '#fieldName = :fieldValue',
    ExpressionAttributeNames: {
      '#fieldName': props.index.key,
    },
    ExpressionAttributeValues: {
      ':fieldValue': props.index.value,
    },
    TableName: Resource[props.table].name,
  } satisfies QueryCommandInput
  return command
}

function scan(props: ScanProps) {
  console.warn(
    chalk.bgYellow.bold(
      'WARNING: Using SCAN instead of QUERY / READ. This would result in higher reads and AWS bill.',
    ),
  )

  const FilterExpressions: any = []
  const ExpressionAttributeNames: Record<string, string> = {}
  const ExpressionAttributeValues: Record<string, any> = {}
  props.where?.forEach((condition) => {
    const operator = condition.op === 'equal' ? '=' : '>'
    const { Expression: AttrName, AttrNames } = SanitizeFieldNames(
      condition.name,
    )
    Object.assign(ExpressionAttributeNames, AttrNames)
    const AttrValue = `:value${FilterExpressions.length}`
    FilterExpressions.push(`${AttrName} ${operator} ${AttrValue}`)
    ExpressionAttributeValues[AttrValue] = condition.value
  })

  return (
    Object.keys(ExpressionAttributeNames).length
      ? {
          TableName: Resource[props.table].name,
          FilterExpression: FilterExpressions.join(' AND '), // TODO: Support more operators
          ExpressionAttributeNames: ExpressionAttributeNames,
          ExpressionAttributeValues: ExpressionAttributeValues,
        }
      : { TableName: Resource[props.table].name }
  ) satisfies ScanCommandInput
}

// * DOES NOT SUPPORT [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html]
// - SET Array[x] / Increment & Decrement / Preventing Overwrites / Delete & Remove / Concat Expressions
// - Command Parameters
function update(props: UpdateProps) {
  const UpdateExpressions: any = []
  const ExpressionAttributeNames: Record<string, string> = {}
  const ExpressionAttributeValues: Record<string, any> = {}

  const AppendListItems = Object.keys(props.appendList || {})
  AppendListItems.forEach((key) => {
    const { Expression: AttrName, AttrNames } = SanitizeFieldNames(key)
    Object.assign(ExpressionAttributeNames, AttrNames)
    const AttrValue = `:value${UpdateExpressions.length}`
    UpdateExpressions.push(
      `SET ${AttrName} = list_append(${AttrName}, ${AttrValue})`,
    )
    ExpressionAttributeValues[AttrValue] = props.appendList?.[key]
  })

  const SetItems = Object.keys(props.set || {})
  SetItems.forEach((key) => {
    const { Expression: AttrName, AttrNames } = SanitizeFieldNames(key)
    Object.assign(ExpressionAttributeNames, AttrNames)
    const AttrValue = `:value${UpdateExpressions.length}`
    UpdateExpressions.push(`SET ${AttrName} = ${AttrValue}`)
    ExpressionAttributeValues[AttrValue] = props.set?.[key]
  })

  const command = {
    Key: props.key,
    TableName: Resource[props.table].name,
    UpdateExpression: UpdateExpressions.join(' '),
    ExpressionAttributeNames: Object.keys(ExpressionAttributeNames).length
      ? ExpressionAttributeNames
      : undefined,
    ExpressionAttributeValues: Object.keys(ExpressionAttributeValues).length
      ? ExpressionAttributeValues
      : undefined,
  } satisfies WithRequiredProperty<UpdateCommandInput, 'UpdateExpression'>
  return command
}

export type TxnProvidorType = typeof TxnProvidor
export const TxnProvidor = {
  read: (props: ReadProps) =>
    ({ Get: _DbCommands.read(props) }) satisfies Unpacked<
      NonNullable<TransactGetCommandInput['TransactItems']>
    >,
  create: (props: CreateProps) =>
    ({ Put: _DbCommands.create(props) }) satisfies Unpacked<
      NonNullable<TransactWriteCommandInput['TransactItems']>
    >,
  remove: (props: RemoveProps) =>
    ({ Delete: _DbCommands.remove(props) }) satisfies Unpacked<
      NonNullable<TransactWriteCommandInput['TransactItems']>
    >,
  update: (props: UpdateProps) =>
    ({ Update: _DbCommands.update(props) }) satisfies Unpacked<
      NonNullable<TransactWriteCommandInput['TransactItems']>
    >,
}

/**
 * For Internal Use Only
 * Do not call this function directly
 */
<<<<<<< HEAD
const _DbCommands = { read, query, create, update, remove, scan, batchReads }
=======
const _DbCommands = { read, query, create, update, remove, scan }
>>>>>>> a530fbf (progress)
export default _DbCommands

// ---------------------------------------------

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property]
}

type Unpacked<T> = T extends (infer U)[] ? U : T
