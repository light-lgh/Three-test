import "./style.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { StrictMode } from "react";
import { Leva } from "leva";
import { SemiApp } from "./App.jsx";

const root = createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <>
      <SemiApp className="semi-app-custom" />
      <Leva collapsed />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-3, 3, 4],
        }}
      >
        <Experience />
      </Canvas>
    </>
  </StrictMode>
);
