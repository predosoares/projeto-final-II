import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

import { ExplorableProgress } from 'hooks/useExplorable'

type Phase = 'ready' | 'playing' | 'ended'
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
  currentTime: number
  elapsedTime: number
  timeSpeed: number
  phase: Phase
  level: ExplorableProgress
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
    currentTime: 0,
    elapsedTime: 0,
    timeSpeed: 10,

    /**
     * Phases
     */
    phase: 'ready',

    /**
     * Levels
     */
    level: ExplorableProgress.NOT_STARTED,

    start: () => {
      set(state => {
        if (state.phase === 'ready') {
          return {
            phase: 'playing',
            currentTime: Date.now(),
          }
        }

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
        if (state.phase === 'playing') return { phase: 'ended' }

        return {}
      })
    },
  })),
)
