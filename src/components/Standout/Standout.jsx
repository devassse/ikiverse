import React from "react";
import "./Standout.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Work = () => {
  return (
    <>
      <section className="work-section">
        <div className="content-above">
          <h1>Stand</h1>
          <h1><span>Out</span></h1>
        </div>
        <Canvas
          camera={{ position: [0, 0, 5] }}
        >
          <color attach="background" args={['#00bba0']} />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </section>
    </>
  );
};

export default Work;

