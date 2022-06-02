import React, { useRef } from "react";
import {
  extend,
  ReactThreeFiber,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      readonly orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

export default function Controls(
  props: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
) {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef({} as OrbitControls);
  useFrame(() => controls.current.update());
  return (
    <orbitControls {...props} ref={controls} args={[camera, domElement]} />
  );
}