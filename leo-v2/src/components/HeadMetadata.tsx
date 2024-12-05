'use client'

import type { Metadata } from 'next'

export function HeadMetadata(props: { metadata: Metadata }) {
  const { title, description } = props.metadata
  return (
    <>
      {title && <title>{title?.toString()}</title>}
      {description && <meta name='description' content={description} />}
    </>
  )
}
