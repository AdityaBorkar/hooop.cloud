import { SessionProvider } from 'next-auth/react'
import dynamic from 'next/dynamic'

import { auth } from '@/auth'

export default dynamic(() => Promise.resolve(DisableSsrLayout), { ssr: false })

async function DisableSsrLayout(props: { children: React.ReactNode }) {
	const session = await auth()
	return (
		<div suppressHydrationWarning={true}>
			<SessionProvider
				session={session}
				baseUrl={process.env.NEXT_PUBLIC_AUTH_API_URL}
				basePath={process.env.NEXT_PUBLIC_AUTH_BASE_URL}
				refetchWhenOffline={false}
				refetchOnWindowFocus={false}
			>
				{typeof window && props.children}
			</SessionProvider>
		</div>
	)
}
