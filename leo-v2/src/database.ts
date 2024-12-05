import CreateDatabaseClient from '@/packages/replocal/db/ddb'

const UsersSchema = {
  keys: { id: '' },
  fields: { slug: '' },
} as {
  keys: { id: string }
  fields: { slug?: string }
}

const ProjectsSchema = {
  keys: { id: '' },
  fields: {
    slug: '',
    lastUpdated: {
      time: '',
      date: '',
    },
  },
} as {
  keys: { id: string }
  fields: {
    slug?: string
    lastUpdated?: {
      time?: string
      date?: string
    }
  }
}

const SyncStatusSchema = {
  keys: { id: '' },
  fields: { slug: '' },
} as {
  keys: { id: string }
  fields: { slug?: string }
}

const dbSchema = {
  Users: UsersSchema,
  Projects: ProjectsSchema,
  SyncStatus: SyncStatusSchema,
} as const

const db = CreateDatabaseClient({
  region: 'ap-south-1',
  maxAttempts: 2,
  validate: false,
  verbose: true,
  dbSchema,
})
export default db
