import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface BackgroundCanvas3DProps {
  themeMode: 'dark' | 'light';
}

export const BackgroundCanvas3D: React.FC<BackgroundCanvas3DProps> = ({ themeMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.0015);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 400;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles Constellation
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const primaryColor = new THREE.Color(0x0284c7); // Sky Blue
    const accentColor = new THREE.Color(0x4f46e5);  // Indigo

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 800;

      const mixedColor = primaryColor.clone().lerp(accentColor, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      scales[i] = Math.random() * 4 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture / Material
    const pMaterial = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // Floating Geometric 3D Objects
    const shapesGroup = new THREE.Group();

    // 1. Icosahedron (Odoo / Enterprise Geometry)
    const icoGeo = new THREE.IcosahedronGeometry(70, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-280, 120, -100);
    shapesGroup.add(icoMesh);

    // 2. Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(45, 12, 100, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.10,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(300, -100, -50);
    shapesGroup.add(torusMesh);

    // 3. Octahedron Floating Node
    const octGeo = new THREE.OctahedronGeometry(50, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0x059669,
      wireframe: true,
      transparent: true,
      opacity: 0.10,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(220, 200, -150);
    shapesGroup.add(octMesh);

    scene.add(shapesGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.25;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotation & Floating
      particles.rotation.y += 0.0006;
      particles.rotation.x += 0.0003;

      icoMesh.rotation.x += 0.003;
      icoMesh.rotation.y += 0.005;

      torusMesh.rotation.x -= 0.004;
      torusMesh.rotation.z += 0.004;

      octMesh.rotation.y += 0.006;

      // Camera parallax
      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (-targetY - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      pMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      renderer.dispose();
    };
  }, [themeMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700"
      style={{ opacity: 0.85 }}
    />
  );
};
