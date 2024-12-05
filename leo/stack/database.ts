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

  return [UsersTable, ProjectsTable]
}
