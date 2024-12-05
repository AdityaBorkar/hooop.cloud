'use client'

import type { FormHTMLAttributes } from 'react'

import { redirect } from 'next/navigation'
import { useActionState } from 'react'
import { toast } from 'sonner'

export default function useForm({
  action,
}: {
  action: (data: FormData) => any
}) {
  const [error, $SubmitAction, isPending] = useActionState(
    async (previousState: any, formData: any) => {
      if (!action || typeof action === 'string') return null
      const result = (await action(formData)) as any
      if (result.error) {
        const error = result.error
        toast.error(error)
        return error
      }
      toast.success(result.success)
      if (result.redirect) redirect(result.redirect)
      return null
    },
    null,
  )

  function Form({
    children,
    ...props
  }: Omit<FormHTMLAttributes<HTMLFormElement>, 'action'>) {
    return (
      <form action={$SubmitAction} {...props}>
        {children}
      </form>
    )
  }

  return { isPending, Form }
}
