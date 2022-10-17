import { Fragment, Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene  from "./Scene";



const App = () => {
  return (
    <div className="container-scene">
      <div className="music">
      {/* <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/15833511&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}

      </div>
      <Suspense fallback={null}>
        <Canvas shadows>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
