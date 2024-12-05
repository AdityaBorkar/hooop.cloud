import NextAuth from 'next-auth'
import { object, string } from 'superstruct'

import GitHub from '@auth/core/providers/github'

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [GitHub],
  callbacks: {
    jwt({ account, token, profile }) {
      if (account)
        token.github = {
          userName: (profile?.login as string) || '',
          accessToken: account.access_token || '',
        }
      return token
    },
    session({ session, token }) {
      session.user.id = token?.sub
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
    userName: string(),
    accessToken: string(),
  }),
})
