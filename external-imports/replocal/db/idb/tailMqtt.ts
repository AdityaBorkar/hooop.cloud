import type { IDBPDatabase } from 'idb'

import $RequestAccessToken from '@/actions/db/accessToken'
import { iot, mqtt } from 'aws-iot-device-sdk-v2'

const Resource = {
  // TODO: Replace it with SST Ion once GA.
  App: {
    name: 'leo',
    stage: 'dev',
  },
  SyncRealtime: {
    authorizer: 'leo-dev-SyncRealtimeAuthorizer',
    endpoint: 'a1lfjmuly172sb-ats.iot.ap-south-1.amazonaws.com',
  },
}

export default async function tailMqtt({
  deviceId,
  database,
}: {
  deviceId: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  database: IDBPDatabase<any>
}) {
  // WHAT IF SOMEONE STEALS THE TOKEN? - It's a one-time token
  const accessToken = await $RequestAccessToken({ deviceId })
  if (!accessToken) throw 'Access Token Denied'

  const mqttClient = new mqtt.MqttClient()
  const connection = mqttClient.new_connection(
    iot.AwsIotMqttConnectionConfigBuilder.new_with_websockets()
      .with_endpoint(Resource.SyncRealtime.endpoint)
      .with_client_id(`client_${deviceId}`)
      .with_clean_session(true)
      // .with_will({})
      .with_custom_authorizer(
        '',
        Resource.SyncRealtime.authorizer,
        '', // TODO - Enable Signing for DDoS Prevention
        accessToken,
      )
      .build(),
  )

  return new Promise<{
    timestamp: Date
    unsubscribe: () => void
  }>((resolve, reject) => {
    connection.on('connect', async () => {
      await connection.subscribe(
        `${Resource.App.name}/${Resource.App.stage}/${deviceId}`,
        mqtt.QoS.AtLeastOnce,
      )
      resolve({
        timestamp: new Date(),
        unsubscribe: connection.disconnect,
      })
    })

    connection.on('message', (_fullTopic, payload) => {
      console.error('MESSAGE RECIEVED')
      const message = new TextDecoder('utf8').decode(new Uint8Array(payload))
      console.log({ message })
    })

    connection.on('error', error => {
      console.error('CONNECTION FAILED', error)
      reject(error)
    })

    connection.connect()
  })
}
