import { Resource } from 'sst'

import { TxnProvidorType } from './commands'
import {
  TransactGetCommandInput,
  TransactWriteCommandInput,
} from '@aws-sdk/lib-dynamodb'

type KeyType = any // Record<string, any> // TODO: Include Sort Key & Schema Support

type TableType = keyof Resource

type FieldType = { [key: string]: any[] }

type DataType = Record<string, any>

type ConditionType = {
  // TODO: Refactor `ConditionType` to include operators like `AND` / `OR` / `NOT` / ...
  name: string
  op: 'equal' | 'lessThan' | 'greaterThan'
  value: any
}

// ---------------------------------------------

type SingleDocProps = {
  table: TableType
  key: KeyType
}

type MultipleDocProps = {
  table: TableType
  where?: [ConditionType, ...ConditionType[]]
}

// ---------------------------------------------

export type RemoveProps = SingleDocProps

export type ReadProps = SingleDocProps

export type CreateProps = { table: TableType; data: DataType }

export type UpdateProps = SingleDocProps & {
  set?: DataType
  appendList?: FieldType
}

export type QueryProps = {
  table: TableType
  index: {
    name: string
    key: string
    value: any
  }
}

export type ScanProps = MultipleDocProps

<<<<<<< HEAD
export type BatchReadProps = {
  table: TableType
  keys: KeyType[]
}

=======
>>>>>>> a530fbf (progress)
export type TxnCallback = (
  TxnProvidor: TxnProvidorType,
) =>
  | NonNullable<TransactWriteCommandInput['TransactItems']>
  | NonNullable<TransactGetCommandInput['TransactItems']>
