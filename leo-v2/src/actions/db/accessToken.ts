'use server'

import { sign } from 'jsonwebtoken'

import { auth } from '@/auth'
import db from '@/packages/database'

export default async function $RequestAccessToken({
  deviceId,
}: { deviceId: string }) {
  const user = await auth()
  const userId = user?.user.id
  if (!userId) return false as const // throw new Error('Unauthorized')

  const signature = process.env?.MQTT_AUTH_SECRET || ''
  if (!signature) return false as const // throw new Error('Internal Error')

  const DeviceRecord = await db.read({
    key: { deviceId, userId },
    tableName: 'SyncStatus',
  })
  if (!DeviceRecord) return false as const // throw new Error('Device not found')

  const accessToken = sign({ deviceId }, signature, {
    expiresIn: 60000,
  })
  return accessToken
}
