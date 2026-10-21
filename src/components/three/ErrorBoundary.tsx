import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { fallback: ReactNode; children: ReactNode }

/** Catches WebGL / Three.js failures so the rest of the page keeps working. */
export default class ErrorBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch(err: Error, info: ErrorInfo) { console.warn('3D scene disabled:', err.message, info.componentStack?.slice(0, 120)) }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}

export function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')))
  } catch {
    return false
  }
}
