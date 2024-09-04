interface ProjectRecordType {
	id: string
	name: string
	thumbnail: string
	createdAt: number
	createdBy: string
	accessList: string[]
	team: {
		id: string
		name: string
	}
	status: 'OK' | 'WARNING' | 'ERROR'
	statusCount: {
		error: number
		warning: number
	}
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

interface ProjectSettingsType {
	name: string
	githubRepo: string
	techStack: string
	discord: {
		server: string
		connected: boolean
		channels: {
			deployments: string
			crashlytics: string
			infraMonitoring: string
		}
	}[]
}
