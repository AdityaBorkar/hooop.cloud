'use client'

import { useState } from 'react'

import { useDatabase } from '@/replocal-client'

export default function HelloWorldPage() {
  // const idb = useDatabase()

  // const project = idb.read({
  //   tableName: 'Projects',
  //   keyRange: DbRangeKey.only(projectId),
  // })
  //   .then((project) => {
  //     console.log({ project })
  //   })

  return <div>Hello Worldie</div>
}
