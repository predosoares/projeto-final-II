import { KeyboardControls, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'

import { Experience } from './shared/Experience'
// import { Interface } from './shared/Interface'

export const CalorimetryCoffee = () => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === 'Space' && event.target === document.body) {
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <KeyboardControls
      map={[
        { name: 'toggleHeatSource', keys: ['Space'] },
        // { name: 'restartPhase', keys: [ 'KeyR' ] },
      ]}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
      >
        <OrbitControls />
        <Experience />
      </Canvas>
      {/* <Interface /> */}
    </KeyboardControls>
  )
}
