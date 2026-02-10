 'use client';
 import { useEffect, useRef } from 'react';
 import * as THREE from 'three';
 
 interface Background3DProps {
   color?: string;
   density?: number;
   speed?: number;
   startColor?: string;
   endColor?: string;
 }
 
 export default function Background3D({
   color = '#f59e0b',
   density = 800,
   speed = 0.04,
   startColor = '#f59e0b',
   endColor = '#fbbf24',
 }: Background3DProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
   const sceneRef = useRef<THREE.Scene | null>(null);
   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
   const pointsRef = useRef<THREE.Points | null>(null);
   const rafRef = useRef<number | null>(null);
   const mouseRef = useRef({ x: 0, y: 0 });
 
   useEffect(() => {
     const el = containerRef.current;
     if (!el) return;
 
     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
     rendererRef.current = renderer;
     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
     renderer.setSize(el.clientWidth, el.clientHeight);
     renderer.setClearColor(0x000000, 0);
     el.appendChild(renderer.domElement);
 
     const scene = new THREE.Scene();
     sceneRef.current = scene;
 
     const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 2000);
     camera.position.set(0, 0, 120);
     cameraRef.current = camera;
 
     const geometry = new THREE.BufferGeometry();
     const count = Math.max(200, Math.min(5000, Math.floor(density)));
     const positions = new Float32Array(count * 3);
     const colors = new Float32Array(count * 3);
     const ranges = { x: 160, y: 120, z: 180 };
 
     const cStart = new THREE.Color(startColor);
     const cEnd = new THREE.Color(endColor);
 
     for (let i = 0; i < count; i++) {
       const ix = i * 3;
       const x = (Math.random() - 0.5) * ranges.x;
       const y = (Math.random() - 0.5) * ranges.y;
       const z = (Math.random() - 0.5) * ranges.z;
       positions[ix + 0] = x;
       positions[ix + 1] = y;
       positions[ix + 2] = z;
 
       const t = (y + ranges.y / 2) / ranges.y;
       const col = cStart.clone().lerp(cEnd, THREE.MathUtils.clamp(t, 0, 1));
       colors[ix + 0] = col.r;
       colors[ix + 1] = col.g;
       colors[ix + 2] = col.b;
     }
     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
 
     const matColor = new THREE.Color(color);
     const material = new THREE.PointsMaterial({
       color: matColor,
       size: 1.6,
       transparent: true,
       opacity: 0.14,
       blending: THREE.AdditiveBlending,
       depthWrite: false,
       vertexColors: true,
       sizeAttenuation: true,
     });
 
     const points = new THREE.Points(geometry, material);
     pointsRef.current = points;
     scene.add(points);
 
     const ambient = new THREE.AmbientLight(matColor, 0.4);
     scene.add(ambient);
 
     const resize = () => {
       if (!rendererRef.current || !cameraRef.current || !containerRef.current) return;
       const w = containerRef.current.clientWidth;
       const h = containerRef.current.clientHeight;
       rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
       rendererRef.current.setSize(w, h);
       cameraRef.current.aspect = w / h;
       cameraRef.current.updateProjectionMatrix();
     };
     window.addEventListener('resize', resize);
 
     const onMouseMove = (e: MouseEvent) => {
       const rect = el.getBoundingClientRect();
       const nx = (e.clientX - rect.left) / rect.width;
       const ny = (e.clientY - rect.top) / rect.height;
       mouseRef.current.x = nx * 2 - 1;
       mouseRef.current.y = ny * 2 - 1;
     };
     window.addEventListener('mousemove', onMouseMove);
 
     let t = 0;
     const animate = () => {
       if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !pointsRef.current) return;
       t += speed;
       pointsRef.current.rotation.y = t * 0.12;
       pointsRef.current.rotation.x = t * 0.04;
 
       const mx = mouseRef.current.x * 0.6;
       const my = mouseRef.current.y * 0.4;
       cameraRef.current.position.x += (mx * 16 - cameraRef.current.position.x) * 0.035;
       cameraRef.current.position.y += (my * 10 - cameraRef.current.position.y) * 0.035;
       cameraRef.current.lookAt(0, 0, 0);
 
       rendererRef.current.render(sceneRef.current, cameraRef.current);
       rafRef.current = requestAnimationFrame(animate);
     };
     resize();
     animate();
 
     return () => {
       if (rafRef.current) cancelAnimationFrame(rafRef.current);
       window.removeEventListener('resize', resize);
       window.removeEventListener('mousemove', onMouseMove);
       if (pointsRef.current) {
         const geom = pointsRef.current.geometry as THREE.BufferGeometry;
         const mat = pointsRef.current.material as THREE.Material;
         geom.dispose();
         mat.dispose();
       }
       if (rendererRef.current) {
         rendererRef.current.dispose();
         const canvas = rendererRef.current.domElement;
         if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
       }
       sceneRef.current = null;
       cameraRef.current = null;
       pointsRef.current = null;
       rendererRef.current = null;
     };
   }, [color, density, speed, startColor, endColor]);
 
   return (
     <div
       ref={containerRef}
       style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
     />
   );
 }
 
