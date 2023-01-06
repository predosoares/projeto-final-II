import { KeyboardControls, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Experience } from './shared/Experience'
// import { Interface } from './shared/Interface'

export const Start = () => {
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
