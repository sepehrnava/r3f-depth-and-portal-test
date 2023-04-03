import { memo, useEffect, useRef } from "react";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import { Suspense } from "react";
import {
  BackSide,
  BufferGeometry,
  Color,
  CylinderGeometry,
  Material,
  Mesh,
  MeshBasicMaterial,
  NearestFilter,
  Vector3,
} from "three";
import Ocean from "./Ocean";
import SkyBox from "./Sky";
import FloatingIsland from "./FloatingIsland";
import FloatingRocks from "./FloatingRocks";
import Grass from "./Grass";
import Portal from "./Portal";
import Rocks from "./Rocks";
import Trees from "./Trees";
import Words from "./Words";
import SceneParticles from "./SceneParticles";
import Gui from "./Gui";
import Effects from "./Effects";

import { useThreeOptions } from "../store";
import SphereBackground from "./SphereBackground";

let lightColor = new Color(1, 0.2, 0.1);
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 0, // TODO: change to 1 for godray
  })
);
mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);

function SceneContainer() {
  const { portalPeakPos: portalPos } = useThreeOptions();

  useEffect(() => {
    mesh.position.set(portalPos.x, portalPos.y, portalPos.z);
  }, [portalPos]);

  return (
    <Suspense fallback={null}>
      <PerspectiveCamera
        makeDefault
        fov={50}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={10000}
        position={[29.3, 0.5, -12]}
        rotation={[0, 0, 0]}
      />
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={Math.PI * 0.5} />

      {/* <Ocean /> */}
      <SkyBox />

      <Float
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={0.6}
        position={[0, 1, 0]}
      >
        <primitive object={mesh} />
        {/* <ambientLight intensity={0.5} /> */}
        <spotLight
          penumbra={1}
          distance={500}
          angle={60.65}
          //@ts-ignore
          attenuation={1}
          anglePower={3}
          intensity={0.3}
          color={lightColor}
          position={[1.19, 10.85, -4.45]}
          target-position={[0, 0, 0]}
        />

        <Portal />
        {/* <FloatingIsland /> */}
        {/* <Trees /> */}
        {/* <Rocks /> */}
        <Grass />
        <SceneParticles />
        <SphereBackground />
        {/* <Words /> */}
      </Float>
      <Effects mesh={mesh} />
      {/* <FloatingRocks /> */}
      {process.env.NODE_ENV === "development" && <Gui />}
    </Suspense>
  );
}

export default memo(SceneContainer);
