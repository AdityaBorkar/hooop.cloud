'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { HiX } from 'react-icons/hi'

// import RegisterShortcuts from '../RegisterShortcuts'

export default function ModalClose() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function closeModal() {
    const params = new URLSearchParams(searchParams)
    params.delete('modal')
    router.replace(pathname + '?' + params.toString())
  }

  return (
    <div
      onClick={closeModal}
      className="absolute -right-12 top-0 cursor-pointer rounded-full bg-neutral-900 p-2 text-neutral-500 hover:bg-neutral-800"
    >
      <HiX className="size-5" />
      {/* <RegisterShortcuts
        shortcuts={[
          {
            keys: 'Escape',
            name: 'Close Modal',
            action: closeModal,
          },
        ]}
      /> */}
    </div>
  )
}
