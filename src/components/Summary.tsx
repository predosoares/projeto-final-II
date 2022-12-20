import { ReaderIcon } from '@radix-ui/react-icons'

const Summary = () => {
  return (
    <section className="summary">
      <header className="summary__header">
        <ReaderIcon className="summary__icon" />
        <h3 className="summary__heading-3">Você vai aprender</h3>
      </header>

      <ol className="summary__list">
        <li className="summary__item">
          <p className="summary__text">O que é velocidade.</p>
        </li>
        <li className="summary__item">
          <p className="summary__text">
            Você consegue alcançar até que velocidade?
          </p>
        </li>
        <li className="summary__item">
          <p className="summary__text">
            Tente correr em uma curva e você será jogado pra fora dela.
          </p>
        </li>
      </ol>
    </section>
  )
}

export { Summary }
