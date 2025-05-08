import React from "react";
import "./Brandimpact.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Work = () => {
  return (
    <>
      <section className="work-section">
        <div className="content-above">
          <h1>Your Brand needs to make an Impact!</h1>
        </div>
        <Canvas
          camera={{ position: [0, 0, 5] }}
        >
          <color attach="background" args={['#00bba0']} />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          {/* <mesh>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </mesh> */}
          <mesh rotation={[Math.PI / 3, Math.PI / 2, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </section>
    </>
  );
};

export default Work;
