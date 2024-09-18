// // src/components/Background3D.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background3D = () => {
  return (
    <Canvas>
      <Stars />
    </Canvas>
  );
};

export default Background3D;
