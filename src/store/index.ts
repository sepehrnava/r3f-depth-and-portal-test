import { Vector3 } from "three";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Option {
  portalPeakPos: THREE.Vector3;
  portalBottomPos: THREE.Vector3;
  change: (state: keyof Option, value: Option[typeof state]) => void;
}

export const useThreeOptions = create<Option>()(
  devtools(
    persist(
      (set) => ({
        portalPeakPos: new Vector3(0, 0, 0),
        portalBottomPos: new Vector3(0, 0, 0),
        change: (state, value) => set((_state) => ({ [state]: value })),
      }),
      {
        name: "three-option",
      }
    )
  )
);
