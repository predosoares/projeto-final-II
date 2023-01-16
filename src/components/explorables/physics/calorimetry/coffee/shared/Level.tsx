/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useKeyboardControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

import { useGame } from 'stores/explorables/physics/calorimetry/coffee/useGame'

import { Fire } from './models/Fire'
import { Kettle } from './models/Kettle'
import { Stove } from './models/Stove'

THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floorMaterial = new THREE.MeshStandardMaterial({
  color: '#63483c',
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

    const unsubscribeHeat = useGame.subscribe(
      state => state.phase,
      value => {
        if (value === 'playing') setIsHeating(true)
        else if (value === 'ended') setIsHeating(false)
      },
    )

    return () => {
      unsubscribeToggleHeatSource()
      unsubscribeHeat()
    }
  }, [])

  return (
    <>
      <mesh
        geometry={boxGeometry}
        material={floorMaterial}
        position={[0, -0.7, 0]}
        scale={[80, 0.2, 80]}
        receiveShadow
      />

      <Stove scale={0.3} />
      <Kettle scale={0.35} position={[0.95, 1.4, 0]} />

      {isHeating && <Fire scale={[2, 1, 2]} position={[0.95, 0.4, 0]} />}
    </>
  )
}
