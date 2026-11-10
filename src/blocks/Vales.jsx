import { useState } from 'react'
import { vales, textos } from '../data/vales.js'
import './vales.css'

export default function Vales() {
  const [used, setUsed] = useState(() => vales.map(() => false))
  const [seen, setSeen] = useState(() => vales.map(() => false))

  const set = (setter) => (i, v) => setter((arr) => arr.map((x, k) => (k === i ? v : x)))
  const setUse = set(setUsed)
  const setSee = set(setSeen)

  return (
    <section className="vales">
      <h2 className="vl-title">
        {textos.title}
        <span>{textos.subtitle}</span>
      </h2>

      <ul className="vl-list">
        {vales.map((v, i) => (
          <li key={i} className={`vl-ticket ${used[i] ? 'used' : ''}`} style={{ '--rot': `${i % 2 ? 1.2 : -1.2}deg` }}>
            <div className="vl-stub" aria-hidden="true">
              <span>VALE</span>
              <b>{i + 1}</b>
            </div>

            <div className="vl-main">
              <span className="vl-tag">{v.tag}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>

              {v.spoiler && (
                <button
                  className={`vl-spoiler ${seen[i] ? 'show' : ''}`}
                  onClick={() => setSee(i, !seen[i])}
                  aria-label={seen[i] ? 'Esconder spoiler' : 'Mostrar spoiler'}
                >
                  <span>{v.spoiler}</span>
                  {!seen[i] && <em>toque para ver o spoiler</em>}
                </button>
              )}

              {v.fine && <small className="vl-fine">{v.fine}</small>}

              <button className="vl-btn" onClick={() => setUse(i, !used[i])} aria-pressed={used[i]}>
                {used[i] ? 'Desfazer' : 'Resgatar'}
              </button>
            </div>

            {used[i] && <span className="vl-stamp" aria-live="polite">{v.stamp}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}