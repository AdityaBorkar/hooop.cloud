type ProjectRecordType = {
  id: string
  name: string
  slug: string
<<<<<<< HEAD
  createdAt: number
  createdBy: string
  accessList: string[]
  organization: string
  status: 'OK' | 'WARN' | 'ERROR'
  github: {
    id: string
    full_name: string
=======
  userId: string
  organization: string
  status: 'OK' | 'WARN' | 'ERROR'
  github: {
    repo: string
    connected: boolean
>>>>>>> b030934 (progress)
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
<<<<<<< HEAD

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
=======
>>>>>>> b030934 (progress)
