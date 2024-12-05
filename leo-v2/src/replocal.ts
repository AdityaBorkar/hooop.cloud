import type {
  ReplocalDbMigrationSchema,
  ReplocalDynamoDBSchema,
} from '@/packages/replocal/db'
import type { User } from 'next-auth'

import { TypeString } from '@/packages/replocal/db/utils'

declare module '@/packages/replocal/db/utils' {
  interface UserType extends User {}
}

export const MigrationStrategy_V10 = {
  autoMigrate: true,
} as const satisfies ReplocalDbMigrationSchema

export const DatabaseSchema = {
  version: 5,
  localDb: {
    dbType: 'IDB',
    encrypt: false,
    validate: false,
    compress: false,
    syncStrategy: 'DEVICE-RECORDS',
  },
  tables: {
    Users: {
      hashKey: 'id',
      fields: {
        id: TypeString,
        name: TypeString,
        projects: TypeString,
      },
      localSync: {
        strategy: 'CONSTANT',
        init({ $user }) {
          return $user.id ? { BatchRead: [$user.id] } : {}
        },
      },
    },
    Projects: {
      hashKey: 'id',
      fields: {
        id: TypeString,
        slug: TypeString,
        createdBy: TypeString,
      },
      localSync: {
        strategy: 'CONSTANT',
        init: ({ $user }) =>
          $user.id
            ? {
                BatchRead: [
                  {
                    tableName: 'Users',
                    hashKey: $user.id.toString(),
                    projection: 'projectList',
                  },
                ],
              }
            : {},
      },
    },
    SyncStatusTable: {
      hashKey: 'userId',
      rangeKey: 'deviceId',
      fields: {
        userId: TypeString,
        deviceId: TypeString,
      },
    },
  },
  migration: {
    10: MigrationStrategy_V10,
  },
} as const satisfies ReplocalDynamoDBSchema

export const LocalFilesConfig = {
  // Use OPFS and IndexedDb/MemoryDB to achieve this.
} as const

// // Utils:
// const table = {}
// function type(type: 'string' | 'number') {
//   return {
//     hashKey: () => {},
//     sortKey: () => {},
//   }
// }

// // Config:
// export const DatabaseSchema = {
//   version: 2,
// localDb: {
//   dbType: 'IDB_2',
//   encrypt: false,
//   validate: false,
//   compress: false,
//   syncStrategy: 'DEVICE-RECORDS',
// },
//   tables: {
//     Projects: table
//       .schema({
//         id: type('string').hashKey(),
//         slug: type('string').sortKey(),
//         createdBy: type('string'),
//       })
//       .indexes({})
//       .enableLocal({
//         strategy: 'CONSTANT',
//         init: ({ $user }) => ({ BatchRead: [{ REF: 'REF' }] }),
//         indexes: { 'by-slug': 'slug' },
//       }),
//     Users: table
//       .schema({
//         id: type('string').hashKey(),
//         name: type('string'),
//         projects: type('string'),
//       })
//       .enableLocal({
//         strategy: 'CONSTANT',
//         init: ({ $user }) => ({ BatchRead: [$user.id] }),
//       }),
//     SyncStatusTable: table.schema({
//       userId: type('string').hashKey(),
//       deviceId: type('string').rangeKey(),
//     }),
//   },
// } as const satisfies ReplocalDynamoDBSchema
