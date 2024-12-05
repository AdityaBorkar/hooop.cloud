/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Projects: {
      name: string
      type: "sst.aws.Dynamo"
    }
    SyncRealtime: {
      authorizer: string
      endpoint: string
      type: "sst.aws.Realtime"
    }
    SyncStatus: {
      name: string
      type: "sst.aws.Dynamo"
    }
    Users: {
      name: string
      type: "sst.aws.Dynamo"
    }
    WebFramework: {
      type: "sst.aws.Nextjs"
      url: string
    }
  }
}
export {}