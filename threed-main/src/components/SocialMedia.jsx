import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Darius from "./Darius";
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

const SocialMedia = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Darius />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Canvas>
      <Description>I hate Darius top lane.</Description>
    </>
  );
};

export default SocialMedia;
