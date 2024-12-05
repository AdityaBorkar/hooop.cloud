import type {
  TransactGetCommandInput,
  TransactWriteCommandInput,
} from '@aws-sdk/lib-dynamodb'
import type { Resource } from 'sst'
import type { TxnProvidorType } from './commands'

type KeyType = unknown // Record<string, unknown> // TODO: Include Sort Key & Schema Support

type TableType = keyof Resource | string // TODO: FIX TYPES

type FieldType = { [key: string]: unknown[] }

type DataType = Record<string, unknown>

type ConditionType = {
  // TODO: Refactor `ConditionType` to include operators like `AND` / `OR` / `NOT` / ...
  op: 'equal' | 'lessThan' | 'greaterThan'
  name: string
  value: unknown
}

// ---------------------------------------------

type SingleDocProps = {
  tableName: TableType
  key: KeyType
}

type MultipleDocProps = {
  tableName: TableType
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
    value: unknown
  }
}

export type ScanProps = MultipleDocProps

export type BatchReadProps = {
  [table: TableType]: {
    keys: KeyType[]
    projection: string
  }
}

export type TxnCallback = (
  TxnProvidor: TxnProvidorType,
) =>
  | NonNullable<TransactWriteCommandInput['TransactItems']>
  | NonNullable<TransactGetCommandInput['TransactItems']>
