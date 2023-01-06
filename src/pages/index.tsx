import { RocketIcon } from '@radix-ui/react-icons'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import { Dot } from 'components/Dot'

type Filters = 'all' | 'physics'

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<Filters>('all')

  return (
    <div>
      <Head>
        <title>Explorables Explorer | Explore os explorables disponíveis</title>
        <meta name="description" content="A site for learning with fun" />
      </Head>

      <div className="home">
        <main className="home__wrapper">
          <div className="home__fixed">
            <h1 className="home__heading-3xl">Explorables Explorer</h1>

            <div className="home__filter">
              <p className="home__filter__text-base">Pesquisar por : </p>
              <ul className="home__filter__list">
                <li className="home__filter__option">
                  <button
                    className="home__filter__btn"
                    type="button"
                    onClick={() => setSelectedFilter('all')}
                    data-selected={selectedFilter === 'all'}
                  >
                    Todos
                  </button>
                </li>
                <li className="home__filter__option">
                  <button
                    className="home__filter__btn"
                    type="button"
                    onClick={() => setSelectedFilter('physics')}
                    data-selected={selectedFilter === 'physics'}
                  >
                    <Dot topic="physics" />
                    Física
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="home__results">
            <ul className="home__results__list">
              <li className="home__results__item">
                <Link href="/physics/coffee">
                  <article className="home__explorable">
                    <h2 className="home__explorable__heading-lg">
                      <Dot topic="physics" />
                      Calorimetria
                    </h2>
                    <h1 className="home__explorable__heading-xl">
                      O café perfeito
                    </h1>
                    <p className="home__explorable__text-base">
                      Nada como tomar um bom café durante a manhã para começar
                      bem o dia, você sabe fazer café?
                    </p>

                    <button
                      className="home__explorable__btn"
                      type="button"
                      role="open explorable"
                    >
                      Começar
                      <RocketIcon className="home__explorable__btn__icon" />
                    </button>
                  </article>
                </Link>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
