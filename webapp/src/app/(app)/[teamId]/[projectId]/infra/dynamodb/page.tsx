import { getResourcesList } from '../api'

export default async function ProjectInfraDynamodbPage() {
  // const tables = await getResourcesList({
  //   sstAppNames: ['leo'],
  //   service: 'dynamodb',
  // })
  return (
    <div>
      {/* {tables.map((table, index) => (
        <div key={index}>{table.arn}</div>
      ))} */}
    </div>
  )
}
