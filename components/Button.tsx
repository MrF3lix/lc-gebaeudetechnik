import { classNames } from "@/lib/class"
import Link from "next/link"

interface ButtonProps {
  disabled?: boolean,
  rest?: any[],
  children: any,
  primary?: boolean,
  className?: string,
  type?: 'submit' | 'reset' | 'button',
  onClick?(e: any): void
}

interface LinkButtonProps extends ButtonProps {
  href: string
}

export const Button = ({ onClick, className = '', disabled = false, primary = true, children, ...rest }: ButtonProps): JSX.Element => (
  <button
    className={classNames(
      className,
      'self-start rounded-md px-3 py-2 font-semibold',
      primary ? 'bg-gray-900 hover:bg-gray-800 text-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900' : '',
    )}
    type="button"
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
)

export const LinkButton = (params: LinkButtonProps) => (
  <Link href={params.href}>
    <Button {...params}>
      {params.children}
    </Button>
  </Link>
)