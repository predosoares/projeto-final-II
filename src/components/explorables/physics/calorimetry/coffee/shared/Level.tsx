/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useKeyboardControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

import { Fire } from './models/Fire'
import { Stove } from './models/Stove'

THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floorMaterial = new THREE.MeshStandardMaterial({
  color: '#835f4f',
  metalness: 0,
  roughness: 1,
  toneMapped: false,
})

export function Level() {
  const [subscribeKeys] = useKeyboardControls()

  const [isHeating, setIsHeating] = useState<boolean>(false)

  useEffect(() => {
    const unsubscribeToggleHeatSource = subscribeKeys(
      state => state.toggleHeatSource,
      value => {
        if (value) {
          setIsHeating(curr => !curr)
        }
      },
    )

    return () => {
      unsubscribeToggleHeatSource()
    }
  }, [])

  return (
    <>
      <mesh
        geometry={boxGeometry}
        material={floorMaterial}
        position={[0, -0.7, 0]}
        scale={[8, 0.2, 6]}
        receiveShadow
      />

      <Stove scale={0.3} />

      {isHeating && <Fire scale={2.4} position={[0.95, 0.6, 0]} />}
    </>
  )
}
