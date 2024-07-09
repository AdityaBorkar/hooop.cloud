'use client'

import { twMerge } from 'tailwind-merge'

import Button from './Button'
import Input from './Input'
import useForm from '@/hooks/useForm'

export default function SingleInputForm({
  formAction,
  formClass,
  ...props
}: React.ComponentProps<typeof Input> & {
  formClass: string
  formAction: (formData: FormData) => Promise<any>
}) {
  const { isPending, Form } = useForm({ action: formAction })
  // const isValueUpdated = props.defaultValue !== inputRef OR IF INPUT REF is dirty // TODO: Show Input only if value is changed
  return (
    <Form className={twMerge('relative', formClass)}>
      <Input {...props} />
      {
        // isValueUpdated &&
        <Button
          size="xs"
          type="submit"
          loading={isPending}
          className="absolute top-8 right-2 mt-0.5"
        >
          Save
        </Button>
      }
    </Form>
  )
}
