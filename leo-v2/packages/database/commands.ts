import chalk from 'chalk'
import { Resource } from 'sst'

import type {
  BatchGetCommandInput,
  DeleteCommandInput,
  PutCommandInput,
  PutCommandInput,
  QueryCommandInput,
  ScanCommandInput,
  TransactGetCommandInput,
  TransactWriteCommandInput,
  UpdateCommandInput,
} from '@aws-sdk/lib-dynamodb'
import { SanitizeFieldNames } from './reserved-keys'
import type {
  BatchReadProps,
  CreateProps,
  QueryProps,
  ReadProps,
  RemoveProps,
  ScanProps,
  UpdateProps,
} from './types'

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
    TableName: Resource[props.tableName].name,
    Key: props.key,
  } satisfies DeleteCommandInput
  return command
}

function read(props: ReadProps) {
  const command = {
    Key: props.key,
    TableName: Resource[props.tableName].name,
  } satisfies PutCommandInput
  return command
}

function batchReads(props: BatchReadProps) {
  props.table
  const tableName = Resource[props.table].name
  const command = {
    RequestItems: props,
  } satisfies BatchGetCommandInput
  return command
}

function batchRead(props: BatchReadProps) {
  const command = { RequestItems: {} } satisfies BatchGetCommandInput

  for (const table in props) {
    const tableName = Resource[table]?.name
    if (!tableName) throw new Error('Table Not Found')
    if (command.RequestItems[tableName]) throw 'Table Name is repeated'

    command.RequestItems[tableName] = {
      Keys: props[table].keys,
      // ProjectionExpression: props[table].projection,
    }
  }

  return command
}

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

  if (!props.where) throw new Error('SCAN REQUIRES WHERE CLAUSE')

  for (const condition of props.where) {
    const operator = condition.op === 'equal' ? '=' : '>'

    const SanitizedFieldNames = SanitizeFieldNames(condition.name)
    if (!SanitizedFieldNames) continue
    const AttrName = SanitizedFieldNames.Expression
    const AttrNames = SanitizedFieldNames.AttrNames
    const AttrValue = `:value${FilterExpressions.length}`

    Object.assign(ExpressionAttributeNames, AttrNames)
    FilterExpressions.push(`${AttrName} ${operator} ${AttrValue}`)
    ExpressionAttributeValues[AttrValue] = condition.value
  }

  return (
    Object.keys(ExpressionAttributeNames).length
      ? {
          TableName: Resource[props.tableName].name,
          FilterExpression: FilterExpressions.join(' AND '), // TODO: Support more operators
          ExpressionAttributeNames: ExpressionAttributeNames,
          ExpressionAttributeValues: ExpressionAttributeValues,
        }
      : { TableName: Resource[props.tableName].name }
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
  for (const key of AppendListItems) {
    const SanitizedFieldNames = SanitizeFieldNames(key)
    if (!SanitizedFieldNames) continue
    const AttrName = SanitizedFieldNames.Expression
    const AttrNames = SanitizedFieldNames.AttrNames
    const AttrValue = `:value${UpdateExpressions.length}`

    Object.assign(ExpressionAttributeNames, AttrNames)
    UpdateExpressions.push(
      `SET ${AttrName} = list_append(${AttrName}, ${AttrValue})`,
    )
    ExpressionAttributeValues[AttrValue] = props.appendList?.[key]
  }

  const SetItems = Object.keys(props.set || {})
  for (const key of SetItems) {
    const SanitizedFieldNames = SanitizeFieldNames(key)
    if (!SanitizedFieldNames) continue
    const AttrName = SanitizedFieldNames.Expression
    const AttrNames = SanitizedFieldNames.AttrNames
    Object.assign(ExpressionAttributeNames, AttrNames)
    const AttrValue = `:value${UpdateExpressions.length}`
    UpdateExpressions.push(`SET ${AttrName} = ${AttrValue}`)
    ExpressionAttributeValues[AttrValue] = props.set?.[key]
  }

  const command = {
    Key: props.key,
    TableName: Resource[props.tableName].name,
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
const _DbCommands = {
  read,
  query,
  create,
  update,
  remove,
  scan,
  batchReads,
  batchRead,
}
export default _DbCommands

// ---------------------------------------------

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property]
}

type Unpacked<T> = T extends (infer U)[] ? U : T
