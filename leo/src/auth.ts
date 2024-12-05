import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { object, string } from 'superstruct'

import db from '@/packages/database'

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [GitHub],
  callbacks: {
    async jwt({ account, token, profile }) {
      if (account) {
        const id = account?.providerAccountId
        const user = await db.read({ table: 'Users', key: { id } })
        if (!user) {
          await db.create({
            table: 'Users',
            data: {
              id,
              name: profile?.name as string,
              email: profile?.email as string,
              projectList: [],
              // TODO: GitHub App Installation Token
              // github: {
              //   id: ((profile?.id as string) || '').toString(),
              //   userName: (profile?.login as string) || '',
              //   accessToken: account.access_token || '',
              // },
            },
          })
        }
        token.github = {
          id: ((profile?.id as string) || '').toString(),
          userName: (profile?.login as string) || '',
          accessToken: account.access_token || '',
        }
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.github.id
      session.github = token.github
      return session
    },
  },
})

// TODO - MAKE IT VERY STRICT. NO EXTRA ATTRIBUTES.
export const UserSchema = object({
  expires: string(),
  user: object({
    id: string(),
    name: string(),
    email: string(),
    image: string(),
  }),
  github: object({
    id: string(),
    userName: string(),
    accessToken: string(),
  }),
})
