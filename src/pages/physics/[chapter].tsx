import { BulletList } from 'components/BulletList'
import { Details } from 'components/Details'
import { Explorable } from 'components/Explorable'
import { Separator } from 'components/Separator'
import { Summary } from 'components/Summary'

function Chapter() {
  return (
    <div className="chapter">
      <div className="chapter__wrapper">
        <main className="chapter__content">
          <section className="chapter__section --v-summary">
            <header className="chapter__header">
              <h2 className="chapter__heading-3">Estática</h2>
              <h1 className="chapter__heading-1">Cinemática Escalar</h1>
            </header>
            <p className="chapter__text">
              Sendo assim, temos uma fórmula que relaciona matematicamente os
              espaços (S) desse objeto com os instantes correspondentes (t) e
              chamamos isso de função horária do espaço.
            </p>

            <Summary />
          </section>

          <section className="chapter__section">
            <h2 className="chapter__heading-2">
              Contextualização (Pergunta Curiosa)
            </h2>
            <p className="chapter__text">
              Essa função possui formas diferentes no Movimento retilíneo
              uniforme (MRU) e no movimento uniformemente variado (MUV).
            </p>

            <Explorable />
          </section>

          <Separator />

          <section className="chapter__section">
            <h2 className="chapter__heading-2">
              Definições (Construindo Abstrações)
            </h2>
            <p className="chapter__text">
              Essa função possui formas diferentes no Movimento retilíneo
              uniforme (MRU) e no movimento uniformemente variado (MUV).
            </p>
            <Details />
            <p className="chapter__text">
              Sendo assim, temos uma fórmula que relaciona matematicamente os
              espaços (S) desse objeto com os instantes correspondentes (t) e
              chamamos isso de função horária do espaço. Essa função possui
              formas diferentes no Movimento retilíneo uniforme (MRU) e no
              movimento uniformemente variado (MUV).
            </p>
            <BulletList />

            <Explorable />
          </section>
        </main>
      </div>
    </div>
  )
}

export default Chapter
