// 'use client';
// import { Canvas } from '@react-three/fiber';
// import { Suspense, useRef } from 'react';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// interface ModelProps {
//   path: string;
// }

// function Model({ path }: ModelProps) {
//   const gltf = useGLTF(path);
//   return <primitive object={gltf.scene} scale={1} />;
// }

// export default function ThreeDModelBanner() {
//   return (
//     <div className="w-full h-[500px] md:h-[700px] relative">
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />
//         <Suspense fallback={null}>
//           <Model path="/assets/yourModel.glb" />
//         </Suspense>
//         <OrbitControls enableZoom={false} autoRotate />
//       </Canvas>
//     </div>
//   );
// }
