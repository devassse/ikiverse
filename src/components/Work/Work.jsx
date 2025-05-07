import React from "react";
import "./Work.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three'

const Work = () => {
  const colorMap = useLoader(TextureLoader, 'src/assets/resources/PavingStones092_1K-JPG_Color.jpg')

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
          <directionalLight />
          <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
          {/* <mesh>
            <boxGeometry args={[1, 1, 1, 10, 10, 10]} />
            <meshStandardMaterial color="blue" />
          </mesh> */}
          {/* <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="blue" />
          </mesh> */}
          {/* <mesh>
            <sphereGeometry />
            <sphereGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh> */}

          {/* <mesh
            visible
            userData={{ hello: "world" }}
            position={[1, 2, 3]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent />
          </mesh> */}
        </Canvas>
      </section>
    </>
  );
};

export default Work;
