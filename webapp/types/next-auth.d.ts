import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

type GithubData = {
  accessToken: string
  userName: string
}

declare module 'next-auth' {
  interface Session {
    github: GithubData
    user: { id: string } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    github: GithubData
  }
}
