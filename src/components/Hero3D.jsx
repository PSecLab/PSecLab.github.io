import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer, scene, camera, animationFrameId;
    let clock = new THREE.Clock();

    try {
      const width = container.clientWidth || window.innerWidth || 800;
      const height = container.clientHeight || window.innerHeight || 600;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 35;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);

      const networkGroup = new THREE.Group();
      scene.add(networkGroup);

      // Core wireframe
      const coreGeometry = new THREE.IcosahedronGeometry(6.5, 1);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
      networkGroup.add(coreMesh);

      // Inner glowing sphere
      const innerGeo = new THREE.SphereGeometry(3.5, 16, 16);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: false,
        transparent: true,
        opacity: 0.25,
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      networkGroup.add(innerMesh);

      // Particles
      const particleCount = 65;
      const nodePositions = [];
      const nodeGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color(0x38bdf8);
      const color2 = new THREE.Color(0x818cf8);
      const color3 = new THREE.Color(0x2dd4bf);

      for (let i = 0; i < particleCount; i++) {
        const radius = 12 + Math.random() * 16;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        nodePositions.push(new THREE.Vector3(x, y, z));

        const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      nodeGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.9,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
      });

      const particles = new THREE.Points(nodeGeometry, particleMaterial);
      networkGroup.add(particles);

      // Connecting lines
      const linePositions = [];
      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const dist = nodePositions[i].distanceTo(nodePositions[j]);
          if (dist < 10) {
            linePositions.push(
              nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
              nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
            );
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.15,
      });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      networkGroup.add(lines);

      // Mouse follow
      let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      };

      window.addEventListener('resize', handleResize);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        networkGroup.rotation.y = elapsedTime * 0.08;
        networkGroup.rotation.x = Math.sin(elapsedTime * 0.05) * 0.15;
        coreMesh.rotation.y = -elapsedTime * 0.15;
        coreMesh.rotation.z = elapsedTime * 0.05;

        targetX += (mouseX * 0.5 - targetX) * 0.05;
        targetY += (mouseY * 0.5 - targetY) * 0.05;
        networkGroup.rotation.y += targetX * 0.2;
        networkGroup.rotation.x -= targetY * 0.2;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (container && renderer?.domElement) {
          try {
            container.removeChild(renderer.domElement);
          } catch (e) {}
        }
        renderer?.dispose();
      };
    } catch (err) {
      console.warn('Hero3D WebGL initialization skipped:', err);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
