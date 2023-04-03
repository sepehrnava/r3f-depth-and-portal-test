import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  Scene,
  WebGLRenderTarget,
  TextureLoader,
  EquirectangularReflectionMapping,
  AlwaysStencilFunc,
  ReplaceStencilOp,
  DoubleSide,
  LinearEncoding,
  Vector3,
  Object3D,
  Event,
  TextureFilter,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThreeOptions } from "../store";
import { FillQuad } from "./FillQuad";

function Portal() {
  // const model = useLoader(GLTFLoader, "/models/portal.glb");
  const { scene: portalMesh } = useLoader(GLTFLoader, "/models/portal.glb");
  const { change } = useThreeOptions();
  const target = useRef(
    new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
      stencilBuffer: false,
    })
  );
  const [portalPlane, setPortalPlane] = useState<Object3D<Event> | null>(null);
  const [portalEdge, setPortalEdge] = useState<Object3D<Event> | null>(null);

  const scene = useRef(new Scene());
  const portalRef = useRef<THREE.Group>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      target.current.setSize(window.innerWidth, window.innerHeight);
    });
    // texture inside portal
    scene.current.background = new TextureLoader().load(
      "/textures/T004.jpg",
      (texture) => {
        texture.encoding = LinearEncoding;
        texture.mapping = EquirectangularReflectionMapping;
        // texture.magFilter = new TextureFilter()
      }
    );
  }, [target]);

  useFrame((state) => {
    state.gl.setRenderTarget(target.current);
    state.gl.render(scene.current, state.camera);
    state.gl.setRenderTarget(null);
    // state.camera.lookAt(new Vector3(0, 10, -5));
  });

  useEffect(() => {
    if (!portalMesh) return;

    // let mesh = model.scene.children[0];
    // mesh.material.envMapIntensity = 3.5;

    portalMesh.traverse((child) => {
      if (child.name === "peak" && portalRef.current) {
        change(
          "portalPeakPos",
          new Vector3(
            child.position.x,
            child.position.y - 0.4,
            portalRef.current.position.z - 0.0
          )
        );
      } else if (child.name === "portal_plane") {
        const portalPlane = child;
        portalPlane.material.transparent = false;
        portalPlane.material.side = DoubleSide;
        portalPlane.material.stencilFunc = AlwaysStencilFunc;
        portalPlane.material.stencilWrite = true;
        portalPlane.material.stencilRef = 1;
        portalPlane.material.stencilZPass = ReplaceStencilOp;
        setPortalPlane(child);
      }
    });

    if (portalRef.current?.position)
      change("portalBottomPos", portalRef.current.position);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portalMesh]);

  return (
    <group
      name="portal_door"
      ref={portalRef}
      position={[-26.6, 0.3, 30]}
      scale={[6, 7, 5]}
      rotation={[0, -0.87, 0]}
      onPointerEnter={() => (document.body.style.cursor = "pointer")}
      onPointerLeave={() => (document.body.style.cursor = "auto")}
    >
      {portalPlane && <primitive object={portalMesh} />}
      {/* { portalEdge && <primitive object={portalEdge} />} */}
      <FillQuad map={target.current.texture} maskId={1} />
    </group>
  );
}

export default Portal;
