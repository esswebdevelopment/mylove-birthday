import Doodle from './Doodle.jsx'

// Envolve uma seção e espalha ilustrações nas bordas dela. Itens: ver scatter.js
export default function DecoColumn({ items = [], children }) {
  return (
    <div className="deco-col">
      {children}
      {items.map((d, i) => (
        <Doodle
          key={i}
          name={d.n}
          className="deco-item"
          style={{
            top: d.top,
            bottom: d.bottom,
            [d.side === 'l' ? 'left' : 'right']: d.x ?? 4,
            width: d.w,
            transform: `rotate(${d.rot ?? 0}deg)`,
          }}
        />
      ))}
    </div>
  )
}