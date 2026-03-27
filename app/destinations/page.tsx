import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Destinations — KIZUNA Journey',
  description: 'Japan destinations for Middle Eastern travel agencies — Tokyo, Kyoto, Osaka, Hakone, Hokkaido, Okinawa and more. Verified halal options in every city.',
}

const WA = 'https://wa.me/971509509781?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20Japan%20programs.'

const MAIN_DESTINATIONS = [
  {
    name: 'Tokyo',
    subtitle: '東京',
    img: '/images/destinations/tokyo.jpg',
    description: 'Japan\'s capital — a city of contradictions where ancient temples sit beside neon towers. Shibuya, Asakusa, Harajuku, and DisneySea in one megacity.',
    highlights: ['Shibuya & Shinjuku', 'Asakusa Temple', 'Tokyo Disney Resort', 'TeamLab digital art', 'Tsukiji market'],
    halal: 'Largest halal restaurant selection in Japan. 200+ verified options across all districts.',
    areas: [
      { name: 'Shibuya', img: '/images/areas/tokyo-shibuya.jpg' },
      { name: 'Asakusa', img: '/images/areas/tokyo-asakusa.jpg' },
      { name: 'Shinjuku', img: '/images/areas/tokyo-shinjuku.jpg' },
      { name: 'Harajuku', img: '/images/areas/tokyo-harajuku.jpg' },
    ],
  },
  {
    name: 'Kyoto',
    subtitle: '京都',
    img: '/images/destinations/kyoto.jpg',
    description: 'Japan\'s former imperial capital and its spiritual heart. Over 1,600 Buddhist temples, Shinto shrines, and preserved machiya townhouses.',
    highlights: ['Fushimi Inari shrine', 'Arashiyama bamboo', 'Traditional maiko experience', 'Gion district', 'Private tea ceremony'],
    halal: '80+ verified halal restaurants. Ryokan with private onsen available throughout.',
    areas: [
      { name: 'Fushimi Inari', img: '/images/areas/kyoto-fushimi.jpg' },
      { name: 'Arashiyama', img: '/images/areas/kyoto-arashiyama.jpg' },
      { name: 'Gion', img: '/images/areas/kyoto-gion.jpg' },
      { name: 'Kinkaku-ji', img: '/images/areas/kyoto-kinkakuji.jpg' },
    ],
  },
  {
    name: 'Osaka',
    subtitle: '大阪',
    img: '/images/destinations/osaka.jpg',
    description: 'Japan\'s food capital and most welcoming city. Home to Dotonbori, Osaka Castle, and Namba — the ideal base for exploring the entire Kansai region.',
    highlights: ['Dotonbori food street', 'Osaka Castle', 'Namba district', 'Universal Studios Japan', 'Day trip to Nara'],
    halal: '120+ halal options in the city. Dedicated halal food tour available.',
    areas: [
      { name: 'Dotonbori', img: '/images/areas/osaka-dotonbori.jpg' },
      { name: 'Osaka Castle', img: '/images/areas/osaka-castle.jpg' },
      { name: 'Namba', img: '/images/areas/osaka-namba.jpg' },
      { name: 'Osaka Bay', img: '/images/areas/osaka-namba.jpg' },
    ],
  },
  {
    name: 'Hakone',
    subtitle: '箱根',
    img: '/images/destinations/hakone.jpg',
    description: 'The quintessential Japanese resort escape. Ryokan hot spring retreats with Mt. Fuji views, volcanic landscapes, and private onsen — 90 minutes from Tokyo.',
    highlights: ['Mt. Fuji panorama', 'Private ryokan onsen', 'Open-air art museum', 'Lake Ashi boat ride', 'Hakone ropeway'],
    halal: 'Private onsen suites for complete privacy. Halal kaiseki arranged directly with ryokan chefs.',
    areas: [
      { name: 'Mt. Fuji View', img: '/images/areas/hakone-fuji.jpg' },
      { name: 'Hakone Ropeway', img: '/images/areas/hakone-ropeway.jpg' },
      { name: 'Ryokan Onsen', img: '/images/areas/hakone-ryokan.jpg' },
      { name: 'Lake Ashi', img: '/images/areas/hakone-fuji.jpg' },
    ],
  },
  {
    name: 'Hokkaido',
    subtitle: '北海道',
    img: '/images/destinations/hokkaido.jpg',
    description: 'Japan\'s wild north — powder snow, lavender fields, and some of the world\'s freshest seafood. Sapporo, Niseko, and Furano across four dramatically different seasons.',
    highlights: ['Niseko powder skiing', 'Furano lavender (June–August)', 'Sapporo Snow Festival', 'Otaru canal', 'Jozankei hot springs'],
    halal: 'Growing halal scene in Sapporo. Muslim-friendly ski lodges in Niseko with halal catering available.',
    areas: [
      { name: 'Niseko Skiing', img: '/images/areas/hokkaido-niseko.jpg' },
      { name: 'Furano Lavender', img: '/images/areas/hokkaido-lavender.jpg' },
      { name: 'Sapporo City', img: '/images/areas/hokkaido-sapporo.jpg' },
      { name: 'Hokkaido Winter', img: '/images/areas/hokkaido-niseko.jpg' },
    ],
  },
  {
    name: 'Okinawa',
    subtitle: '沖縄',
    img: '/images/destinations/okinawa.jpg',
    description: 'Japan\'s tropical islands — turquoise water, coral reefs, and a distinct Ryukyu culture unlike anywhere else in the country. A natural fit for families.',
    highlights: ['Kerama Islands diving', 'Naha Shuri Castle', 'Churaumi Aquarium', 'Beach resorts', 'Ryukyu culture experiences'],
    halal: 'Halal options available in Naha. Beach resorts with halal catering on request. Perfect for family groups.',
    areas: [
      { name: 'Okinawa Beaches', img: '/images/areas/okinawa-beach.jpg' },
      { name: 'Churaumi Aquarium', img: '/images/areas/okinawa-aquarium.jpg' },
      { name: 'Shuri Castle', img: '/images/areas/okinawa-castle.jpg' },
      { name: 'Kerama Islands', img: '/images/areas/okinawa-beach.jpg' },
    ],
  },
]

