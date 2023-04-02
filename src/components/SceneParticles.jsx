import { Sparkles } from "@react-three/drei";

export default function SceneParticles() {
  return (
    <>
      <object3D position={[1, 8, -4]}>
        <Sparkles count={50} scale={[50, 30.5, 20.5]} color={"#ffaacc"} size={6} speed={0.2} noise={0.1} />
      </object3D>

      <object3D position={[0, 6, 0]}>
        <Sparkles count={50} scale={[120, 20, 120]} color={"#ffe6a8"} size={10} speed={0.2} noise={0.2} />
      </object3D>

      <object3D position={[-5, 9, -5]}>
        <Sparkles count={50} scale={[40, 40, 40]} color={"#ffe6a8"} size={6} speed={0.2} noise={0.2} />
      </object3D>

      <object3D position={[5.5, 9, -8]}>
        <Sparkles count={50} scale={[50, 50, 50]} color={"#ffe6a8"} size={6} speed={0.2} noise={0.2} />
      </object3D>
    </>
  );
}
