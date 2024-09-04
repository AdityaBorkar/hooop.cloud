/// <reference path="../.sst/platform/config.d.ts" />

export default function Database() {
  const UsersTable = new sst.aws.Dynamo('Users', {
    fields: { id: 'string' },
    primaryIndex: { hashKey: 'id' },
  })

  const ProjectsTable = new sst.aws.Dynamo('Projects', {
    fields: { id: 'string', createdBy: 'string' },
    primaryIndex: { hashKey: 'id' },
    globalIndexes: {
      ProjectsCreatedBy: { hashKey: 'createdBy' },
    },
  })

  const SyncStatusTable = new sst.aws.Dynamo('SyncStatus', {
    fields: { userId: 'string', deviceId: 'string' },
    primaryIndex: { hashKey: 'userId', rangeKey: 'deviceId' },
  })

  return [UsersTable, ProjectsTable,SyncStatusTable]
}


//  ********************************************************************************
const SstSchema = {}
// for (const tableName in schema) {
//   const tableSchema = schema[tableName]

//   if (tableName.startsWith('_'))
//     throw new Error('Table name cannot start with "_"')

//   const fields = // ONLY: RANGE-KEY / HASH-KEY

//   const table = new sst.aws.Dynamo(tableName, {
//     fields: tableSchema.fields,
//     primaryIndex: { hashKey: tableSchema.key },
//   })
// }

// const SyncStatusTable = new sst.aws.Dynamo('SyncStatus', {
//   fields: { userId: 'string', deviceId: 'string' },
//   primaryIndex: { hashKey: 'userId', rangeKey: 'deviceId' },
// })
//  ********************************************************************************
