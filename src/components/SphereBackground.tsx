import { useEffect, useRef } from "react";
import { BackSide, Mesh, NearestFilter } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const SphereBackground = () => {
  // const textureCandao = useLoader(TextureLoader, "/textures/T02.png");
  const textureCandao = useLoader(TextureLoader, "/textures/kandao3.webp");
  const textureCandaoDepthMap = useLoader(
    TextureLoader,
    "/textures/kandao3_depthmap.webp"
  );
  const sphere = useRef<Mesh<any>>(null);
  useEffect(() => {
    if (textureCandao.isTexture) {
      textureCandao.minFilter = NearestFilter;
      textureCandao.generateMipmaps = false;
    }
  }, [textureCandao]);

  useEffect(() => {
    if (textureCandaoDepthMap.isTexture) {
      textureCandaoDepthMap.minFilter = NearestFilter;
      textureCandaoDepthMap.generateMipmaps = false;
    }
  }, [textureCandaoDepthMap]);

  return (
    <mesh ref={sphere} position={[0, 10, 0]} scale={10}>
      <sphereGeometry args={[6, 256, 256]} />
      <meshStandardMaterial
        side={BackSide}
        displacementScale={-4}
        map={textureCandao}
        //
        displacementMap={textureCandaoDepthMap}
      />
    </mesh>
  );
};

export default SphereBackground;
