import { Canvas } from "@react-three/fiber";
import SceneContainer from "./SceneContainer";

export default function ThreeScene() {
  return (
    <Canvas shadows={true} gl={{ antialias: true }}>
      <SceneContainer />
    </Canvas>
  );
}
