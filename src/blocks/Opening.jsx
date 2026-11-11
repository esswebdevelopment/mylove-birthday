import foto from '../assets/foto-recorte.webp'
import { Number21, Hat } from '../art.jsx'
import Doodle from '../blocks/Doodle.jsx'
import { doodles } from '../data/doodles.js'

const INK = '#ac1e2a'

// Ilustrações ao redor do bolo e da foto: [nome, posição, giro]
const SCATTER = [
  ['heartArrow', { left: '-1%', top: '12%', width: '22%' }, -10],
  ['envelope', { right: '-1%', top: '1%', width: '19%' }, 8],
  ['teAmo', { right: '-1%', top: '21%', width: '21%' }, 6],
  ['lollipop', { right: '1%', top: '39%', width: '11%' }, 14],
  ['hearts', { left: '14%', top: '36%', width: '8%' }, 0],
  ['bouquet', { left: '0%', top: '47%', width: '21%' }, -6],
  ['strawberry1', { left: '-1%', bottom: '5%', width: '18%' }, -8],
  ['champagne', { right: '1%', bottom: '5%', width: '10%' }, 8],
]

const Candle = ({ className }) => (
  <svg className={`candle ${className}`} viewBox="0 0 30 90" aria-hidden="true">
    <path className="flame" d="M15 3c8 9 7 18 0 21-7-3-8-12 0-21Z" fill="#f6b23c" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="9" y="28" width="12" height="60" rx="3" fill="#fffdf8" stroke={INK} strokeWidth="2.5" />
    <path d="M9 44l12-7M9 62l12-7M9 80l12-7" stroke={INK} strokeWidth="2.2" />
  </svg>
)

export default function Opening() {
  return (
    <section className="opening">
      <h1 className="title">
        <span>Feliz aniversário</span>
        <span className="title-red">meu eteteeeeto</span>
      </h1>

      <div className="art">
        <Number21 className="n21" aria-label="21" role="img" />

        <div className="photo">
          <img src={foto} alt="Nós dois, crianças, abraçados" />
          <Hat className="hat" aria-hidden="true" />
        </div>

        <div className="cake">
          <img src={doodles.cake.src} alt="" aria-hidden="true" />
          <Candle className="c1" />
          <Candle className="c2" />
        </div>

        {SCATTER.map(([name, pos, rot]) => (
          <Doodle key={name} name={name} style={{ ...pos, transform: `rotate(${rot}deg)` }} />
        ))}
      </div>

      <p className="quote">
        Arrasta pra baixo meu momoziiiinho..
      </p>
    </section>
  )
}