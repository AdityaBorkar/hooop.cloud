import { decode } from 'jsonwebtoken'
import { Resource } from 'sst'
import { RealtimeAuthHandler } from 'sst'
import { realtime } from 'sst/aws/realtime'

export const AuthHandler = RealtimeAuthHandler(async token => {
  const data = decode(token)
  const deviceId = data?.deviceId || ''

  const expiry = data?.exp || 0
  const isExpired = Math.floor(Date.now().valueOf() / 1000) > expiry
  if (!expiry || isExpired) return { publish: [], subscribe: [] }

  const endpoint = `${Resource.App.name}/${Resource.App.stage}/${deviceId}`
  return { publish: [endpoint], subscribe: [endpoint] }
})
