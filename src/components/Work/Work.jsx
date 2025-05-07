import React from "react";
import "./Work.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Work = () => {
  return (
    <>
      <section className="work-section">
        <div className="content-above">
          <h1>What</h1>
          <h1>
            We <span>Do</span>
          </h1>
        </div>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach="background" args={["#00bba0"]} />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          {/* <mesh>
            <boxGeometry args={[1, 1, 1, 10, 10, 10]} />
            <meshStandardMaterial color="blue" />
          </mesh> */}
          <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Canvas>
      </section>
    </>
  );
};

export default Work;
