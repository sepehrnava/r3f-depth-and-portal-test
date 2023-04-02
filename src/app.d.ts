declare module "three/examples/jsm/libs/lil-gui.module.min.js" {
  export const GUI: typeof import("dat.gui").GUI;
}

interface Window {
  scene: THREE.Scene | undefined;
  renderer: THREE.WebGLRenderer | undefined;
}
