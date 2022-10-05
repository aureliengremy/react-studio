import { Fragment, Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene  from "./Scene";



const App = () => {
  return (
    <div className="">
      <Suspense fallback={null}>
        <Canvas shadows>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
