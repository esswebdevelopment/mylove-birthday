import { doodles } from '../data/doodles.js'
import './doodles.css'

// Desenha a ilustração como máscara: a cor vem do CSS (padrão vermelho; mude com background-color).
export default function Doodle({ name, className = '', style }) {
  const d = doodles[name]
  if (!d) return null
  const mask = `url(${d.src})`
  return (
    <span
      className={`doodle ${className}`}
      style={{ aspectRatio: d.ratio, WebkitMaskImage: mask, maskImage: mask, ...style }}
      aria-hidden="true"
    />
  )
}