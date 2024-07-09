import type { DefaultSession } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

// import { object, string } from 'superstruct'
// import db from '@/packages/database'

export const { signIn, signOut, auth, handlers } = NextAuth({
	providers: [GitHub],
	// callbacks: {
	// 	async jwt({ account, token, profile }) {
	// 		if (account) {
	// 			const id = account?.providerAccountId
	// 			const user = await db.read({ tableName: 'Users', key: { id } })
	// 			if (!user) {
	// 				await db.create({
	// 					table: 'Users',
	// 					data: {
	// 						id,
	// 						name: profile?.name as string,
	// 						email: profile?.email as string,
	// 						projectList: [],
	// 						// TODO: GitHub App Installation Token
	// 						// github: {
	// 						//   id: ((profile?.id as string) || '').toString(),
	// 						//   userName: (profile?.login as string) || '',
	// 						//   accessToken: account.access_token || '',
	// 						// },
	// 					},
	// 				})
	// 			}
	// 			token.github = {
	// 				id: ((profile?.id as string) || '').toString(),
	// 				userName: (profile?.login as string) || '',
	// 				accessToken: account.access_token || '',
	// 			}
	// 		}
	// 		return token
	// 	},
	// 	async session({ session, token }) {
	// 		session.user.id = token.github.id
	// 		session.github = token.github
	// 		return session
	// 	},
	// },
})

// // TODO - MAKE IT VERY STRICT. NO EXTRA ATTRIBUTES.
// export const UserSchema = object({
// 	expires: string(),
// 	user: object({
// 		id: string(),
// 		name: string(),
// 		email: string(),
// 		image: string(),
// 	}),
// 	github: object({
// 		id: string(),
// 		userName: string(),
// 		accessToken: string(),
// 	}),
// })

declare module 'next-auth' {
	/**
	 * The shape of the user object returned in the OAuth providers' `profile` callback,
	 * or the second parameter of the `session` callback, when using a database.
	 */
	interface User {}
	/**
	 * The shape of the account object returned in the OAuth providers' `account` callback,
	 * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
	 */
	interface Account {}

	/**
	 * Returned by `useSession`, `auth`, contains information about the active session.
	 */
	interface Session {
		user: {
			address: string
		} & DefaultSession['user']
	}
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule

declare module 'next-auth/jwt' {
	/** Returned by the `jwt` callback and `auth`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		idToken?: string
	}
}
