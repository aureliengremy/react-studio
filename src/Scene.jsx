import { Fragment, useEffect, useRef } from "react";
import Studio from "./Studio";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { gsap } from "gsap";

const Scene = () => {
  const cam = useRef();
  const cameraPosition = [-5, 5, 16];

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 });
    tl.to(cam.current.position, { x: 5, y: 3, z: 16, duration: 10 })
      .to(cam.current.position, { x: 3, y: 8, z: 14, duration: 10 })
      .to(cam.current.position, { x: -5, y: 3, z: 16, duration: 10 })
      .to(cam.current.position, { x: 5, y: 4, z: 16, duration: 10 })
      .to(cam.current.position, { x: -5, y: 5, z: 16, duration: 10 });
  }, []);

  return (
    <Fragment>
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera
        ref={cam}
        makeDefault
        fov={50}
        position={cameraPosition}
      />
      <color args={[0, 0, 0]} attach="background" />

      {/* make all the element reflect all light texture */}
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <Fragment>
            <Environment map={texture} />
            <Studio />
          </Fragment>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1}
        angle={1.5}
        penumbra={0.5}
        position={[0, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={1.2}
        angle={2}
        penumbra={0.5}
        position={[0, 10, 2]}
        castShadow
        shadow-bias={-0.0001}
      />

      <EffectComposer>
      {/* Make the scene and models more blur when you move back with the camera */}
      <DepthOfField focusDistance={0.0035} focalLength={0.02} bokehScale={2} height={480} />
      {/* <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          // luminanceThreshold={0.8} // luminance threshold. Raise this value to mask out darker elements in the scene.
          // luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        /> */}
      <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.000006, 0.000006]} // color offset
        />
      </EffectComposer>
    </Fragment>
  );
};

export default Scene;
