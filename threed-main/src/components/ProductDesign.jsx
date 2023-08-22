import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Helmet from "./Helmet";
import styled from "styled-components";

const Description = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Helmet rotation-y={-Math.PI / 2} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Canvas>
      <Description>Check out this helmet.</Description>
    </>
  );
};

export default ProductDesign;
