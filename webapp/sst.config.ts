/// <reference path="./.sst/platform/config.d.ts" />

import Database from './stack/database'

export default $config({
  app(input) {
    return {
      name: 'leo',
      home: 'aws',
      providers: {
        aws: { region: 'ap-south-1' },
        // cloudflare: { apiToken: '' },
      },
      removal: input?.stage === 'prod' ? 'retain' : 'remove',
    }
  },
  async run() {
    // Database:
    const databases = Database()

    // Realtime:
    const realtime = new sst.aws.Realtime('SyncRealtime', {
      authorizer: './src/MqttAuth.AuthHandler',
    })

    // Cron Jobs:
    // new sst.aws.Cron('MyCronJob', {
    //   schedule: 'rate(1 minute)',
    //   job: {
    //     handler: 'src/cron.handler',
    //     timeout: '60 seconds',
    //   },
    // })

    // Next.js
    const nextjs =  new sst.aws.Nextjs('WebFramework', {
      link: [...databases,realtime],
      // TODO: Try to deploy entire thing on Cloudflare Workers
      // TODO - Make a hosted zone for leo.platipie.com OR Deploy to cloudflare workers
      // domain: {
      //   name: 'leo.platipie.com',
      //   dns: sst.cloudflare.dns(),
      // },
      // warm: 1
    })

    // TODO: LOG PREVIEW LINKS FOR NEXTJS & REALTIME:
    console.log('Dev. Preview Link: ', nextjs.url.toString())
    
  },
})
