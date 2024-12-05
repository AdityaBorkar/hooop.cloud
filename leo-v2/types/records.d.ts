type ProjectRecordType = {
  id: string
  name: string
  slug: string
  createdAt: number
  createdBy: string
  accessList: string[]
  organization: string
  status: 'OK' | 'WARN' | 'ERROR'
  github: {
    id: string
    full_name: string
  }[]
  discord: {
    server: string
    connected: boolean
    channels: {
      deployments: string
      alerts: string
      monitoring: string
    }
  }[]
}

type UserRecordType = {
  id: string
  name: string
  projectList: {
    id: string
    name: string
    slug: string
    organization: string
    status: 'OK' | 'WARN' | 'ERROR'
  }[]
}
