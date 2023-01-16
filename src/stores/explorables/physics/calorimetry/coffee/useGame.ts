import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

type Phase = 'ready' | 'playing' | 'ended'
export type Level = 'start' | 'develop' | 'explore'
type Environment = {
  // cal/g.C°
  specificHeat: number
  // g
  mass: number
  // cal/s
  heatSource: number
  // C°
  ambientTemperature: number
}

interface ICalorimetryCoffeeGameState {
  environment: Environment
  startTime: number
  endTime: number
  phase: Phase
  level: Level
  start: () => void
  restart: () => void
  end: () => void
}

export const useGame = create<ICalorimetryCoffeeGameState>()(
  subscribeWithSelector(set => ({
    /**
     * Environment
     */
    environment: {
      specificHeat: 1,
      mass: 300,
      heatSource: 93.75,
      ambientTemperature: 22,
    },

    /**
     * Time
     */
    startTime: 0,
    endTime: 0,

    /**
     * Phases
     */
    phase: 'ready',

    /**
     * Levels
     */
    level: 'start',

    start: () => {
      set(state => {
        if (state.phase === 'ready')
          return { phase: 'playing', startTime: Date.now() }

        return {}
      })
    },

    restart: () => {
      set(state => {
        if (state.phase === 'playing' || state.phase === 'ended')
          return { phase: 'ready' }

        return {}
      })
    },

    end: () => {
      set(state => {
        if (state.phase === 'playing')
          return { phase: 'ended', endTime: Date.now() }

        return {}
      })
    },
  })),
)
