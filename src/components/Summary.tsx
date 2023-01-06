import { ReaderIcon } from '@radix-ui/react-icons'

interface ISummaryProps {
  content: {
    title: string
    topics: string[]
  }
}

const Summary = ({ content }: ISummaryProps) => {
  const { title, topics } = content

  return (
    <section className="summary">
      <header className="summary__header">
        <ReaderIcon className="summary__icon" />
        <h3 className="summary__heading-3">{title}</h3>
      </header>

      <ol className="summary__list">
        {topics.map(topic => (
          <li key={topic} className="summary__item">
            <p className="summary__text">{topic}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export { Summary }
