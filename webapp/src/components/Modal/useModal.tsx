'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function useModal(props: { idKey: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const modalId = searchParams.get(props.idKey) || ''

  const getModalId = () => searchParams.get(props.idKey) || ''

  const openModal = (modalId: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('modal', modalId)
    router.replace(pathname + '?' + params.toString())
  }

  return { modalId, getModalId, openModal }
}
