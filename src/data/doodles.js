// Ilustrações recortadas da folha (src/assets/doodles/*.png). ratio = largura / altura.
const url = (name) => new URL(`../assets/doodles/${name}.png`, import.meta.url).href
const ratios = {
  "envelope": 0.9,
  "cake": 0.96,
  "heartArrow": 1.097,
  "lollipop": 0.512,
  "hearts": 1.217,
  "teAmo": 1.395,
  "bouquet": 0.729,
  "besito": 1.419,
  "matchbox": 0.945,
  "strawberry1": 0.921,
  "strawberry2": 0.969,
  "strawberry3": 0.852,
  "champagne": 0.317,
  "beMine": 1.042
}

export const doodles = Object.fromEntries(
  Object.entries(ratios).map(([name, ratio]) => [name, { src: url(name), ratio }]),
)