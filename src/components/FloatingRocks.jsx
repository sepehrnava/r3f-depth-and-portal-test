import { useLoader } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function FloatingRocks() {
  const rock1 = useLoader(GLTFLoader, "/models/floating_rock_1.glb");
  const rock2 = useLoader(GLTFLoader, "/models/floating_rock_2.glb");
  const rock3 = useLoader(GLTFLoader, "/models/floating_rock_3.glb");

  return (
    <>
      <Float speed={1.1} rotationIntensity={1.6} floatIntensity={20} position={[-20.5, 0, -19]}>
        <primitive object={rock2.scene} />
      </Float>

      <Float speed={1.1} rotationIntensity={1.6} floatIntensity={20} position={[-5, 18, -33]}>
        <primitive object={rock1.scene} />
      </Float>

      <Float speed={1.1} rotationIntensity={1.6} floatIntensity={20} position={[20, 12, -9]}>
        <primitive object={rock3.scene} />
      </Float>
    </>
  );
}
