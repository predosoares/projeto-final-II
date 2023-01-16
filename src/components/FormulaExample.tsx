import { ReactNode } from 'react'

interface IFormulaExampleProps {
  children: ReactNode
}

const FormulaExample = ({ children }: IFormulaExampleProps) => {
  return (
    <div className="formula-example">
      <p className="formula-example__text-base">{children}</p>
    </div>
  )
}

export { FormulaExample }
