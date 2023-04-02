import React from "react";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { useThreeOptions } from "../store";

const Gui = () => {
  const gui = React.useRef<typeof GUI.prototype | null>(null);

  const { scene, camera } = useThree((state) => ({
    scene: state.scene,
    camera: state.camera,
  }));
  const { change } = useThreeOptions();

  React.useEffect(() => {
    window.scene = scene;
    window.THREE = THREE;
    gui.current = new GUI();
    const cameraFolder = gui.current.addFolder("camera");
    const cameraPositionFolder = cameraFolder.addFolder("Position");
    cameraPositionFolder.add(camera.position, "x", -10, 10, 0.1);
    cameraPositionFolder.add(camera.position, "y", -10, 15, 0.1);
    cameraPositionFolder.add(camera.position, "z", -50, 50, 0.1);
    const cameraRotationFolder = cameraFolder.addFolder("Rotation");
    cameraRotationFolder.add(
      camera.rotation,
      "x",
      -Math.PI / 2,
      Math.PI / 2,
      0.01
    );
    cameraRotationFolder.add(
      camera.rotation,
      "y",
      -Math.PI / 2,
      Math.PI / 2,
      0.01
    );
    cameraRotationFolder.add(
      camera.rotation,
      "z",
      -Math.PI / 2,
      Math.PI / 2,
      0.01
    );
    cameraFolder.close();
    gui.current.close();

    // get object called grass from scene
    const grass = scene.getObjectByName("grass");

    // add grass to control
    const grassFolder = gui.current.addFolder("grass");
    if (grass) {
      grassFolder.add(grass.position, "x", -100, 10, 0.1);
      grassFolder.add(grass.position, "y", -100, 15, 0.1);
      grassFolder.add(grass.position, "z", -100, 50, 0.1);
      // add scale
      grassFolder.add(grass.scale, "x", 0, 10, 0.1);
      grassFolder.add(grass.scale, "y", 0, 10, 0.1);
      grassFolder.add(grass.scale, "z", 0, 10, 0.1);
    }

    grassFolder.close();

    return () => {
      gui.current?.destroy();
    };
  }, [camera, scene]);
  return (
    <>
      <Stats showPanel={0} className="stats" />
    </>
  );
};

export default Gui;
