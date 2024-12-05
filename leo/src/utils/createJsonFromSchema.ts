import { Struct } from 'superstruct'

type createJsonFromSchemaProps = {
  schema: any // TODO: Find the superstruct type
  formData: FormData
}

type AnyObjectType = { [key: string]: any }

export default function createJsonFromSchema({
  schema,
  formData,
}: createJsonFromSchemaProps) {
  const data = Object.keys(schema.schema).reduce(
    (data, key) => ({ ...data, [key]: formData.get(key) }),
    {} as AnyObjectType,
  )
  return data
}
