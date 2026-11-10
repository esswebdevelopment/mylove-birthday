import foto from '../assets/foto-recorte.webp'
import { Bow, Sparkle, Number21, Hat, Cake } from '../art.jsx'

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

        <Cake className="cake" aria-hidden="true" />

        <Bow className="deco bow1" aria-hidden="true" />
        <Bow className="deco bow2" aria-hidden="true" />
        <Bow className="deco bow3" aria-hidden="true" />
        <Bow className="deco bow4" aria-hidden="true" />
        <Sparkle className="deco sp1" aria-hidden="true" />
        <Sparkle className="deco sp2" aria-hidden="true" />
        <Sparkle className="deco sp3" aria-hidden="true" />
        <Sparkle className="deco sp4" aria-hidden="true" />
      </div>

      <p className="quote">
        Rola pra baixo dedenguinho...
      </p>
    </section>
  )
}
