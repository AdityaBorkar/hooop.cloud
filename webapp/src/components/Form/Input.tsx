import type { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Input({
  wrapperClass,
  className,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string
  wrapperClass?: string
}) {
  return (
    <div className={wrapperClass}>
      <label className="text-sm text-neutral-300">
        <span className="ml-1">{label}</span>
        <input
          {...props}
          className={twMerge(
            'mt-1 block w-full select-none rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-base text-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-400',
            className,
          )}
        />
      </label>
    </div>
  )
}
