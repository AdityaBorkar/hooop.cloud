'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

type UserDataType = {
	id: string
	name: string
	email: string
	image: string

	settings: {
		overview: {
			category: 'PROJECTS' | 'TEAMS'
			sort: 'PRIORITY' | 'ACTIVITY' | 'NAME'
			view: 'GRID' | 'LIST'
		}
	}
}

export default async function getUserData() {
	const session = useSession()
	if (session.status === 'unauthenticated') redirect('/')

	// biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
	return new Promise<UserDataType>(async resolve => {
		if (session.status === 'loading' || session.data === null) return
		const { user } = session.data
		// TODO: Make this is a listener:
		// const userData = await db.users.read({ id: user.id })
		const USER_DATA = {
			...user,
			// ...github,
			// ...userData,
			settings: {
				overview: {
					category: 'PROJECTS',
					sort: 'PRIORITY',
					view: 'GRID',
				},
			},
		} satisfies UserDataType
		resolve(USER_DATA)
	})
}
