import "sst"
declare module "sst" {
  export interface Resource {
    Projects: {
      name: string
      type: "sst.aws.Dynamo"
    }
    Users: {
      name: string
      type: "sst.aws.Dynamo"
    }
  }
}
export {}