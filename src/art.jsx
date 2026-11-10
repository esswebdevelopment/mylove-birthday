const RED = '#b4222b'
const INK = '#2b2623'

export const Bow = (props) => (
  <svg viewBox="0 0 100 80" fill="none" stroke={RED} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M50 40C30 4 4 14 11 38c6 18 30 11 39 2Z" />
    <path d="M50 40C70 4 96 14 89 38c-6 18-30 11-39 2Z" />
    <path d="M44 38C32 24 20 24 18 33M56 38c12-14 24-14 26-5" />
    <path d="M48 44C42 56 40 68 33 78M52 44c6 12 8 24 15 34" />
    <ellipse cx="50" cy="40" rx="5" ry="6" fill={RED} />
  </svg>
)

export const Sparkle = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8d8a8c" strokeWidth="1.3" strokeLinejoin="round" {...props}>
    <path d="M12 1c1 7 4 10 11 11-7 1-10 4-11 11C11 16 8 13 1 12 8 11 11 8 12 1Z" />
  </svg>
)

export const Number21 = (props) => (
  <svg viewBox="0 0 300 210" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <defs>
      <filter id="marker" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
      </filter>
    </defs>
    <g filter="url(#marker)">
      <g stroke={RED} strokeWidth="46">
        <path d="M30 70C28 14 122 10 122 66c0 40-80 74-96 120h104" />
        <path d="M184 72l40-44v158" />
      </g>
      <g stroke="#d8565d" strokeWidth="9" opacity=".55" transform="translate(-6 -4)">
        <path d="M30 70C28 14 122 10 122 66c0 40-80 74-96 120h104" />
        <path d="M184 72l40-44v158" />
      </g>
    </g>
  </svg>
)

export const Hat = (props) => (
  <svg viewBox="0 0 100 126" {...props}>
    <defs>
      <pattern id="glitter" width="7" height="7" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#f0848b" />
        <circle cx="5.5" cy="5" r=".9" fill="#fff" opacity=".8" />
      </pattern>
    </defs>
    <path d="M50 12 90 112Q50 126 10 112Z" fill="#9c1b23" />
    <path d="M50 12 90 112Q50 126 10 112Z" fill="url(#glitter)" />
    <path d="M50 12 90 112Q50 126 10 112Z" fill="none" stroke="#6f1218" strokeWidth="2" />
    <path d="m50 0 4.6 8.4 9.4 1.8-6.6 7 1.2 9.5L50 21l-8.6 5.7 1.2-9.5-6.6-7 9.4-1.8Z" fill={RED} stroke="#6f1218" strokeWidth="2" strokeLinejoin="round" transform="translate(0 -2)" />
  </svg>
)

const Tier = ({ x, y, w, h, drips }) => {
  const rx = w / 2, cx = x + rx
  return (
    <g stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="#f4efe0">
      <path d={`M${x} ${y}v${h}q${rx} 28 ${w} 0V${y}`} />
      <ellipse cx={cx} cy={y} rx={rx} ry="15" />
      {drips.map(([dx, len, r], i) => (
        <path key={i} d={`M${x + dx} ${y + 12}v${len}a${r} ${r} 0 0 0 ${r * 2} 0v-${len}`} />
      ))}
    </g>
  )
}

const Candle = ({ x }) => (
  <g>
    <rect x={x - 5} y="62" width="10" height="42" rx="2" fill="#fff" stroke={INK} strokeWidth="2.5" />
    <path d={`M${x - 5} 76l10 -6M${x - 5} 90l10 -6`} stroke={RED} strokeWidth="2" />
    <path className="flame" d={`M${x} 34c9 10 8 20 0 24-8-4-9-14 0-24Z`} fill="#f6b23c" stroke={INK} strokeWidth="2" />
  </g>
)

export const Cake = (props) => (
  <svg viewBox="0 0 400 300" {...props}>
    <g stroke={INK} strokeWidth="3" fill="#f4efe0" strokeLinejoin="round">
      <ellipse cx="200" cy="252" rx="150" ry="13" />
      <path d="M172 258h56l-8 34h-40Z" />
      <ellipse cx="200" cy="294" rx="30" ry="4" />
    </g>
    <Tier x={55} y={170} w={290} h={70} drips={[[22, 22, 12], [78, 14, 10], [150, 26, 13], [226, 16, 11]]} />
    <Tier x={100} y={110} w={200} h={46} drips={[[18, 18, 11], [76, 10, 9], [128, 20, 12]]} />
    <Candle x={172} />
    <Candle x={228} />
    <Bow x="148" y="132" width="104" height="84" />
  </svg>
)
