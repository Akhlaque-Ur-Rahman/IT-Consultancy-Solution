 'use client';
 import { useEffect, useRef } from 'react';
 import * as THREE from 'three';
 
 interface BackgroundWaveGrid3DProps {
   primaryColor?: string;
   secondaryColor?: string;
   cols?: number;
   rows?: number;
   width?: number;
   depth?: number;
   amplitude?: number;
   speed?: number;
  opacity?: number;
 }
 
 export default function BackgroundWaveGrid3D({
   primaryColor = '#f59e0b',
   secondaryColor = '#fbbf24',
   cols = 120,
   rows = 80,
   width = 180,
   depth = 220,
   amplitude = 4,
   speed = 0.6,
  opacity = 0.1,
 }: BackgroundWaveGrid3DProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
   const sceneRef = useRef<THREE.Scene | null>(null);
   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
   const pointsRef = useRef<THREE.Points | null>(null);
   const rafRef = useRef<number | null>(null);
   const timeRef = useRef(0);
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
     camera.position.set(0, 12, 130);
     cameraRef.current = camera;
 
     const count = cols * rows;
     const positions = new Float32Array(count * 3);
     const colors = new Float32Array(count * 3);
 
     const xStart = -width / 2;
     const zStart = -depth / 2;
     const dx = width / (cols - 1);
     const dz = depth / (rows - 1);
 
     const cA = new THREE.Color(primaryColor);
     const cB = new THREE.Color(secondaryColor);
 
     let i = 0;
     for (let r = 0; r < rows; r++) {
       for (let c = 0; c < cols; c++) {
         const x = xStart + c * dx;
         const z = zStart + r * dz;
         positions[i * 3 + 0] = x;
         positions[i * 3 + 1] = 0;
         positions[i * 3 + 2] = z;
         const t = c / (cols - 1);
         const col = cA.clone().lerp(cB, t);
         colors[i * 3 + 0] = col.r;
         colors[i * 3 + 1] = col.g;
         colors[i * 3 + 2] = col.b;
         i++;
       }
     }
 
     const geometry = new THREE.BufferGeometry();
     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
 
    const material = new THREE.PointsMaterial({
      size: 1.6,
      transparent: true,
      opacity: Math.max(0, Math.min(1, opacity)),
       blending: THREE.AdditiveBlending,
       depthWrite: false,
       vertexColors: true,
       sizeAttenuation: true,
     });
 
     const points = new THREE.Points(geometry, material);
     pointsRef.current = points;
     scene.add(points);
 
     const ambient = new THREE.AmbientLight(cA, 0.35);
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
 
     const animate = () => {
       if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !pointsRef.current) return;
       timeRef.current += 0.016 * speed;
       const pos = (pointsRef.current.geometry as THREE.BufferGeometry).attributes
         .position as THREE.BufferAttribute;
       const arr = pos.array as Float32Array;
       for (let idx = 0; idx < count; idx++) {
         const x = arr[idx * 3 + 0];
         const z = arr[idx * 3 + 2];
         const y =
           Math.sin(x * 0.06 + timeRef.current * 2.0) * amplitude +
           Math.cos(z * 0.05 + timeRef.current * 1.6) * amplitude * 0.8;
         arr[idx * 3 + 1] = y;
       }
       pos.needsUpdate = true;
 
      const mx = mouseRef.current.x * 0.5;
      const my = mouseRef.current.y * 0.35;
      cameraRef.current.position.x += (mx * 16 - cameraRef.current.position.x) * 0.032;
      cameraRef.current.position.y += (my * 10 - cameraRef.current.position.y) * 0.032;
       cameraRef.current.lookAt(0, 0, 0);
 
      pointsRef.current.rotation.y += 0.001;
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
   }, [primaryColor, secondaryColor, cols, rows, width, depth, amplitude, speed]);
 
   return <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />;
 }
 
