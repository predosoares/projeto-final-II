import { KeyboardControls, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useDisableKeyboardNavigation } from 'hooks/useDisableKeyboardNavigation'
import { ExplorableProgress } from 'hooks/useExplorable'

import { useGame } from 'stores/explorables/physics/calorimetry/coffee/useGame'

import { Experience } from './shared/Experience'
import { Interface } from './shared/Interface'

const DisableRender = () => useFrame(() => null, 1000)

interface ICalorimetryCoffeeProps {
  level: ExplorableProgress
}

export const CalorimetryCoffee = ({ level }: ICalorimetryCoffeeProps) => {
  const currLevel = useGame(state => state.level)

  useDisableKeyboardNavigation({
    containerId: 'explorable',
  })

  const disableRender = currLevel !== level

  return (
    <KeyboardControls
      map={[
        { name: 'toggleHeatSource', keys: ['Space'] },
        // { name: 'restartPhase', keys: [ 'KeyR' ] },
      ]}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: false,
          alpha: false,
        }}
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-2.5, 5, 14],
        }}
      >
        {disableRender && DisableRender}

        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          minDistance={5}
          maxDistance={8}
        />
        <Experience />
      </Canvas>
      <Interface />
    </KeyboardControls>
  )
}
