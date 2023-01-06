/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useGLTF, useKeyboardControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

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

  const stove = useGLTF('/models/stove.glb')
  const fire = useGLTF('/models/fire.glb')

  const [isHeating, setIsHeating] = useState<boolean>(false)

  stove.scene.children.forEach(mesh => {
    mesh.castShadow = true
  })

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

  console.log(isHeating)

  return (
    <>
      <mesh
        geometry={boxGeometry}
        material={floorMaterial}
        position={[0, -0.7, 0]}
        scale={[8, 0.2, 6]}
        receiveShadow
      />

      <primitive object={stove.scene} scale={0.3} />

      {isHeating && (
        <primitive object={fire.scene} scale={2.4} position={[0.95, 0.6, 0]} />
      )}
    </>
  )
}
