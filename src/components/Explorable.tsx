import { ReactNode } from 'react'

interface IExplorableProps {
  children: ReactNode
}

const Explorable = ({ children }: IExplorableProps) => {
  return <div className="explorable">{children}</div>
}

export { Explorable }
