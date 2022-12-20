const BulletList = () => {
  return (
    <ul className="bullet-list">
      <li className="bullet-list__item">
        <span className="bullet-list__bullet">1</span>
        <p className="bullet-list__text">
          <strong>Velocidade:</strong> grandeza vetorial que indica a distancia
          percorrida durante um intervalo de tempo.
        </p>
      </li>
      <li className="bullet-list__item">
        <span className="bullet-list__bullet">2</span>
        <p className="bullet-list__text">
          <strong>Massa:</strong> grandeza escalar que indica a distancia
          percorrida durante um intervalo.
        </p>
      </li>
    </ul>
  )
}

export { BulletList }
