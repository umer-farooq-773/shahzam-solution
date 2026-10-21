import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { simpleIcons as si, type SimpleIcon as SI } from '@/lib/icons'

interface Item { label: string; icon?: SI; text?: string; color: string }

const items: Item[] = [
  { label: 'React', icon: si.siReact, color: '#61DAFB' },
  { label: 'Laravel', icon: si.siLaravel, color: '#FF5A4F' },
  { label: 'TypeScript', icon: si.siTypescript, color: '#4A90E2' },
  { label: 'Python', icon: si.siPython, color: '#FFD43B' },
  { label: 'AWS', text: 'aws', color: '#FFB000' },
  { label: 'DevOps', text: '∞', color: '#21B8FF' },
]

function makeTexture(item: Item) {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const g = c.getContext('2d')!
  g.clearRect(0, 0, 256, 256)
  g.fillStyle = item.color
  if (item.icon) {
    g.save()
    g.translate(78, 34)
    g.scale(4.1, 4.1)
    g.fill(new Path2D(item.icon.path))
    g.restore()
  } else {
    g.font = '700 108px Manrope, Inter, sans-serif'
    g.textAlign = 'center'
    g.textBaseline = 'middle'
    g.fillText(item.text ?? '', 128, 100)
  }
  g.fillStyle = '#F5F7FA'
  g.font = '600 30px Manrope, Inter, sans-serif'
  g.textAlign = 'center'
  g.fillText(item.label, 128, 218)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 4
  return t
}

function TechTile({ item, position, delay }: { item: Item; position: [number, number, number]; delay: number }) {
  const tex = useMemo(() => makeTexture(item), [item])
  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7} floatingRange={[-0.08, 0.08]}>
      <group position={position} rotation={[0, -position[0] * 0.1, 0]}>
        <RoundedBox args={[1.25, 1.25, 0.32]} radius={0.14} smoothness={4}>
          <meshStandardMaterial color="#111C2D" metalness={0.65} roughness={0.32} />
        </RoundedBox>
        <mesh position={[0, 0, 0.165 + delay * 0]}>
          <planeGeometry args={[1.05, 1.05]} />
          <meshBasicMaterial map={tex} transparent toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, -0.0]}>
          <boxGeometry args={[1.27, 1.27, 0.02]} />
          <meshBasicMaterial color={item.color} transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function Core() {
  const ring = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  useFrame((_, dt) => {
    if (ring.current) ring.current.rotation.z += dt * 0.25
    if (ring2.current) ring2.current.rotation.z -= dt * 0.18
  })
  return (
    <group>
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.35, 0.035, 16, 120]} />
        <meshStandardMaterial color="#FFB000" emissive="#FFB000" emissiveIntensity={0.7} metalness={0.8} roughness={0.25} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 2.4, 0.5, 0]}>
        <torusGeometry args={[1.75, 0.018, 16, 120]} />
        <meshStandardMaterial color="#21B8FF" emissive="#21B8FF" emissiveIntensity={0.55} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial color="#162338" metalness={0.8} roughness={0.2} emissive="#FFB000" emissiveIntensity={0.12} flatShading />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshBasicMaterial color="#FFC247" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function Rig({ children, still }: { children: React.ReactNode; still: boolean }) {
  const g = useRef<THREE.Group>(null)
  useFrame((state, dt) => {
    if (!g.current || still) return
    const tx = state.pointer.x * 0.35
    const ty = -state.pointer.y * 0.2
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, tx, 3, dt)
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, ty, 3, dt)
  })
  return <group ref={g}>{children}</group>
}

interface Props { paused: boolean; still: boolean; compact: boolean }

export default function HeroScene({ paused, still, compact }: Props) {
  const positions = useMemo<[number, number, number][]>(
    () => [
      [-2.55, 1.15, 0.2],
      [0.15, 2.0, -0.4],
      [2.6, 1.0, 0.1],
      [2.45, -1.35, 0.25],
      [-0.1, -2.1, -0.2],
      [-2.5, -1.3, 0.3],
    ],
    [],
  )
  return (
    <Canvas
      dpr={compact ? 1 : [1, 1.5]}
      frameloop={paused || still ? 'demand' : 'always'}
      camera={{ position: [0, 0, compact ? 10.5 : 9], fov: 42 }}
      gl={{ antialias: !compact, alpha: true, powerPreference: 'low-power' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 6]} intensity={55} color="#FFC247" />
      <pointLight position={[-6, -3, 5]} intensity={40} color="#21B8FF" />
      <Rig still={still}>
        <Core />
        {items.map((it, i) => (
          <TechTile key={it.label} item={it} position={positions[i]} delay={i} />
        ))}
      </Rig>
    </Canvas>
  )
}
