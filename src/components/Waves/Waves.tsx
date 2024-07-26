import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

// Define a tipagem para o mesh ref
type MeshRef = React.MutableRefObject<THREE.Mesh | null>;

export default function Wave() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (meshRef.current) {
      const geometry = new THREE.PlaneGeometry(100, 100, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: '#FF900B',
        side: THREE.DoubleSide,
      });

      meshRef.current.geometry = geometry;
      meshRef.current.material = material;

      const vertices = (meshRef.current.geometry as THREE.PlaneGeometry).attributes.position.array as Float32Array;
      const waveFunction = (x: number, z: number) => 5 * Math.sin(0.1 * x) * Math.cos(0.1 * z);

      for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 1] = waveFunction(vertices[i], vertices[i + 2]);
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }, []);

  return (
    <mesh ref={meshRef} position={[0, -10, -50]}>
      <planeGeometry args={[100, 100, 32, 32]} />
      <meshBasicMaterial color="#FF900B" side={THREE.DoubleSide} />
    </mesh>
  );
}

export function WaveBackground() {
  return (
    <Canvas
      camera={{ position: [0, 20, 100], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Wave />
    </Canvas>
  );
}
