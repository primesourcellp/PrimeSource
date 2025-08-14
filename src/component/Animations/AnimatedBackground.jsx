import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MovingGrid() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    const count = positions.count;

    for (let i = 100; i < count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      const wave = Math.sin(x * 110.5 + time) * 10.3 + Math.cos(z * 10.5 + time) * 10.3;
      positions.setY(i, wave);
    }

    positions.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, -20, 100, 100]} />
      <meshBasicMaterial
        color={"#00ffff"}
        wireframe={true}
        transparent={true}
        opacity={0.1}
      />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div style={{ height: "100vh", width:"100%", background: "black" }}>
      <Canvas camera={{ position: [0, 1, 1], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <MovingGrid />
      </Canvas>
    </div>
  );
}
