import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { Color, DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThreeOptions } from "../store";

export default function Grass() {
  // thanks to https://opengameart.org/content/64-billboard-grass-texture-and-mesh !
  const gltf = useLoader(GLTFLoader, "/models/grass.glb");
  const { portalBottomPos } = useThreeOptions();

  useEffect(() => {
    if (!gltf) return;

    gltf.scene.children[0].material.alphaToCoverage = true;
    gltf.scene.children[0].material.transparent = true;
    gltf.scene.children[0].material.map =
      gltf.scene.children[0].material.emissiveMap;
    gltf.scene.children[0].material.emissive = new Color(0.5, 0.5, 0.5);
    gltf.scene.children[0].material.side = DoubleSide;
    gltf.scene.children[0].scale.setScalar(0.7);
    // gltf.scene.children[0].position.set(
    //   portalBottomPos.x - 6,
    //   portalBottomPos.y - 7,
    //   portalBottomPos.z - 5
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    gltf.scene.children[0].name = "grass";
  }, [gltf]);

  return (
    <group dispose={null}>
      <mesh
        geometry={gltf.nodes.Grass.geometry}
        material={gltf.materials["Material.008"]}
        name="grass"
        position={[-14.3, -10.449, 15]}
        rotation={[0.98, -0.49, 0.28]}
      />
      <mesh
        geometry={gltf.nodes.Grass.geometry}
        material={gltf.materials["Material.008"]}
        name="grass2"
        position={[23.8, -15.5, -3.2]}
        rotation={[0.98, -0.49, 0.28]}
      />
      <mesh
        geometry={gltf.nodes.Grass.geometry}
        material={gltf.materials["Material.008"]}
        name="grass3"
        position={[-5.7, -13.1, -10.6]}
        rotation={[0.98, -0.49, 0.28]}
      />
    </group>
  );
}
