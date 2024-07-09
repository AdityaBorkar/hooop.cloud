'use client'

import { NewReplocalDatabase } from '@/packages/replocal/db'
import { DatabaseSchema } from './replocal'

export const { DatabaseProvider, useDatabase } =
  NewReplocalDatabase.DDB_IDB<typeof DatabaseSchema>(DatabaseSchema)
