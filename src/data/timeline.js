// Ordem = ordem da linha do tempo. Imagens em src/assets/timeline/01.webp ... 12.webp
// ratio: proporção da foto dentro da polaroid | pos: ponto de foco do recorte (x y)
const img = (n) => new URL(`../assets/timeline/${String(n).padStart(2, '0')}.webp`, import.meta.url).href

export const moments = [
  { src: img(1), ratio: '3 / 2', pos: '50% 40%', text: 'Sua formação no Ensino Médio + técnico em Nutrição na ETEC' },
  { src: img(2), ratio: '1 / 1', pos: '50% 30%', text: 'Ter me conhecido, óbvio' },
  { src: img(3), ratio: '4 / 5', pos: '50% 20%', text: 'Sua formação no técnico de ADM no SENAI (a maior escola técnica de SP, muito orgulho!)' },
  { src: img(4), ratio: '4 / 5', pos: '50% 55%', text: 'Nosso pedido de namoro' },
  { src: img(5), ratio: '1 / 1', pos: '38% 50%', text: 'Sua aprovação na SPTech: a mais nova profissional de tecnologia de SP' },
  { src: img(6), ratio: '4 / 5', pos: '50% 30%', text: 'Já se sentindo uma clean aesthetic: indo pra Paulista, estilosa, secretária, dona de startup, comprando cafezinho no GoCoffee e no Starbucks' },
  { src: img(7), ratio: '4 / 5', pos: '50% 55%', text: 'Seu primeiro aniversário comigo' },
  { src: img(8), ratio: '4 / 5', pos: '50% 60%', text: 'A compra do seu piaaaaaano' },
  { src: img(9), ratio: '4 / 5', pos: '50% 25%', text: 'Ficamos habilitados juntos' },
  { src: img(10), ratio: '1 / 1', pos: '50% 50%', text: 'Uma das nossas dormidas juntos, viajando' },
  { src: img(11), ratio: '4 / 5', pos: '50% 35%', text: 'Seu primeiro dia na Dock' },
  { src: img(12), ratio: '4 / 5', pos: '50% 70%', text: 'Nosso pedido de casamento' },
  { src: img(14), ratio: '4 / 5', pos: '50% 70%', text: 'E por fim, primeira vez viajando sozinha' },
]

export const closing = {
  quote:
    'Se orgulhe de tudo isso (menos das minhas brincadeiras no meio do caminho). Se orgulhe das suas conquistas e do seu esforço. Sem a sua vontade e a sua força, nada disso teria acontecido.',
  big: 'Eu me orgulho de você. Do que você faz e de quem você é.',
}
