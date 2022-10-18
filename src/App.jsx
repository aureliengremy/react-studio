import { Fragment, Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import EmbediFrame from "./components/EmbediFrame";

const App = () => {
  return (
    <Fragment>
      <div className="container-music">
        <div className="absolute z-10 w-full h-full flex flex-row justify-around items-center">
          <div className="w-1/2 m-6 lg:mb-0 h-5/6">
            <div className="relative flex flex-col bg-black/50 rounded-lg shadow-lg h-full overflow-auto">
              
                <EmbediFrame />
                <EmbediFrame />
                <EmbediFrame />
                <EmbediFrame />
                <EmbediFrame />
                <EmbediFrame />
                <EmbediFrame />
                <EmbediFrame />
              
            </div>
          </div>
          <div className="w-1/2 m-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <p>block 2</p>
                {/* <EmbediFrame /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-scene">
        <Suspense fallback={null}>
          <Canvas shadows>
            <Scene />
          </Canvas>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default App;
