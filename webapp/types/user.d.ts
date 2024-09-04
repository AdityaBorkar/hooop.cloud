interface UserRecordType {
	id: string
	name: string
	teams: { id: string }[]
	projects: { id: string }[]
}