const MORE_DESTINATIONS = [
  {
    name: 'Nara',
    jp: '奈良',
    desc: 'Ancient capital with free-roaming deer, Todai-ji temple\'s giant Buddha, and Kasuga Taisha shrine. A perfect half-day from Kyoto or Osaka.',
    highlight: 'Giant Buddha + free-roaming deer',
    img: '/images/hero_pagoda.jpg',
  },
  {
    name: 'Hiroshima',
    jp: '広島',
    desc: 'The Peace Memorial Museum and Itsukushima floating torii gate on Miyajima Island. One of Japan\'s most moving and historically significant experiences.',
    highlight: 'Miyajima Island floating torii gate',
    img: '/images/hero_shrine.jpg',
  },
  {
    name: 'Kanazawa',
    jp: '金沢',
    desc: 'The "Little Kyoto" of the Japan Sea coast. Kenroku-en (one of Japan\'s top 3 gardens), preserved samurai districts, and outstanding fresh seafood.',
    highlight: 'Kenroku-en garden · Samurai district',
    img: '/images/hero_spring.jpg',
  },
  {
    name: 'Nagano',
    jp: '長野',
    desc: 'Snow monkeys bathing in hot springs at Jigokudani, Matsumoto Castle, and world-class skiing at Hakuba. A winter and nature paradise.',
    highlight: 'Snow monkeys · Matsumoto Castle',
    img: '/images/areas/hokkaido-niseko.jpg',
  },
  {
    name: 'Fukuoka',
    jp: '福岡',
    desc: 'Japan\'s gateway to Kyushu — famous for tonkotsu ramen, Hakata festivals, and proximity to the volcanic landscapes of Beppu and Aso.',
    highlight: 'Gateway to Kyushu · Best ramen in Japan',
    img: '/images/hero_bright.jpg',
  },
  {
    name: 'Nikko',
    jp: '日光',
    desc: 'Ornate UNESCO-listed shrines in a mountain forest, Kegon Falls, and the stunning Lake Chuzenji — only 2 hours from Tokyo by direct train.',
    highlight: 'UNESCO shrines · Kegon Falls',
    img: '/images/hero_pagoda.jpg',
  },
]

