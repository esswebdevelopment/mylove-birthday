import { useEffect, useState } from 'react'
import Doodle from '../blocks/Doodle.jsx'
import './gate.css'

// Tela "Clique para entrar": desfoca o site, trava a rolagem e, ao clicar, chama onEnter (que toca a música).
export default function Gate({ onEnter }) {
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const enter = () => {
    if (leaving) return
    setLeaving(true)
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
    onEnter()
    setTimeout(() => setGone(true), 1000)
  }

  if (gone) return null

  return (
    <button className={`gate ${leaving ? 'leaving' : ''}`} onClick={enter} aria-label="Clique para entrar">
      <span className="gate-in">
        <Doodle name="hearts" className="gate-sp a" />
        <Doodle name="strawberry1" className="gate-sp b" />
        <Doodle name="envelope" className="gate-bow" />
        <strong>Natedito que hoje é o aniversário do meu eteeeengo genti.. clica pra entrar momo</strong>
      </span>
    </button>
  )
}

export function MusicButton({ playing, onToggle }) {
  return (
    <button className="music-btn" onClick={onToggle} aria-label={playing ? 'Pausar música' : 'Tocar música'}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H3v6h3l5 4Z" />
        {playing ? <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /> : <path d="m16 9 5 6m0-6-5 6" />}
      </svg>
    </button>
  )
}