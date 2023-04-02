import React from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky.js";

export default function SkyBox() {
  const { scene, renderer, camera } = useThree((state) => ({ scene: state.scene, renderer: state.gl, camera: state.camera }));
  const renderTarget = React.useRef<THREE.WebGLRenderTarget | null>(null);
  const sky = React.useRef(new Sky());
  const sun = React.useRef(new THREE.Vector3());

  React.useEffect(() => {
    sky.current.scale.setScalar(10000);
    const skyUniforms = sky.current.material.uniforms;

    skyUniforms["turbidity"].value = 10;
    skyUniforms["rayleigh"].value = 2;
    skyUniforms["mieCoefficient"].value = 0.005;
    skyUniforms["mieDirectionalG"].value = 0.8;

    const parameters = {
      elevation: 5,
      azimuth: 0,
    };
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
    const theta = THREE.MathUtils.degToRad(parameters.azimuth);

    sun.current.setFromSphericalCoords(1, phi, theta);

    sky.current.material.uniforms["sunPosition"].value.copy(sun.current);
    // water?.current && water.current.material.uniforms["sunDirection"].value.copy(sun.current).normalize();

    if (renderTarget !== undefined) renderTarget.current?.dispose();
    renderTarget.current = pmremGenerator.fromScene(sky.current as any);
    scene.environment = renderTarget.current.texture;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <primitive object={sky.current} />;
}