export default function DestinationsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image src="/images/slide_fuji_sakura1.jpg" alt="Japan destinations" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-16 w-full">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Where We Operate</div>
          <h1 className="font-fraunces text-5xl md:text-7xl font-light text-white leading-[0.9] mb-5 max-w-2xl">
            Japan, from<br />north to south.
          </h1>
          <p className="text-white/55 text-base leading-relaxed max-w-xl">
            Six core destinations with deep local expertise — plus extended reach across Japan&apos;s most remarkable regions.
          </p>
        </div>
      </section>

      {/* ── MAIN DESTINATIONS ────────────────────────────── */}
      <section className="bg-off-white">
        {MAIN_DESTINATIONS.map((dest, i) => (
          <div
            key={dest.name}
            className={`max-w-[1200px] mx-auto px-8 py-20 ${i < MAIN_DESTINATIONS.length - 1 ? 'border-b border-black/5' : ''}`}
          >
            <div className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              {/* Images */}
              <div className="flex flex-col gap-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image src={dest.img} alt={dest.name} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div className="font-jp text-4xl text-white/15">{dest.subtitle}</div>
                  </div>
                </div>
                {/* Area sub-grid */}
                <div className="grid grid-cols-4 gap-2">
                  {dest.areas.map((area) => (
                    <div key={area.name} className="relative aspect-square overflow-hidden group">
                      <Image src={area.img} alt={area.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 p-1.5">
                        <div className="text-[8px] tracking-[0.08em] text-white/70 leading-tight">{area.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="font-fraunces text-4xl md:text-5xl font-light text-navy italic mb-2">{dest.name}</div>
                <div className="font-jp text-navy/20 text-xl mb-5">{dest.subtitle}</div>
                <p className="text-[14px] text-muted leading-7 mb-6">{dest.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.highlights.map((h) => (
                    <span key={h} className="text-[11px] text-navy/55 bg-white border border-black/8 px-3 py-1.5">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-start gap-3 p-4 bg-gold/5 border-l-2 border-gold mb-8">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2" className="mt-0.5 shrink-0">
                    <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[12px] text-muted leading-6">{dest.halal}</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={`${WA.replace('programs.', '')}${dest.name}%20programs.`}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white text-[11px] tracking-[0.1em] uppercase px-5 py-3 transition-colors duration-200"
                  >
                    Enquire about {dest.name}
                  </a>
                  <Link
                    href={`/destinations/${dest.name.toLowerCase()}`}
                    className="inline-flex items-center gap-2 border border-navy/15 hover:border-gold text-navy/60 hover:text-gold text-[11px] tracking-[0.1em] uppercase px-5 py-3 transition-all duration-200"
                  >
                    Full Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── MORE DESTINATIONS ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-14">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Extended Reach</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
              Beyond the six.<br />More of Japan.
            </h2>
            <p className="text-[14px] text-muted leading-7 mt-4 max-w-xl">
              We also build programs around Japan&apos;s lesser-known but equally stunning regions — often combined with the six core destinations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
            {MORE_DESTINATIONS.map((dest) => (
              <div key={dest.name} className="group relative overflow-hidden" style={{ minHeight: '300px' }}>
                <Image src={dest.img} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-baseline gap-3 mb-2">
                    <div className="font-fraunces text-xl font-light italic text-white">{dest.name}</div>
                    <div className="font-jp text-white/30 text-xs">{dest.jp}</div>
                  </div>
                  <p className="text-[12px] text-white/50 leading-6 mb-3 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                    {dest.desc}
                  </p>
                  <div className="text-[10px] text-gold/70 border-t border-white/10 pt-3">
                    <span className="text-gold/40 mr-2">›</span>{dest.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MULTI-CITY ───────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/slide_torii1.jpg" alt="Multi-city Japan journey" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Multi-City Programs</div>
          <h2 className="font-fraunces text-4xl md:text-5xl font-light text-white mb-5">
            Mix and match for<br />the perfect journey.
          </h2>
          <p className="text-[14px] text-white/45 leading-7 mb-10 max-w-lg mx-auto">
            Our most popular programs combine 2–4 destinations. We handle all logistics between cities — Shinkansen, private transfers, and timing.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              'Tokyo → Kyoto → Osaka',
              'Tokyo → Hakone → Kyoto',
              'Osaka → Kyoto → Hiroshima',
              'Tokyo → Kyoto → Hokkaido',
              'Okinawa + Kyoto',
              'Custom multi-city',
            ].map((route) => (
              <span key={route} className="text-[11px] tracking-[0.08em] border border-white/20 text-white/60 px-4 py-2">
                {route}
              </span>
            ))}
          </div>
          <a
            href={WA}
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white text-[12px] font-medium tracking-[0.08em] uppercase px-8 py-4 transition-colors duration-200"
          >
            Plan a Multi-City Program
          </a>
        </div>
      </section>
    </>
  )
}
