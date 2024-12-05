import { VariantProps, cva } from 'cva'
import { IconType } from 'react-icons'
import { IoIosRefresh } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> & {
    icon?: IconType
    loading?: boolean
  }

export default function Button({
  icon,
  size,
  variant,
  disabled,
  loading,
  children,
  className,
  ...props
}: ButtonProps) {
  const Icon = icon ? icon : loading ? IoIosRefresh : null
  return (
    <button
      className={twMerge(ButtonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {Icon && (
        <Icon
          className={twMerge(
            'mr-2 inline-block align-[-2px]',
            loading && 'animate-spin text-white',
          )}
        />
      )}
      {children}
    </button>
  )
}

const ButtonVariants = cva(
  'mx-auto block rounded-md border bg-neutral-900 font-medium text-neutral-400 transition-all enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-80',
  {
    variants: {
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-4 py-2 text-sm',
      },
      variant: {
        primary:
          'border-neutral-500 bg-neutral-200 text-neutral-900 enabled:hover:bg-neutral-300',
        secondary:
          'border-neutral-700 bg-neutral-800 text-neutral-200 enabled:hover:bg-neutral-900',
        green:
          'border-green-800 bg-green-700 text-white enabled:hover:bg-green-800',
        danger: 'border-red-700 bg-red-600 text-white enabled:hover:bg-red-700',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'sm',
    },
  },
)
