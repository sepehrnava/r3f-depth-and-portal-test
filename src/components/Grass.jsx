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
    gltf.scene.children[0].position.set(
      portalBottomPos.x - 6,
      portalBottomPos.y - 7,
      portalBottomPos.z - 5
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    gltf.scene.children[0].name = "grass";
  }, [gltf]);

  return (
    <group dispose={null}>
      <mesh
        geometry={gltf.nodes.Grass.geometry}
        material={gltf.materials["Material.008"]}
        position={[
          portalBottomPos.x - 10,
          portalBottomPos.y - 7,
          portalBottomPos.z - 5,
        ]}
        rotation={[1.3, 0.58, -Math.PI / 2]}
      />
      <mesh
        geometry={gltf.nodes.Grass.geometry}
        material={gltf.materials["Material.008"]}
        position={[
          portalBottomPos.x - 1,
          portalBottomPos.y - 7,
          portalBottomPos.z - 5,
        ]}
        rotation={[1.3, 0.58, -Math.PI / 2]}
      />
      <mesh
        geometry={gltf.nodes.Grass.geometry}
        material={gltf.materials["Material.008"]}
        position={[
          portalBottomPos.x - 20,
          portalBottomPos.y - 7,
          portalBottomPos.z - 5,
        ]}
        rotation={[1.3, 0.58, -Math.PI / 2]}
      />
      <mesh
        geometry={gltf.nodes.Grass.geometry}
        material={gltf.materials["Material.008"]}
        position={[
          portalBottomPos.x + 6,
          portalBottomPos.y - 7,
          portalBottomPos.z - 5,
        ]}
        rotation={[1.3, 0.58, -Math.PI / 2]}
      />
    </group>
  );
}
