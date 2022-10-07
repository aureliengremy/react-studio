import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { gsap } from "gsap";


const Guitar = () => {
    const gltf = useLoader(
        GLTFLoader, "/scene/proberaum_-_rehearsal_room/scene.gltf"
    )
    useEffect(()=> {
        gsap.fromTo(gltf.scene.scale, { x: 0, y: 0, z: 0 },{ x: 0.3, y: 0.3, z: 0.3 , duration: 5})
        // gltf.scene.scale.set(0.3, 0.3, 0.3);
        gltf.scene.position.set(0, -2, 0);
        gltf.scene.traverse((object)=> {
            if(object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf])

  return (
    <primitive object={gltf.scene}/>
  )
}

export default Guitar