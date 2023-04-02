import { EffectComposer, HueSaturation, ChromaticAberration, GodRays, DepthOfField, BrightnessContrast } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";

const Effects = ({ mesh }) => {
  return (
    <EffectComposer stencilBuffer={true}>
      <DepthOfField focusDistance={0.005} focalLength={0.05} bokehScale={7} />
      <HueSaturation hue={0} saturation={-0.15} />
      <BrightnessContrast brightness={0.0} contrast={0.035} />
      {/* <ChromaticAberration radialModulation={true} offset={[0.00175, 0.00175]} /> */}
      {/* <GodRays
        sun={mesh}
        blendFunction={BlendFunction.Screen}
        samples={30}
        density={0.97}
        decay={0.97}
        weight={0.6}
        exposure={0.5}
        clampMax={1}
        width={Resizer.AUTO_SIZE}
        height={Resizer.AUTO_SIZE}
        kernelSize={KernelSize.SMALL}
        blur={true}
      /> */}
    </EffectComposer>
  );
};

export default Effects;
