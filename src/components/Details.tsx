import { RocketIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { ReactNode, useState } from 'react'

interface IDetailsProps {
  title: string
  children: ReactNode
}

const Details = ({ children, title }: IDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOnDetailsBtn = () => {
    setIsOpen(state => !state)
  }

  return (
    <details className="details" open={isOpen} tabIndex={-1}>
      <summary className="details__summary" tabIndex={-1}>
        <div className="details__header">
          <RocketIcon className="details__icon" />
          <h5 className="details__heading-base">Aprofundando</h5>
        </div>

        <p className="details__heading-lg">{title}</p>

        <button
          className="details__btn"
          type="button"
          role="button"
          onClick={handleClickOnDetailsBtn}
        >
          <ChevronDownIcon
            className="details__btn__icon"
            data-state={isOpen ? 'open' : 'close'}
          />
          {isOpen ? 'Esconder' : 'Mostrar'} detalhes
        </button>
      </summary>
      <div className="details__content">{children}</div>
    </details>
  )
}

export { Details }
