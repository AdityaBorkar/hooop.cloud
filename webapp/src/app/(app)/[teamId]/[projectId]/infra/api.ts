'use server'

import {
  CostExplorerClient,
  GetCostAndUsageCommand,
} from '@aws-sdk/client-cost-explorer'
import {
  ResourceExplorer2Client,
  SearchCommand,
} from '@aws-sdk/client-resource-explorer-2'
import {
  ResourceGroupsClient,
  SearchResourcesCommand,
} from '@aws-sdk/client-resource-groups'

const config = {
  region: 'ap-south-1',
  credentials: {
    accessKeyId: 'AKIA52MX3VQJXYH5JY36',
    secretAccessKey: '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',
  },
}

export async function getResourcesList({
  sstAppNames,
  service,
}: {
  sstAppNames: string[]
  service:
    | 'dynamodb'
    | 's3'
    | 'lambda'
    | 'apigateway'
    | 'cloudfront'
    | 'sqs'
    | 'sns'
}) {
  // AWS Resource Explorer > Create Index
  // CreateIndexCommand

  const client = new ResourceExplorer2Client(config)
  const response = await client.send(
    new SearchCommand({
      QueryString:
        (service ? `service:${service} ` : '') +
        sstAppNames.map(appName => `tag:sst\:app=${appName}`).join(' '),
    }),
  )

  if (response.$metadata.httpStatusCode !== 200) {
    console.error(response)
    throw new Error('Failed to list resources by app name')
  } else if (response.NextToken) {
    console.error(response)
    throw new Error('Pagination needed')
  }

  const resources = (response.Resources || []).map(resource => ({
    arn: resource.Arn,
    region: resource.Region,
    serviceCode: resource.Service,
    resourceType: resource.ResourceType,
  }))
  return resources
}

/**
 * @returns {Promise<{ arn: string, type: string }[]>}
 *  */
export async function getResourcesList_ALTERNATIVE({
  sstAppNames,
}: {
  sstAppNames: string[]
}) {
  const client = new ResourceGroupsClient(config)

  const response = await client.send(
    new SearchResourcesCommand({
      ResourceQuery: {
        Type: 'TAG_FILTERS_1_0',
        Query: JSON.stringify({
          ResourceTypeFilters: ['AWS::AllSupported'],
          TagFilters: { Key: 'sst:app', Values: sstAppNames },
        }),
      },
    }),
  )
  if (response.$metadata.httpStatusCode !== 200) {
    console.error(response)
    throw new Error('Failed to list resources by app name')
  } else if (response?.QueryErrors && response.QueryErrors.length > 0) {
    console.error(response)
    throw new Error('Query Failed to list resources by app name')
  }

  const resources = (response.ResourceIdentifiers || []).map(resource => {
    return {
      arn: resource.ResourceArn || '',
      type: (resource.ResourceType || '')?.split('::').slice(1).join(' '),
    }
  })
  return resources
}

export async function getCostProfile(props: {
  sstAppNames: string[]
  startDate: string
  endDate: string
}) {
  const client = new CostExplorerClient({ ...config, region: 'us-east-1' })
  const CostAndUsageData = await client.send(
    new GetCostAndUsageCommand({
      Granularity: 'MONTHLY',
      GroupBy: [{ Type: 'DIMENSION', Key: 'SERVICE' }],
      Metrics: ['NetAmortizedCost', 'NetUnblendedCost'],
      TimePeriod: { Start: props.startDate, End: props.endDate },
      Filter: {
        Tags: {
          Key: 'sst:app',
          Values: props.sstAppNames,
          MatchOptions: ['EQUALS'],
        },
      },
    }),
  )
  if (CostAndUsageData.$metadata.httpStatusCode !== 200)
    throw new Error('Failed to get AWS Cost Profile')

  const GrandTotal: { [Unit: string]: number } = {}
  const estimated = CostAndUsageData.ResultsByTime?.[0].Estimated
  const services = CostAndUsageData.ResultsByTime?.[0].Groups?.map(group => {
    const cost = group.Metrics?.NetAmortizedCost as any
    if (!cost?.Unit) cost['Unit'] = 'INVALID'
    GrandTotal[cost?.Unit] =
      (GrandTotal[cost?.Unit] || 0) + parseFloat(cost?.Amount || '0')
    return { name: group.Keys?.join(' '), cost }
  })
  const total = Object.keys(GrandTotal).map(Unit => ({
    Unit,
    Amount: GrandTotal[Unit],
  }))

  return { estimated, services, total }
}

// * All API's related to billing:
// BillingConductor
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pricing/
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/freetier/
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-optimization-hub/
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-and-usage-report-service/
