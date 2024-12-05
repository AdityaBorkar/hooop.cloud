/// <reference path="./.sst/platform/config.d.ts" />
<<<<<<< HEAD
<<<<<<< HEAD
import Database from './stack/database'
=======
>>>>>>> c9648a0 (update workflows)
=======
import Database from './stack/database'
>>>>>>> a530fbf (progress)

export default $config({
  app(input) {
    return {
      name: 'leo',
<<<<<<< HEAD
<<<<<<< HEAD
      home: 'aws',
      providers: {
        aws: { region: 'ap-south-1' },
        // cloudflare: { apiToken: '' },
      },
      removal: input?.stage === 'prod' ? 'retain' : 'remove',
    }
  },
  async run() {
    // Tags:
    // import { Tags } from "aws-cdk-lib";
    // Tags.of($app).add('projectName', `${$app.name}`)

    // Database:
    const databases = Database()

    // Cron Jobs:
    // new sst.aws.Cron('MyCronJob', {
    //   schedule: 'rate(1 minute)',
    //   job: {
    //     handler: 'src/cron.handler',
    //     timeout: '60 seconds',
    //   },
    // })

    // Next.js
    new sst.aws.Nextjs('WebFramework', {
      link: [...databases],
      // domain: {
      //   name: 'leo.platipie.com',
      //   dns: sst.cloudflare.dns(),
      // },
      // warm: 1
    })

    // TODO: Try to deploy on Cloudflare Workers
=======
      removalPolicy: input?.stage === 'production' ? 'retain' : 'remove',
=======
      home: 'aws',
      providers: {
        aws: { region: 'ap-south-1' },
      },
      removal: input?.stage === 'production' ? 'retain' : 'remove',
>>>>>>> a530fbf (progress)
    }
  },
  async run() {
    // Tags:
    // import { Tags } from "aws-cdk-lib";
    // Tags.of($app).add('projectName', `${$app.name}`)

<<<<<<< HEAD
<<<<<<< HEAD
    const nextjs = new sst.aws.Nextjs('WebFramework', {})
    console.log('Preview Link: ', nextjs.url.toString())
>>>>>>> c9648a0 (update workflows)
=======
    // Tables:
    const myTable = new sst.aws.Dynamo('MyTable', {
      fields: { userId: 'string', noteId: 'string' },
      primaryIndex: { hashKey: 'userId', rangeKey: 'noteId' },
      globalIndexes: {
        CreatedAtIndex: { hashKey: 'userId', rangeKey: 'createdAt' },
      },
      localIndexes: {
        CreatedAtIndex: { rangeKey: 'createdAt' },
      },
    })
=======
    // Database:
    const databases = Database()
>>>>>>> a530fbf (progress)

    // Cron Jobs:
    // new sst.aws.Cron('MyCronJob', {
    //   schedule: 'rate(1 minute)',
    //   job: {
    //     handler: 'src/cron.handler',
    //     timeout: '60 seconds',
    //   },
    // })

    // Next.js
    new sst.aws.Nextjs('WebFramework', {
      link: [...databases],
      // TODO - Make a hosted zone for leo.platipie.com OR Deploy to cloudflare workers
      // domain: 'leo.platipie.com',
      // warm: 1
    })
>>>>>>> 91fc705 (progress)
  },
})
