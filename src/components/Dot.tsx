import clsx from 'clsx'

interface IDotProps {
  topic: 'physics' | string
}

const Dot = ({ topic }: IDotProps) => {
  return <div className={clsx('dot', `--${topic}`)} />
}

export { Dot }
