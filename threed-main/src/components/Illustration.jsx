import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Tablet from "./Tablet";
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

const Illustration = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Tablet rotation-z={-Math.PI / 2} rotation-y={-Math.PI / 2} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Canvas>
      <Description>We have a very cool team.</Description>
    </>
  );
};

export default Illustration;
