import {
  ResourceGroupsClient,
  SearchResourcesCommand,
  SearchResourcesCommandInput,
} from '@aws-sdk/client-resource-groups'

const client = new ResourceGroupsClient({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: 'AKIA52MX3VQJXYH5JY36',
    secretAccessKey: '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',
  },
})

export async function listResourcesByAppName({ appName }: { appName: string }) {
  const input = {
    ResourceQuery: {
      Type: 'TAG_FILTERS_1_0',
      Query: JSON.stringify({
        ResourceTypeFilters: ['AWS::AllSupported'],
        TagFilters: [
          { Key: 'sst:app', Values: [appName] },
          // { Key: 'sst:stage', Values: ['dev'] },
        ],
      }),
    },
    // MaxResults: Number('int'),
    // NextToken: 'STRING_VALUE',
  } satisfies SearchResourcesCommandInput
  const command = new SearchResourcesCommand(input)

  const response = await client.send(command)
  if (response.$metadata.httpStatusCode !== 200) {
    console.error(response)
    throw new Error('Failed to list resources by app name')
  } else if (response?.QueryErrors && response.QueryErrors.length > 0) {
    console.error(response)
    throw new Error('Query Failed to list resources by app name')
  }

  const resources = (response.ResourceIdentifiers || []).map((resource) => {
    return {
      arn: resource.ResourceArn || '',
      type: (resource.ResourceType || '')?.split('::').slice(1).join(' '),
    }
  })
  return resources
}
