/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 arrow1.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/arrow1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.arrow.geometry} material={materials['1d8d4a95841a190db0fdbcb2ea27f06a560c97651eb8b-nXoqm5']} />
    </group>
  )
}

useGLTF.preload('/arrow1.glb')
