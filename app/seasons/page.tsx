import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Japan by Season — KIZUNA Journey',
  description: 'The best Japan travel programs for every season — spring cherry blossoms, summer beaches, autumn foliage, winter snow.',
}

const SEASONS = [
  {
    slug: 'spring',
    name: 'Spring',
    jp: '春',
    period: 'March — May',
    icon: '🌸',
    img: '/images/season-spring.jpg',
    headline: 'Cherry Blossoms & New Beginnings',
    desc: 'Japan\'s most iconic season. Sakura peaks late March to mid-April.',
  },
  {
    slug: 'summer',
    name: 'Summer',
    jp: '夏',
    period: 'June — August',
    icon: '🌊',
    img: '/images/season-summer.jpg',
    headline: 'Beaches, Festivals & Okinawa',
    desc: 'Crystal-clear Okinawa waters, summer matsuri, and mountain escapes.',
  },
  {
    slug: 'autumn',
    name: 'Autumn',
    jp: '秋',
    period: 'September — November',
    icon: '🍁',
    img: '/images/season-autumn.jpg',
    headline: 'Red Maple & Golden Light',
    desc: 'Koyo (autumn foliage) transforms Kyoto and Nikko into living paintings.',
  },
  {
    slug: 'winter',
    name: 'Winter',
    jp: '冬',
    period: 'December — February',
    icon: '❄️',
    img: '/images/season-winter.jpg',
    headline: 'Powder Snow & Hot Springs',
    desc: 'World-class skiing in Niseko, Sapporo Snow Festival, and onsen under the stars.',
  },
]

export default function SeasonsPage() {
  return (
    <>
      <div className="bg-navy-dark pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Seasonal Travel</div>
          <h1 className="font-fraunces text-5xl md:text-6xl font-light text-white leading-[1.0] mb-5">
            Japan, in every season.
          </h1>
          <p className="text-white/45 text-[14px] leading-7 max-w-xl">
            Each season of Japan is a completely different experience. Choose yours — we&apos;ll build the perfect program around it.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-[3px] bg-off-white">
        {SEASONS.map((s) => (
          <Link key={s.slug} href={`/seasons/${s.slug}`} className="group relative overflow-hidden block" style={{ minHeight: '50vh' }}>
            <Image src={s.img} alt={s.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/0" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold/80 mb-2">{s.period}</div>
              <div className="font-fraunces text-3xl font-light italic text-white mb-1">{s.name} <span className="font-jp text-white/30 text-xl not-italic">{s.jp}</span></div>
              <div className="font-fraunces text-lg font-light text-white/70 italic mb-3">{s.headline}</div>
              <p className="text-[13px] text-white/45 leading-6 mb-4 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">{s.desc}</p>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-0.5 w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View {s.name} Packages →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
