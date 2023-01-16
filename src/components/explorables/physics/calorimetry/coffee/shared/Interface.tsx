import { addEffect } from '@react-three/fiber'
import {
  Timer as TimerIcon,
  Flame as FlameIcon,
  Thermometer as ThermometerIcon,
} from 'phosphor-react'
import { useEffect, useRef } from 'react'

import { useGame } from 'stores/explorables/physics/calorimetry/coffee/useGame'

const Interface = () => {
  const timeRef = useRef<HTMLParagraphElement>(null)
  const temperatureRef = useRef<HTMLParagraphElement>(null)

  const start = useGame(state => state.start)
  const end = useGame(state => state.end)
  const phase = useGame(state => state.phase)
  const level = useGame(state => state.level)

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState()

      /**
       * Time
       */
      let elapsedTime = 0

      if (state.phase === 'playing') elapsedTime = Date.now() - state.startTime
      else if (state.phase === 'ended')
        elapsedTime = state.endTime - state.startTime

      elapsedTime /= 1000
      const elapsedTimeText = `${elapsedTime.toFixed(0)} s`

      /**
       * Temperature
       */
      const { ambientTemperature, heatSource, mass, specificHeat } =
        state.environment
      const temperature =
        ambientTemperature + ((heatSource * elapsedTime) / mass) * specificHeat
      const temperatureText = `${temperature.toFixed(0)} °C`

      if (temperature === 100) {
        end()
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

  const actionBtnDisabled = level === 'start' && phase === 'playing'

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
                <p className="interface__condition__text --sr-only">
                  Temperatura da água
                </p>
                <p className="interface__condition__text" ref={temperatureRef}>
                  22°C
                </p>
              </div>
            </li>
            <li className="interface__conditions-item">
              <div className="interface__condition">
                <TimerIcon className="interface__condition__icon" />
                <p className="interface__condition__text --sr-only">
                  Tempo em que água foi aquecida
                </p>
                <p className="interface__condition__text" ref={timeRef}>
                  0s
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Restart & results */}
        {phase === 'ended' && <div className="interface__results"></div>}
      </div>
    </div>
  )
}

export { Interface }
