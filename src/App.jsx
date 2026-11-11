import { useRef, useState } from 'react'
import Gate, { MusicButton } from './blocks/Gate.jsx'
import Opening from './blocks/Opening.jsx'
import Timeline from './blocks/Timeline.jsx'
import Quiz from './blocks/Quiz.jsx'
import Motivos from './blocks/Motivos.jsx'
import Vales from './blocks/Vales.jsx'
import Carta from './blocks/Carta.jsx'
import DecoColumn from './blocks/DecoColumn.jsx'
import { scatter } from './data/scatter.js'

const VOLUME = 0.6

export default function App() {
  const audio = useRef(null)
  const fade = useRef(null)
  const [entered, setEntered] = useState(false)
  const [playing, setPlaying] = useState(false)

  // Chamado no clique da tela inicial: navegadores só liberam o som depois de um clique.
  const enter = () => {
    setEntered(true)
    const a = audio.current
    if (!a) return
    a.volume = 0
    a.play()
      .then(() => {
        setPlaying(true)
        let v = 0
        clearInterval(fade.current)
        fade.current = setInterval(() => { // entrada suave do volume
          v = Math.min(v + 0.03, VOLUME)
          a.volume = v
          if (v >= VOLUME) clearInterval(fade.current)
        }, 150)
      })
      .catch(() => {}) // sem arquivo de música ou som bloqueado: o site segue normal
  }

  const toggle = () => {
    const a = audio.current
    if (!a) return
    if (a.paused) { a.volume = VOLUME; a.play().then(() => setPlaying(true)).catch(() => {}) }
    else { a.pause(); setPlaying(false) }
  }

  return (
    <>
      <audio ref={audio} src="/musica.mp3" loop preload="auto" />
      {!entered && <Gate onEnter={enter} />}
      {entered && <MusicButton playing={playing} onToggle={toggle} />}
      <main>
        {/* o key refaz a animação da abertura quando ela clica em "entrar" */}
        <Opening key={entered ? 'in' : 'out'} />
        <DecoColumn items={scatter.timeline}><Timeline /></DecoColumn>
        <DecoColumn items={scatter.quiz}><Quiz /></DecoColumn>
        <DecoColumn items={scatter.motivos}><Motivos /></DecoColumn>
        <DecoColumn items={scatter.vales}><Vales /></DecoColumn>
        <DecoColumn items={scatter.carta}><Carta /></DecoColumn>
      </main>
    </>
  )
}