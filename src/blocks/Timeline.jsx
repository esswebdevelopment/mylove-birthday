import { useEffect, useRef } from 'react'
import { moments, closing } from '../data/timeline.js'
import { Bow, Sparkle } from '../art.jsx'
import './timeline.css'

const TILT = [-3, 2.5, -1.5, 3, -2.5, 1.8, -3, 2, -1.8, 2.8, -2.2, 1.6]
const DECO = { 2: 'bow', 5: 'sparkle', 8: 'bow', 10: 'sparkle' }

export default function Timeline() {
  const root = useRef(null)

  // cada polaroide "revela" a foto quando entra na tela (uma vez só)
  useEffect(() => {
    const items = root.current.querySelectorAll('.tl-item, .tl-end')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.25 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="timeline" ref={root}>
      <h2 className="tl-title">
        Algumas das suas conquistas
        <span>(e do que vivemos juntos também)</span>
      </h2>

      <ol className="tl-list">
        {moments.map((m, i) => (
          <li key={i} className={`tl-item ${i % 2 ? 'right' : 'left'}`} style={{ '--rot': `${TILT[i % TILT.length]}deg` }}>
            <figure className="polaroid">
              <span className="tape" aria-hidden="true" />
              <div className="shot" style={{ aspectRatio: m.ratio }}>
                <img src={m.src} alt={m.text} loading="lazy" style={{ objectPosition: m.pos }} />
              </div>
              <figcaption>{m.text}</figcaption>
            </figure>
            {DECO[i] === 'bow' && <Bow className={`tl-deco ${i % 2 ? 'dl' : 'dr'}`} aria-hidden="true" />}
            {DECO[i] === 'sparkle' && <Sparkle className={`tl-deco sp ${i % 2 ? 'dl' : 'dr'}`} aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <div className="tl-end">
        <p className="tl-quote">{closing.quote}</p>
        <p className="tl-big">{closing.big}</p>
      </div>
    </section>
  )
}
