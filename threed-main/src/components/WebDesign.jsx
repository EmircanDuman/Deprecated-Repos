import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import Chair from "./Chair";
import { Canvas } from "@react-three/fiber";
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
`

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Chair rotation-y={-Math.PI / 2} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Canvas>
      <Description>
      We design products with a strong focus on both world class design and
      ensuring your product is a market success.
      </Description>
    </>
  );
};

export default WebDesign;
