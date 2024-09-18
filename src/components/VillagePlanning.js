import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import * as THREE from "three";

const VillagePlanning = ({ village }) => {
  const [roadData, setRoadData] = useState([]);
  
  const handleRoadConstruction = () => {
    // Mock Road Data (Example)
    const newRoad = {
      startPoint: [0, 0, 0],
      endPoint: [10, 0, 0],
      type: "Cement Road",
      width: 4
    };
    setRoadData([...roadData, newRoad]);
  };

  return (
    <div>
      <h2>Planning for: {village}</h2>
      <button onClick={handleRoadConstruction}>Construct Road</button>
      
      <Canvas camera={{ position: [10, 10, 10] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        
        <Village3D roadData={roadData} />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  );
};

const Village3D = ({ roadData }) => {
  const roads = roadData.map((road, index) => (
    <Road key={index} startPoint={road.startPoint} endPoint={road.endPoint} width={road.width} />
  ));

  return <group>{roads}</group>;
};

const Road = ({ startPoint, endPoint, width }) => {
  const roadRef = useRef();
  const [roadLength] = useState(() => new THREE.Vector3().subVectors(new THREE.Vector3(...endPoint), new THREE.Vector3(...startPoint)).length());

  return (
    <mesh ref={roadRef} position={[(startPoint[0] + endPoint[0]) / 2, 0, (startPoint[2] + endPoint[2]) / 2]}>
      <boxGeometry args={[roadLength, 0.2, width]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default VillagePlanning;
