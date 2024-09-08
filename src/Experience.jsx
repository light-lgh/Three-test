import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { useControls, button } from "leva";
import { Perf } from "r3f-perf";
import { Model } from "./Arrow1.jsx";
import { useRef } from "react";

function Experience() {
  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000",
    visible: false,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  const { scale } = useControls("cube", {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });

  const { perfVisible } = useControls("desbug", {
    perfVisible: false,
  });
  const sphere = useRef();
  const testClick = () => {
    sphere.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
    console.log("ok");
  };
  const model = useGLTF("/Duck.glb");
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          {/* <primitive
            object={computer.scene}
            position-y={-1.2}
            // rotation-x={0.13}
          > */}
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe
              src="//player.bilibili.com/player.html?isOutside=true&aid=1250160217&bvid=BV1BJ4m1b7Ls&cid=1425768556&p=1"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            ></iframe>
          </Html>
          {/* </primitive> */}

          <Model position-y={2} visible={visible} />

          <mesh
            ref={sphere}
            visible={visible}
            position={[position.x, position.y, 0]}
            onClick={testClick}
            // castShadow
            // receiveShadow
            onPointerEnter={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerLeave={() => {
              document.body.style.cursor = "default";
            }}
          >
            <sphereGeometry />
            <meshStandardMaterial color={color} />
          </mesh>

          <mesh
            position-x={2}
            scale={scale}
            visible={visible}
            onClick={(event) => event.stopPropagation()}
            onPointerEnter={(event) => event.stopPropagation()}
          >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>

          {/* <mesh
            position-y={-1}
            rotation-x={-Math.PI * 0.5}
            scale={5}
            castShadow
            receiveShadow
          >
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
          </mesh> */}
        </Float>
      </PresentationControls>
    </>
  );
}
export default Experience;
