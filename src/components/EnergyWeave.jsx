import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const RIBBON_COUNT = 6;
const PARTICLES_PER_RIBBON = 80;

function createGlowTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.1, "rgba(255, 255, 255, 0.95)");
  gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.5)");
  gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.08)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

const EnergyWeave = ({ mouse }) => {
  const groupRef = useRef();
  const ribbons = useRef([]);
  const { viewport } = useThree();
  const glowTexture = useMemo(() => createGlowTexture(), []);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    ribbons.current.forEach(({ points }) => {
      group.remove(points);
      points.geometry.dispose();
      points.material.dispose();
    });

    const newRibbons = [];
    const colorA = new THREE.Color("#8b5cf6");
    const colorB = new THREE.Color("#ec4899");
    const colorC = new THREE.Color("#f59e0b");

    for (let i = 0; i < RIBBON_COUNT; i++) {
      const controlPoints = [];
      const segments = 12;
      const phase = (i / RIBBON_COUNT) * Math.PI * 2;

      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const x = (t - 0.5) * viewport.width * 1.25;
        const y =
          Math.sin(t * Math.PI * 3 + phase) * viewport.height * 0.35 +
          Math.sin(t * 8 + phase * 0.7) * viewport.height * 0.06;
        const z = Math.cos(t * Math.PI * 2 + phase + i * 0.3) * 0.6;
        controlPoints.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(controlPoints);

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(PARTICLES_PER_RIBBON * 3);
      const colors = new Float32Array(PARTICLES_PER_RIBBON * 3);
      const sizes = new Float32Array(PARTICLES_PER_RIBBON);

      for (let j = 0; j < PARTICLES_PER_RIBBON; j++) {
        const t = j / PARTICLES_PER_RIBBON;
        const point = curve.getPointAt(t);
        positions[j * 3] = point.x;
        positions[j * 3 + 1] = point.y;
        positions[j * 3 + 2] = point.z;

        let color;
        if (t < 0.5) {
          color = colorA.clone().lerp(colorB, t * 2);
        } else {
          color = colorB.clone().lerp(colorC, (t - 0.5) * 2);
        }
        colors[j * 3] = color.r;
        colors[j * 3 + 1] = color.g;
        colors[j * 3 + 2] = color.b;

        sizes[j] = Math.sin(t * Math.PI) * 0.06 + 0.03;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 0.1,
        map: glowTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      });

      const points = new THREE.Points(geometry, material);
      group.add(points);

      newRibbons.push({
        curve,
        points,
        offset: Math.random(),
        speed: 0.006 + Math.random() * 0.019,
      });
    }

    ribbons.current = newRibbons;

    return () => {
      ribbons.current.forEach(({ points }) => {
        group.remove(points);
        points.geometry.dispose();
        points.material.dispose();
      });
    };
  }, [viewport.width, viewport.height, glowTexture]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const targetRotY = (mouse.current.x - 0.5) * 0.25;
    const targetRotX = (mouse.current.y - 0.5) * 0.12;
    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      targetRotY,
      0.04,
    );
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      targetRotX,
      0.04,
    );

    const capDelta = Math.min(delta, 0.05);

    const mouseX = (mouse.current.x - 0.5) * viewport.width;
    const mouseY = (mouse.current.y - 0.5) * viewport.height;
    const repulsionRadius = viewport.width * 5;
    const repulsionStrength = 0.3;

    for (let i = 0; i < ribbons.current.length; i++) {
      const r = ribbons.current[i];
      r.offset += capDelta * r.speed;
      const geom = r.points.geometry;
      const pos = geom.attributes.position.array;

      for (let j = 0; j < PARTICLES_PER_RIBBON; j++) {
        const t = (j / PARTICLES_PER_RIBBON + r.offset) % 1;
        const pt = r.curve.getPointAt(t);

        const dx = pt.x - mouseX;
        const dy = pt.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repulsionRadius && dist > 0.001) {
          const falloff = (1 - dist / repulsionRadius) ** 3.3;
          const push = falloff * repulsionStrength;
          pos[j * 3] = pt.x + (dx / dist) * push;
          pos[j * 3 + 1] = pt.y + (dy / dist) * push;
        } else {
          pos[j * 3] = pt.x;
          pos[j * 3 + 1] = pt.y;
        }

        pos[j * 3 + 2] = pt.z;
      }

      geom.attributes.position.needsUpdate = true;
    }
  });

  return <group ref={groupRef} />;
};

export default EnergyWeave;
