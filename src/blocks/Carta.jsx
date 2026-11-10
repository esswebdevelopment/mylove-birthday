import { useState } from 'react'
import { carta, playlist } from '../data/carta.js'
import './carta.css'

export default function Carta() {
  const [open, setOpen] = useState(false)

  return (
    <section className="carta">
      <h2 className="ct-title">{carta.title}</h2>

      <button className={`ct-env ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="ct-flap" aria-hidden="true" />
        <span className="ct-seal" aria-hidden="true">♥</span>
        <span className="ct-label">{open ? 'Fechar a carta' : 'Toque para abrir a carta'}</span>
      </button>

      <div className={`ct-wrap ${open ? 'open' : ''}`}>
        <div className="ct-clip">
          <article className="ct-paper">
            {carta.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <p className="ct-sign">
              {carta.signature}
              <strong>{carta.from}</strong>
            </p>
          </article>
        </div>
      </div>

      {playlist.length > 0 && (
        <div className="ct-playlist">
          <h3>Nossa playlist</h3>
          <ol>
            {playlist.map((s, i) => (
              <li key={i}><b>{s.title}</b><span>{s.artist}</span></li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}