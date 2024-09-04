import type { IDBPDatabase, DBSchema as IDBSchema } from 'idb'
import type { metaSchema } from '../utils'
import type { ReferenceType } from './dynamodb'

export type _LocalSyncInitType = (props: { $user: UserType }) => {
  BatchRead?: (string | ReferenceType)[]
}

export type LocalDbConfigType = {
  version: number
  tables: {
    [storeName: string]: {
      key: string // TODO: TS DROPDOWN
      value: DbFieldType
      indexes?: { [indexName: string]: string }
      localOnly?: boolean
      localSync?: {
        init: _LocalSyncInitType
        strategy: 'CONSTANT' | 'RANGE'
      }
    }
  }
}

export type LocalDbConfigType_WORKAROUND<
  TableName extends number | string | symbol,
> = {
  [K in TableName]: {
    key: string // TODO: TS DROPDOWN
    value: DbFieldType
    indexes?: { [indexName: string]: string }
    localOnly?: boolean
    localSync?: {
      init: _LocalSyncInitType
      strategy: 'CONSTANT' | 'RANGE'
    }
  }
}

export type InferIDBPDatabase<InputSchema extends LocalDbConfigType> =
  IDBPDatabase<InferIDBSchema<typeof metaSchema>> &
    IDBPDatabase<InferIDBSchema<InputSchema['tables']>>

export type InferIDBSchema<T extends LocalDbConfigType['tables']> =
  IDBSchema & {
    [K in keyof T]: {
      key: ExtractKeyType<T[K]['key'], T[K]['value']>
      value: ConvertValueToType<T[K]['value']>
      indexes: {
        [I in keyof T[K]['indexes']]: ExtractKeyType<
          // @ts-expect-error
          T[K]['indexes'][I],
          T[K]['value']
        >
      }
    }
  }

type ExtractKeyType<Key extends keyof AllValues, AllValues> = AllValues[Key]

type ConvertValueToType<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends number
      ? number
      : never
}
