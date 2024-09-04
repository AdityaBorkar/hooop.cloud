import { Suspense } from 'react'

import LoadingSpinner from '../Form/LoadingSpinner'
import ModalClose from './ModalClose'

type ModalRendererProps = {
  modalId: string
  modals: {
    [key: string]:
      | ((props: { modalId: string }) => React.JSX.Element)
      | ((props: { modalId: string }) => Promise<React.JSX.Element>)
  }
}

// TODO: How to manage multiple open modals? nested opened modals?
// TODO: Dismiss Modal: on ESC key / on press outside of Modal.
// TODO: Add inert to body and exclude Modal from it.
// TODO: Modal Animation iOS-like

export default function ModalWrapper({ modalId, modals }: ModalRendererProps) {
  const modalUid = modalId?.split(':')?.[0]
  const ModalComponent = modals?.[modalUid]
  if (!modalId || !ModalComponent) return null
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/70">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="relative">
          <ModalComponent modalId={modalId} />
          <ModalClose />
        </div>
      </Suspense>
    </div>
  )
}
