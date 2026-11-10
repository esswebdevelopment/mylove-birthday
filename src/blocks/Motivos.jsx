import { useState } from 'react'
import { motivos, textos } from '../data/motivos.js'
import { Bow, Sparkle } from '../art.jsx'
import './motivos.css'

const TILT = [-2, 1.8, -1.4, 2.2]

export default function Motivos() {
  const [flipped, setFlipped] = useState(() => motivos.map(() => false))
  const left = flipped.filter((f) => !f).length

  const toggle = (i) => setFlipped((f) => f.map((v, k) => (k === i ? !v : v)))

  return (
    <section className="motivos">
      <h2 className="mt-title">
        {textos.title}
        <span>{left === 0 ? textos.allDone : `${textos.hint} (faltam ${left})`}</span>
      </h2>

      <ul className="mt-list">
        {motivos.map((texto, i) => (
          <li key={i} style={{ '--rot': `${TILT[i % TILT.length]}deg` }}>
            <button
              className={`mt-card ${flipped[i] ? 'flipped' : ''}`}
              onClick={() => toggle(i)}
              aria-pressed={flipped[i]}
              aria-label={`Motivo ${i + 1}${flipped[i] ? `: ${texto}` : ', toque para virar'}`}
            >
              <span className="mt-inner">
                <span className="mt-face mt-front">
                  <Sparkle className="mt-sp a" aria-hidden="true" />
                  <Sparkle className="mt-sp b" aria-hidden="true" />
                  <small>motivo</small>
                  <strong>{i + 1}</strong>
                  <Bow className="mt-bow" aria-hidden="true" />
                </span>
                <span className="mt-face mt-back">
                  <span className="mt-num">#{i + 1}</span>
                  <span className="mt-text">{texto}</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}