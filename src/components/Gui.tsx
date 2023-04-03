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
    cameraPositionFolder.add(camera.position, "x", -100, 100, 0.1);
    cameraPositionFolder.add(camera.position, "y", -100, 100, 0.1);
    cameraPositionFolder.add(camera.position, "z", -100, 100, 0.1);
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
      grassFolder.add(grass.position, "x", -100, 100, 0.1);
      grassFolder.add(grass.position, "y", -100, 100, 0.1);
      grassFolder.add(grass.position, "z", -100, 100, 0.1);
      // add scale
      grassFolder.add(grass.scale, "x", 0, 100, 0.1);
      grassFolder.add(grass.scale, "y", 0, 100, 0.1);
      grassFolder.add(grass.scale, "z", 0, 100, 0.1);

      // add rotation
      grassFolder.add(grass.rotation, "x", -Math.PI, Math.PI, 0.01);
      grassFolder.add(grass.rotation, "y", -Math.PI, Math.PI, 0.01);
      grassFolder.add(grass.rotation, "z", -Math.PI, Math.PI, 0.01);
    }
    grassFolder.close();
    const grass2 = scene.getObjectByName("grass2");

    // add grass to control
    const grassFolder2 = gui.current.addFolder("grass2");
    if (grass2) {
      grassFolder2.add(grass2.position, "x", -100, 100, 0.1);
      grassFolder2.add(grass2.position, "y", -100, 100, 0.1);
      grassFolder2.add(grass2.position, "z", -100, 100, 0.1);
      // add scale
      grassFolder2.add(grass2.scale, "x", 0, 100, 0.1);
      grassFolder2.add(grass2.scale, "y", 0, 100, 0.1);
      grassFolder2.add(grass2.scale, "z", 0, 100, 0.1);

      // add rotation
      grassFolder2.add(grass2.rotation, "x", -Math.PI, Math.PI, 0.01);
      grassFolder2.add(grass2.rotation, "y", -Math.PI, Math.PI, 0.01);
      grassFolder2.add(grass2.rotation, "z", -Math.PI, Math.PI, 0.01);
    }

    grassFolder2.close();

    const grass3 = scene.getObjectByName("grass3");
    const grassFolder3 = gui.current.addFolder("grass3");
    if (grass3) {
      grassFolder3.add(grass3.position, "x", -100, 100, 0.1);
      grassFolder3.add(grass3.position, "y", -100, 100, 0.1);
      grassFolder3.add(grass3.position, "z", -100, 100, 0.1);
      // add scale
      grassFolder3.add(grass3.scale, "x", 0, 100, 0.1);
      grassFolder3.add(grass3.scale, "y", 0, 100, 0.1);
      grassFolder3.add(grass3.scale, "z", 0, 100, 0.1);

      // add rotation
      grassFolder3.add(grass3.rotation, "x", -Math.PI, Math.PI, 0.01);
      grassFolder3.add(grass3.rotation, "y", -Math.PI, Math.PI, 0.01);
      grassFolder3.add(grass3.rotation, "z", -Math.PI, Math.PI, 0.01);
    }

    // add portal_door to control
    const portalDoor = scene.getObjectByName("portal_door");
    const portalDoorFolder = gui.current.addFolder("portal_door");
    if (portalDoor) {
      portalDoorFolder.add(portalDoor.position, "x", -100, 100, 0.1);
      portalDoorFolder.add(portalDoor.position, "y", -100, 100, 0.1);
      portalDoorFolder.add(portalDoor.position, "z", -100, 100, 0.1);
      // add scale
      portalDoorFolder.add(portalDoor.scale, "x", 0, 10, 0.1);
      portalDoorFolder.add(portalDoor.scale, "y", 0, 10, 0.1);
      portalDoorFolder.add(portalDoor.scale, "z", 0, 10, 0.1);

      // add rotation
      portalDoorFolder.add(portalDoor.rotation, "x", -Math.PI, Math.PI, 0.01);
      portalDoorFolder.add(portalDoor.rotation, "y", -Math.PI, Math.PI, 0.01);
      portalDoorFolder.add(portalDoor.rotation, "z", -Math.PI, Math.PI, 0.01);
    }
    portalDoorFolder.close();

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
