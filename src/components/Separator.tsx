import * as RadixSeparator from '@radix-ui/react-separator'
import clsx from 'clsx'

interface ISeparatorProps {
  className?: string
}

const Separator = ({ className = '', ...rest }: ISeparatorProps) => {
  return (
    <RadixSeparator.Root className={clsx('separator', className)} {...rest} />
  )
}

export { Separator }
