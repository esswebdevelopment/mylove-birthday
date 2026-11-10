import Opening from './blocks/Opening.jsx'
import Timeline from './blocks/Timeline.jsx'
import Quiz from './blocks/Quiz.jsx'
import Motivos from './blocks/Motivos.jsx'
import Vales from './blocks/Vales.jsx'

// Cada bloco do site vira um componente em src/blocks/ e entra aqui, em ordem.
export default function App() {
  return (
    <main>
      <Opening />
      <Timeline />
      <Quiz />
      <Motivos />
      <Vales />
    </main>
  )
}