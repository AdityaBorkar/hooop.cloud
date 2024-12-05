'use client'

import { $ProjectCreate } from '@/actions/project/create'

import Button from '@/components/Button'
import Input from '@/components/Input'
import useForm from '@/hooks/useForm'

export default function CreateProjectPage() {
  const { isPending, Form } = useForm({ action: $ProjectCreate })
  return (
    <Form className='mx-auto flex max-w-[350px] flex-col gap-6 py-16'>
      <h1 className='mb-4 text-2xl font-semibold text-neutral-200'>
        Create New Project
      </h1>

      <Input name='organization' label='Organization Name' defaultValue='' />

      <Input name='name' label='Project Name' defaultValue='' />

      <Input name='slug' label='Project Slug' defaultValue='' />

      <Button
        type='submit'
        loading={isPending}
        className='mt-4 border border-neutral-700 text-sm'
      >
        Create Project
      </Button>
    </Form>
  )
}
