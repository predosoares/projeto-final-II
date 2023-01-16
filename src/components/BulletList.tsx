interface IBulletListProps {
  items?: Array<{
    value: string
    label: string
  }>
}

const BulletList = ({ items = [] }: IBulletListProps) => {
  return (
    <ul className="bullet-list">
      {items?.map((item, index) => (
        <li className="bullet-list__item" key={item.value}>
          <span className="bullet-list__bullet">{index + 1}</span>
          <p className="bullet-list__text-base">
            <strong>{item.value}:</strong> {item.label}
          </p>
        </li>
      ))}
    </ul>
  )
}

export { BulletList }
