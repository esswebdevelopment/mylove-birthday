import { useState } from 'react'
import data from '../data/quiz.json'
import './quiz.css'

const LETTERS = ['a', 'b', 'c', 'd']

export default function Quiz() {
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [wrongs, setWrongs] = useState(0)
  const [msg, setMsg] = useState('')
  const [done, setDone] = useState(false)

  const total = data.questions.length
  const q = data.questions[idx]
  const answered = picked !== null
  const hit = answered && picked === q.correct

  const choose = (i) => {
    if (answered) return
    setPicked(i)
    if (i === q.correct) {
      setScore((s) => s + 1)
      setMsg(data.rightMessages[idx % data.rightMessages.length])
    } else {
      setMsg(data.wrongMessages[wrongs % data.wrongMessages.length])
      setWrongs((w) => w + 1)
    }
  }

  const next = () => {
    if (idx + 1 >= total) return setDone(true)
    setIdx(idx + 1)
    setPicked(null)
  }

  const restart = () => {
    setIdx(0); setPicked(null); setScore(0); setWrongs(0); setMsg(''); setDone(false)
  }

  const result = data.results.find((r) => score >= r.min)

  return (
    <section className="quiz">
      <h2 className="qz-title">
        {data.title}
        <span>{data.subtitle}</span>
      </h2>

      {!done ? (
        <div className="qz-card" key={idx}>
          <span className="qz-tape" aria-hidden="true" />
          <p className="qz-count">Pergunta {idx + 1} de {total}</p>
          <div className="qz-bar" aria-hidden="true"><i style={{ width: `${((idx + (answered ? 1 : 0)) / total) * 100}%` }} /></div>

          <h3 className="qz-q">{q.text}</h3>

          <div className="qz-options">
            {q.options.map((opt, i) => {
              const state = !answered ? '' : i === q.correct ? 'right' : i === picked ? 'wrong' : 'dim'
              return (
                <button key={i} className={`qz-opt ${state}`} onClick={() => choose(i)} disabled={answered}>
                  <b>{LETTERS[i]}</b>
                  <span>{opt}</span>
                  {state === 'right' && <em>certa</em>}
                  {state === 'wrong' && <em>errou</em>}
                </button>
              )
            })}
          </div>

          <div aria-live="polite">
            {answered && (
              <div className={`qz-msg ${hit ? 'ok' : 'bad'}`}>
                <p>{msg}</p>
                {!hit && <small>Resposta certa: <strong>{q.options[q.correct]}</strong></small>}
              </div>
            )}
          </div>

          {answered && (
            <button className="qz-next" onClick={next}>
              {idx + 1 >= total ? 'Ver resultado' : 'Próxima'}
            </button>
          )}
        </div>
      ) : (
        <div className="qz-card qz-final">
          <span className="qz-tape" aria-hidden="true" />
          <p className="qz-count">Resultado</p>
          <p className="qz-score">{score}<small>/{total}</small></p>
          <p className="qz-result">{result.text}</p>
          <button className="qz-next" onClick={restart}>Tentar de novo</button>
        </div>
      )}
    </section>
  )
}