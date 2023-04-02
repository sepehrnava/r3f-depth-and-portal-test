import { BaseEvent, EventDispatcher } from "three";

declare module "three/src/core/Object3D" {
  interface Object3D<E extends BaseEvent> extends EventDispatcher<E> {
    initScaleX: number;
    initColor: THREE.Color;
    isMesh?: boolean;
    material: THREE.MeshStandardMaterial;
    isShrinked?: boolean;
  }
}
