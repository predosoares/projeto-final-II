import { HTMLAttributes, ReactNode } from 'react'

interface IExplorableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Explorable = ({ children, ...rest }: IExplorableProps) => {
  return (
    <div className="explorable" {...rest}>
      {children}
    </div>
  )
}

export { Explorable }
