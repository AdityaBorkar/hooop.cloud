import db from '@/database'
// import CompileConditionExpression from '@/packages/replocal/db/ddb/operations/compiler/ConditionExpression'

export async function GET() {
  try {
    console.log('@-------------------------------------')
    console.time('TIMER')
    // 15-23ms = 1.6s
    // 30-40ms = 3.7s
    for (let i = 0; i < 1000000; i++) {
      db.Projects.put({ id: '12' }).values().metadata({
        consumedCapacity: 'TOTAL',
        metrics: true,
      })
    }
    // .execute({})
    console.timeEnd('TIMER')
    console.log('#-------------------------------------')

    return Response.json({ hello: 'world' })
  } catch (err) {
    return Response.json(err)
  }
}

// ----

// const schema = new Schema({
//   keys: {
//     id: 'string',
//   },
//   fields: {
//     user: {
//       name: 'string',
//       address: 'string',
//     },
//     projects: [
//       {
//         id: 'string',
//         name: 'string',
//       },
//     ] as {
//       id: string
//       name: string
//     }[],
//   },
// })

// type SchemaFields = keyof typeof schema.item

// type UnionToTuple<U> = (U extends any ? (k: U) => void : never) extends (
//   k: infer I,
// ) => void
//   ? I[]
//   : []

// type Join<T extends readonly string[], S extends string = ''> = T extends [
//   infer F extends string,
//   ...infer R extends string[],
// ]
//   ? `${S},${F}` | Join<R, `${S},${F}`>
//   : never

// // type ItemTuple = UnionToTuple<SchemaFields>
// type ItemTuple = ['user', 'projects', 'id']
// type ConcatenatedItems = Join<ItemTuple>

// function sampleFn(expression: ConcatenatedItems) {
//   const keys = schema.item
//   return
// }

// function getItems<T extends TypeName>(type: T) : ObjectType<T>[]  {
//   return shapes.filter(s => s.type == type) as ObjectType<T>[];
// }

// ReturnValue = "STRING" | "CONSTANT" | "NUMBER" | null

// TODO: TEST DRIVEN DEVELOPMENT
// 'id.exists() AND ( name.fullName.notExists() )'
// 'id.exists() AND ( ProductReviews.FiveStar.isOfType )',
// 'id.exists() AND ( ProductReviews.size() > 100 )',
// 'id.exists() AND ( name.fullName.notExists() ProductReviews.FiveStar.isOfType(STRING) )'
// 'id.exists() AND ( name.fullName.notExists() OR ProductReviews.FiveStar.isOfType(STRING) )'
// 'id.exists() AND ( ProductReviews.FiveStar.isOfType > ProductReviews.FiveStar.isOfType )',
// 'id.exists() AND ( ProductReviews.FiveStar.isOfType > ) ProductReviews.FiveStar.isOfType',
// 'id.exists() AND  ProductReviews.FiveStar.isOfType ( > ProductReviews.FiveStar.isOfType ) ',
// const res = CompileConditionExpression(
//   'id.exists() AND ( ProductReviews.FiveStar.isOfType > ProductReviews.FiveStar.isOfType ) ',
//   // 'id.exists() AND ( ProductReviews.FiveStar.isOfType > ) ProductReviews.FiveStar.isOfType',
//   // 'id.exists() AND ( name.fullName.notExists() OR ProductReviews.FiveStar.isOfType(STRING) ) AND employees.count > 5 AND "active" = status',
//   // attr('id').exists AND ( attr('name').notExists OR attr('ProductReviews.FiveStar').isOfType('<DATA-TYPE>') )
//   // id.exists AND name.notExists OR ProductReviews.FiveStar.isOfType('<DATA-TYPE>') ) AND id = "AdityaBorkar" .contains() .begins_with() .size
//   // attribute_exists('id') AND ( attribute_not_exists('name) OR attribute_type('ProductReviews.FiveStar', '<DATA-TYPE>') )
// )

// ATTRIBUTE .exists() .notExists() .isOfType() .includes() .startsWith()
// ATTRIBUTE .size()
// VALUE: > < >= <= = <>
// condition = operand BETWEEN operand AND operand
// condition = operand IN (operand,operand) (upto 100 values in bracket)
// condition = ATTRIBUTE_FUNCTION (except .size())
// condition = operand COMPARATOR operand
// condition AND OR NOT condition
// = <> < <= > >=

// db.table('users')
//   .put({ data })
// .ifCondition`typeof id != undefined AND ( typeof 'name' == undefined OR typeof 'ProductReviews.FiveStar == string )`
// .ifCondition`AttrExists('id') AND (AttrNotExists('id') OR AttrType('ProductReviews.FiveStar', '<DATA-TYPE>'))`,
// .ifCondition(
//   this.attr('id').exists.and(
//     attr('name').notExists.or(
//       attr('ProductReviews.FiveStar').isOfType('<DATA-TYPE>'),
//     ),
//   ),
// .ifCondition(
//   attributeExists('id').and(
//     attributeNotExists('name').or(
//       attributeIsOfType('ProductReviews.FiveStar', '<DATA-TYPE>'),
//     ),
//   ),
// )

// * FUNCTION OVERLOADING:

// function makeDate(timestamp: number): Date
// function makeDate(m: number, d: number, y: number): string

// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date | string {
//   if (d !== undefined && y !== undefined) return 'string'
//   return new Date(mOrTimestamp)
// }

// const d1 = makeDate(12345678)
// const d2 = makeDate(5, 5, 5)
// const d3 = makeDate(1, 3)

// // * PREDICATES:

// type Fish = { swim: () => void }
// type Bird = { fly: () => void }
// declare function getSmallPet(): Fish | Bird
// // ---cut---
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined
// }

// console.log(isFish({ fly() {} }))
