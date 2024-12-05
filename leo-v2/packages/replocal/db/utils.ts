import type { LocalDbConfigType } from './idb/types'

export const TypeString = '' as string
export const TypeNumber = 0 as number

export const metaSchema = {
  _SyncMetadata: {
    key: 'key',
    value: {
      key: TypeString,
      value: TypeString,
      updatedAt: TypeNumber,
    },
    localOnly: true,
  },
  _OptimisticUpdates: {
    key: 'id',
    value: {
      id: TypeString,
      table: TypeString,
      status: TypeString,
      inputData: TypeString,
    },
    localOnly: true,
  },
} as const satisfies LocalDbConfigType['tables']

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const consoleLog = (msgs: any, ...optionalMsgs: any[]) => {
  console.log(
    '%c REPLOCAL %c',
    'background-color: #c9c9c9; color: #000; font-weight: bold;',
    'background-color: reset; color: reset; font-weight: regular;',
    msgs,
    ...optionalMsgs,
  )
}

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
export interface UserType {}

export type DatabaseStatusType =
  | 'connecting'
  | 'online'
  | 'offline'
  | 'failed'
  | 'upgrading'

export type DbFieldType = { [key: string]: string | number | DbFieldType }

export type ReplocalDbMigrationSchema = {
  autoMigrate: boolean
}
