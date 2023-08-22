import React from "react";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import { OrbitControls, Stage } from "@react-three/drei";
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

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Canvas>
      <Description>We create awesome stuff, duh.</Description>
    </>
  );
};

export default Development;
