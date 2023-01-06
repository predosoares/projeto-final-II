// import { BulletList } from 'components/BulletList'
import { Details } from 'components/Details'
import { Explorable } from 'components/Explorable'
import { Start } from 'components/explorables/physics/calorimetry/coffee/Start'
import { Separator } from 'components/Separator'
import { Summary } from 'components/Summary'

function Chapter() {
  return (
    <div className="chapter">
      <div className="chapter__wrapper">
        <main className="chapter__content">
          <section className="chapter__section --v-summary">
            <header className="chapter__header">
              <h2 className="chapter__heading-xl">Calorimetria</h2>
              <h1 className="chapter__heading-3xl">O café perfeito</h1>
            </header>
            <p className="chapter__text">
              Nada como tomar um bom café durante a manhã para começar bem o
              dia, você sabe fazer café? Provavelmente sim, e se não sabe tá
              tudo bem, comece colocando 300ml de água na panela e vamos
              esquentá-la para conseguir realizar a extração do nosso café com o
              filtro de papel.
            </p>

            <Summary
              content={{
                title: 'O que vamos aprender',
                topics: [
                  'O que é calor especifico?',
                  'Como a temperatura da água afeta o sabor do café?',
                  'Como fazer o seu café ideal?',
                ],
              }}
            />
          </section>

          <section className="chapter__section">
            <h2 className="chapter__heading-2xl">Como fazer café ?</h2>
            <p className="chapter__text">
              Nada como tomar um bom café durante a manhã para começar bem o
              dia, você sabe fazer café? Provavelmente sim, e se não sabe tá
              tudo bem, comece colocando 300ml de água na panela e vamos
              esquentá-la para conseguir realizar a extração do nosso café com o
              filtro de papel.
            </p>
            <Explorable>
              <Start />
            </Explorable>
            <p className="chapter__text">
              Para você aquecer a água até os 100°C você teve que expor a água,
              que estava a temperatura ambiente, a uma fonte de calor, que nesse
              caso foi a boca do fogão. Sabendo que o calor especifico da água é
              1,0 cal/g°C, e dada a equação fundamental da calorimetria:
            </p>
            Q = m * c * delta temperatura
            <p className="chapter__text">Temos que:</p>Q = 300 * 1 * 75 = 22.500
            cal = 22.5 kcal
            <p className="chapter__text">
              Com isso podermos determinar, desprezando as perdas de calor, que
              a nossa fonte emite em média 93.75 cal/s.
            </p>
          </section>

          <Separator />

          <section className="chapter__section">
            <h2 className="chapter__heading-2xl">
              Quanto mais quente mais amargo, e 100ºC é na verdade super quente
            </h2>
            <p className="chapter__text">
              Eu não sei o quanto você é entendido de café, mas a realidade é
              que utilizar água a 100ºC para extrair a bebida não é o ideal. O
              café é uma das bebidas mais complexas, só que também não chega a
              ser uma ciência de foguete, afinal todo mundo sabe preparar,
              correto?
            </p>
            <p className="chapter__text">
              Pode não parecer, só que um café tem várias variáveis em seu
              preparo: a fonte da água, a pureza da água, a temperatura da água,
              a safra do grão, a gramatura do grão, o nível de torra do grão, o
              período de tempo entre a torra e o preparo, quanto tempo o grão
              foi moído, o método de preparo, e muito mais, muito mais mesmo!
              Cada método de preparo tem mais outra dezena de variáveis que vão
              mudar o sabor do seu café, e, na verdade, preparar café pode ser
              sim uma ciência de foguete, dependendo do quão apaixonado você é.
            </p>
            <Details title="Do ácido, ao doce, ao amargo">
              <p className="chapter__text">
                O processo de extração do café nos permite chegar a três
                sabores: o ácido, o doce e o amargo. Na ilustração abaixo você
                pode observar como o nível de extração afeta os sabores do café.
                A doçura do café nada tem a ver com o doce do açúcar, essa
                doçura é semelhante a das frutas, até mesmo porque o café é
                obtido através das sementes da fruta.
              </p>
              <p className="chapter__text">
                Quando um café está subextraido, ele tende a ter um sabor mais
                ácido, e perde em complexidade por ter menos presença dos demais
                sabores. Para perceber a acidez de um que é muito simples,
                quanto mais ácido for seu café, mais a sua boca vai salivar. Já
                quando um café é superextraido, ele tende a ser mais amargo.
                Para perceber o amargor também é simples, quanto mais amargo
                mais a nossa boca tende a fechar e se for muito amargo mesmo
                você pode acabar até fazendo uma careta.
              </p>
              <p className="chapter__text">
                Mais uma dica para perceber o amargor é lembrar de qualquer
                preparo de café em pó comprado em super mercado, sem açucar.
                Essa associação vale porque o café em pó do super mercado é um
                café que por sua natureza é amargo, pois tem um processo de
                torra muito desenvolvido, ampliando ao máximo o amargor, por
                isso que ele é tão escuro.
              </p>
              <p className="chapter__text">
                O sabor &ldquo;ideal&ldquo; do café seria percebido numa
                extração equilibrada, com o café apresentando acidez, doçura e
                amargor. O papel da água na extração é crucial, se a água do
                preparo estiver abaixo de 90°C o café pode estar subextraído, se
                a água estiver a mais de 96°C o café pode estar superextraído.
                Podendo ainda assim os sabores variarem de acordo com o nível de
                torra do café e o método de extração.
              </p>
            </Details>
            <p className="chapter__text">
              De acordo com a SCA (Associação dos Cafés Especial)[20] a
              temperatura ideal da água pra extração do café é 93°C ± 3°C,
              dependendo do grão e do método de preparo. Agora vamos preparar
              uma nova água pra extrair o nosso café e tirar o máximo de sabor
              dele, dessa vez vamos ser um pouco mais técnicos nesse preparo.
              Como já sabemos que nossa fonte de calor emite 93.75 cal/s,
              podemos fazer uma estimativa para saber quanto tempo vai levar
              para nossa água estar a exatamente 93°C.
            </p>
            Q = 300 * 1 * 68 = 20.400 cal T = 20.400 / 93.75 = 217,6 segundos =
            3 minutos e 37 segundos.
            <p className="chapter__text">
              Agora que a gente já sabe quanto tempo precisamos aquecer a água,
              assim que começarmos a esquentar, vamos aguardar 3 minutos e 37
              segundos para desligar o fogão e prepararmos nosso café.
            </p>
            <Explorable>
              <Start />
            </Explorable>{' '}
          </section>

          <Separator />

          <section className="chapter__section">
            <h2 className="chapter__heading-2xl">
              Preparando o seu café ideal
            </h2>

            <p className="chapter__text">
              Apesar de todas essas variáveis e essas convenções de preparo
              feitas pela SCA, a verdade é que o seu café perfeito depende do
              seu paladar, só você pode saber qual é o seu café ideal. Ou seja,
              quanto mais preparos de cafés você provar, maiores as chances de
              você saber qual é o seu café ideal.
            </p>

            <p className="chapter__text">
              A partir daqui é com você, escolha sua quantidade ideal para tomar
              e teste diferentes temperaturas para extrair sabores diferentes do
              seu café. Lembre-se que dependendo da quantidade de água que você
              colocar vai alterar o tempo necessário que a água vai ter quer
              ficar no fogo para chegar a temperatura de 93°C.
            </p>

            <p className="chapter__text">
              Você também pode não se estressar com essa variável do seu café e
              só comprar uma chaleira elétrica, elas são uma mão na roda. Tendo
              uma dessas você consegue controlar uma das variáveis mais
              complexas… te deixando livre pra focar nas outras variáveis, que
              na verdade, são igualmente complexas. Café é totalmente ciência de
              foguete.
            </p>
            <Explorable>
              <Start />
            </Explorable>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Chapter
