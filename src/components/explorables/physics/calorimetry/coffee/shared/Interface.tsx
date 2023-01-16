import { addEffect } from '@react-three/fiber'
import {
  Timer as TimerIcon,
  Flame as FlameIcon,
  Thermometer as ThermometerIcon,
} from 'phosphor-react'
import { useEffect, useRef } from 'react'

import { ExplorableProgress } from 'hooks/useExplorable'

import { useGame } from 'stores/explorables/physics/calorimetry/coffee/useGame'

const Results = () => {
  const timeRef = useRef<HTMLParagraphElement>(null)
  const temperatureRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const {
      elapsedTime,
      environment: { ambientTemperature, heatSource, mass, specificHeat },
    } = useGame.getState()

    const elapsedTimeInSeconds = elapsedTime / 1000
    const temperature =
      ambientTemperature +
      ((heatSource * elapsedTimeInSeconds) / mass) * specificHeat

    const elapsedTimeText = `${elapsedTimeInSeconds.toFixed(0)} s`
    const temperatureText = `${temperature.toFixed(0)} °C`

    if (timeRef.current) timeRef.current.textContent = elapsedTimeText
    if (temperatureRef.current)
      temperatureRef.current.textContent = temperatureText
  }, [])

  return (
    <>
      <div className="interface__results">
        <div className="interface__results__wrapper">
          <h3 className="interface__results__heading-2xl">Resultados</h3>
          <ul className="interface__results-list">
            <li className="interface__results-item">
              <div className="interface__result">
                <ThermometerIcon className="interface__result__icon" />
                <p className="interface__result__text-base --sr-only">
                  Temperatura da água
                </p>
                <p className="interface__result__text-2xl" ref={temperatureRef}>
                  22°C
                </p>
              </div>
            </li>
            <li className="interface__results-item">
              <div className="interface__result">
                <TimerIcon className="interface__result__icon" />
                <p className="interface__result__text-base --sr-only">
                  Tempo em que água foi aquecida
                </p>
                <p className="interface__result__text-2xl" ref={timeRef}>
                  0s
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

const Interface = () => {
  const timeRef = useRef<HTMLParagraphElement>(null)
  const temperatureRef = useRef<HTMLParagraphElement>(null)

  const start = useGame(state => state.start)
  const end = useGame(state => state.end)
  const phase = useGame(state => state.phase)
  const level = useGame(state => state.level)
  const timeSpeed = useGame(state => state.timeSpeed)

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const {
        currentTime: previousTime,
        phase,
        environment,
        elapsedTime: previousElapsedTime,
        timeSpeed,
      } = useGame.getState()

      /**
       * Time
       */
      let deltaTime = 0
      const currentTime = Date.now()

      if (phase === 'playing') deltaTime = currentTime - previousTime

      const elapsedTime = previousElapsedTime + deltaTime * timeSpeed
      const elapsedTimeInSeconds = elapsedTime / 1000
      const elapsedTimeText = `${elapsedTimeInSeconds.toFixed(0)} s`

      useGame.setState({
        elapsedTime,
        currentTime,
      })

      /**
       * Temperature
       */
      const { ambientTemperature, heatSource, mass, specificHeat } = environment
      const temperature =
        ambientTemperature +
        ((heatSource * elapsedTimeInSeconds) / mass) * specificHeat
      const temperatureText = `${temperature.toFixed(0)} °C`

      if (Math.floor(temperature) >= 100 && phase === 'playing') {
        useGame.setState({ phase: 'ended' })
      }

      /**
       * Update HTML
       */
      if (timeRef.current) timeRef.current.textContent = elapsedTimeText
      if (temperatureRef.current)
        temperatureRef.current.textContent = temperatureText
    })

    return () => {
      unsubscribeEffect()
    }
  }, [])

  const handleClickOnTurnOn = () => {
    start()
  }

  const handleClickOnTurnOff = () => {
    end()
  }

  const actionBtnDisabled =
    level === ExplorableProgress.START && phase === 'playing'

  console.log(phase)

  return (
    <div className="interface">
      <div className="interface__wrapper">
        {/* Config */}
        <div className="interface__top-bar"></div>

        {/* Controls & state */}
        <div className="interface__bottom-bar">
          <div className="interface__actions">
            <button
              className="interface__action-btn"
              type="button"
              onClick={
                phase === 'playing' ? handleClickOnTurnOff : handleClickOnTurnOn
              }
              disabled={actionBtnDisabled}
            >
              <FlameIcon className="interface__action-btn__icon" />
              {phase === 'playing' ? 'Desligar' : 'Acender'}
            </button>
          </div>

          <ul className="interface__conditions-list">
            <li className="interface__conditions-item">
              <div className="interface__condition">
                <ThermometerIcon className="interface__condition__icon" />
                <p className="interface__condition__text-base --sr-only">
                  Temperatura da água
                </p>
                <p
                  className="interface__condition__text-base"
                  ref={temperatureRef}
                >
                  22°C
                </p>
              </div>
            </li>
            <li className="interface__conditions-item">
              <div className="interface__condition">
                <TimerIcon className="interface__condition__icon" />
                <p className="interface__condition__text-base --sr-only">
                  Tempo em que água foi aquecida
                </p>
                <p className="interface__condition__text-base" ref={timeRef}>
                  0s
                </p>
                <span className="interface__badge">
                  velocidade x{timeSpeed}
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Restart & results */}
        {phase === 'ended' && <Results />}
      </div>
    </div>
  )
}

export { Interface }
