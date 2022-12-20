import { RocketIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const Details = () => {
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

        <p className="details__heading-lg">
          How to tell if a calculation is expensive?
        </p>

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
      <div className="details__content">
        <p className="details__text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          nulla soluta ad repellendus velit eaque architecto saepe delectus
          consectetur reprehenderit rem. Doloribus quibusdam atque dicta id
          distinctio itaque ea earum!
        </p>
      </div>
    </details>
  )
}

export { Details }
