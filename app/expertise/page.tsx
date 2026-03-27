import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Japan & Halal Expertise — KIZUNA Journey',
  description: 'Why KIZUNA Journey knows Japan better than any other Middle East operator. 500+ verified halal restaurants, prayer arrangements, seasonal expertise, and real local knowledge.',
}

const WA = 'https://wa.me/971509509781?text=Hello%2C%20I%27m%20a%20travel%20agent%20and%20I%27d%20like%20to%20enquire%20about%20Japan%20programs.'

const HALAL_RESTAURANTS = [
  {
    city: 'Tokyo', jp: '東京',
    count: '200+',
    highlights: ['Naritaya — Japan\'s most famous halal ramen, Asakusa', 'Gyumon — A5 halal wagyu yakiniku, multiple locations', 'Asakusa Sushi Ken — Japan\'s first halal-certified sushi', 'Ayam-Ya — Halal chicken ramen, Ueno area'],
    img: '/images/areas/tokyo-asakusa.jpg',
  },
  {
    city: 'Kyoto', jp: '京都',
    count: '80+',
    highlights: ['PANGA Kyoto — Halal ramen with certified broth', 'Halal kaiseki available at select ryokan', 'Muslim-friendly bento for day trips', 'Prayer rooms at central shopping malls'],
    img: '/images/areas/kyoto-gion.jpg',
  },
  {
    city: 'Osaka', jp: '大阪',
    count: '120+',
    highlights: ['Shinsen-en Grill — Halal wagyu steakhouse', 'Namba Halal Food Street — dedicated halal zone', 'Dotonbori halal options within walking distance', 'Certified restaurants inside Universal Studios Japan'],
    img: '/images/areas/osaka-dotonbori.jpg',
  },
  {
    city: 'Hakone', jp: '箱根',
    count: '15+',
    highlights: ['Halal kaiseki arranged directly with ryokan chefs', 'Private onsen suites for complete privacy', 'Mount Fuji viewing with prayer time awareness', 'Halal convenience options in Odawara'],
    img: '/images/areas/hakone-ryokan.jpg',
  },
  {
    city: 'Hokkaido', jp: '北海道',
    count: '40+',
    highlights: ['Muslim-friendly ski lodges in Niseko', 'Halal seafood at Sapporo fish market', 'Halal ramen in Sapporo city center', 'Prayer rooms at New Chitose Airport'],
    img: '/images/areas/hokkaido-sapporo.jpg',
  },
  {
    city: 'Okinawa', jp: '沖縄',
    count: '20+',
    highlights: ['Halal catering available at beach resorts', 'Muslim-friendly options in Naha city', 'Prayer space at Churaumi Aquarium area', 'Private villa dining with halal menus'],
    img: '/images/areas/okinawa-beach.jpg',
  },
]

const JAPAN_EXPERTISE = [
  {
    icon: '🌸',
    season: 'Spring — March to May',
    jp: '春',
    title: 'Cherry Blossom Season',
    text: 'The most sought-after Japan experience. Sakura peaks in late March to mid-April. We know the local forecast, the quieter spots beyond the famous ones, and which ryokan offer Hanami garden access. Booking opens December — supply runs out fast.',
    tip: 'Best spots: Maruyama Park Kyoto, Shinjuku Gyoen Tokyo, Hirosaki Castle (Aomori)',
    img: '/images/hero_sakura.jpg',
  },
  {
    icon: '🎆',
    season: 'Summer — June to August',
    jp: '夏',
    title: 'Festival Season',
    text: 'Japan\'s summer is defined by matsuri — traditional festivals with fireworks, taiko drums, and yukata. Gion Matsuri in Kyoto (July), Awa Odori in Tokushima, and hundreds of local neighborhood celebrations. We plan around them, not around them.',
    tip: 'Best experiences: Gion Matsuri, Sumida River Fireworks, Hokkaido lavender in Furano',
    img: '/images/hero_bright.jpg',
  },
  {
    icon: '🍁',
    season: 'Autumn — September to November',
    jp: '秋',
    title: 'Koyo — Red Maple Season',
    text: 'Japan\'s autumn foliage (koyo) rivals the sakura in beauty. Deep reds, oranges, and golds frame every temple and mountain path. Kyoto, Nikko, and Hokkaido are the premium destinations. Crowds are smaller than spring, air is cool and dry.',
    tip: 'Best spots: Tofuku-ji Temple Kyoto, Nikko Toshogu, Daisetsuzan Hokkaido',
    img: '/images/hero_pagoda.jpg',
  },
  {
    icon: '❄️',
    season: 'Winter — December to February',
    jp: '冬',
    title: 'Snow Season & Hot Springs',
    text: 'Niseko receives some of the world\'s best powder snow. Sapporo\'s Snow Festival in February draws millions. And across Japan, onsen (hot spring) season peaks — private baths in the snow with mountain views. We have verified Muslim-friendly facilities across all winter destinations.',
    tip: 'Best experiences: Niseko skiing, Jigokudani snow monkeys, Sapporo Snow Festival, Beppu onsen',
    img: '/images/areas/hokkaido-niseko.jpg',
  },
]

const TOKYO_SPOTS = [
  { name: 'Asakusa', jp: '浅草', desc: 'Traditional shitamachi district — Senso-ji Temple, rickshaw rides, traditional craft shopping', img: '/images/areas/tokyo-asakusa.jpg' },
  { name: 'Shibuya', jp: '渋谷', desc: 'The world\'s busiest crossing, luxury shopping, TeamLab digital art museum', img: '/images/areas/tokyo-shibuya.jpg' },
  { name: 'Shinjuku', jp: '新宿', desc: 'Kabukicho entertainment, Golden Gai, Shinjuku Gyoen park, Tokyo Metropolitan Government Tower views', img: '/images/areas/tokyo-shinjuku.jpg' },
  { name: 'Harajuku', jp: '原宿', desc: 'Meiji Jingu Shrine, Takeshita Street, Omotesando luxury boulevard, Yoyogi Park', img: '/images/areas/tokyo-harajuku.jpg' },
]

const KYOTO_SPOTS = [
  { name: 'Fushimi Inari', jp: '伏見稲荷', desc: 'Ten thousand vermillion torii gates — most iconic Japan photo. Best visited at sunrise.', img: '/images/areas/kyoto-fushimi.jpg' },
  { name: 'Arashiyama', jp: '嵐山', desc: 'Bamboo grove, Tenryu-ji temple garden, Togetsukyo bridge, kimono rental experiences', img: '/images/areas/kyoto-arashiyama.jpg' },
  { name: 'Gion', jp: '祇園', desc: 'Maiko and geisha district — preserved Edo-era streets, exclusive tea houses, private maiko experiences', img: '/images/areas/kyoto-gion.jpg' },
  { name: 'Kinkaku-ji', jp: '金閣寺', desc: 'The Golden Pavilion — Zen Buddhist temple covered in gold leaf, reflecting on Kyoko-chi pond', img: '/images/areas/kyoto-kinkakuji.jpg' },
]

export default function ExpertisePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image src="/images/hero_torii.jpg" alt="Japan — the country we know" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-20 w-full">
          <div className="inline-flex items-center gap-2 border border-gold/35 bg-gold/10 text-gold text-[9px] tracking-[0.25em] uppercase px-4 py-2 mb-7">
            Japan Knowledge · Halal Expertise
          </div>
          <h1 className="font-fraunces text-5xl md:text-7xl font-light text-white leading-[0.9] mb-6 max-w-3xl">
            We know Japan.<br />
            We live <em className="text-gold not-italic">halal.</em>
          </h1>
          <p className="text-white/55 text-base leading-relaxed max-w-xl">
            This is why travel agencies in the UAE trust us with their most discerning clients — and why Muslim families arrive in Japan knowing every detail is taken care of.
          </p>
        </div>
      </section>

      {/* ── INTRO STATS ──────────────────────────────────── */}
      <div className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { value: '500+', label: 'Verified Halal Restaurants', sub: 'Personally confirmed, not aggregated' },
              { value: '6',    label: 'Core Destinations', sub: 'Deep knowledge in every city' },
              { value: '4',    label: 'Seasons of Expertise', sub: 'Year-round Japan programs' },
              { value: '1',    label: 'Halal Restaurant in Dubai', sub: 'rayu — our own restaurant' },
            ].map((s) => (
              <div key={s.value} className="py-10 px-6 text-center first:pl-0 last:pr-0">
                <div className="font-fraunces text-4xl md:text-5xl font-light text-gold mb-1 leading-none">{s.value}</div>
                <div className="text-[11px] font-semibold text-white tracking-wide mb-1">{s.label}</div>
                <div className="text-[10px] text-white/30 tracking-wide">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RAYU CREDENTIAL ──────────────────────────────── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy">
              <Image src="/images/halal/halal-feature.jpg" alt="rayu — halal Japanese restaurant in Dubai" fill className="object-cover" />
              <div className="absolute inset-0 bg-navy-dark/20" />
              <div className="absolute bottom-4 left-4 bg-navy-dark/80 backdrop-blur-sm px-4 py-2">
                <div className="text-[10px] tracking-[0.15em] uppercase text-gold mb-0.5">Our Restaurant</div>
                <div className="font-fraunces text-lg italic text-white">rayu · Jumeirah 1, Dubai</div>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Why We&apos;re Different</div>
              <h2 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-[1.1] mb-5">
                We don&apos;t just research halal.<br />We operate a halal kitchen.
              </h2>
              <p className="text-[13px] text-muted leading-7 mb-6">
                rayu is our halal Japanese restaurant in Jumeirah 1, Dubai. Every day, our team sources halal-certified Japanese ingredients, verifies suppliers, and serves Japanese cuisine to Muslim diners.
              </p>
              <p className="text-[13px] text-muted leading-7 mb-6">
                That direct operational experience means we know which certifications are real, which restaurants cut corners, and what Muslim families actually need — not from a guidebook, but from daily practice.
              </p>
              <p className="text-[13px] text-muted leading-7 mb-8">
                When we say a restaurant is halal-certified, we&apos;ve checked the certificate. When we say prayer arrangements are confirmed, they&apos;re confirmed before departure.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Japan Islamic Trust certification',
                  'Halal Foundation Japan',
                  'Japan Halal Association',
                  'JAKIM-recognized options',
                ].map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase text-gold/70 border border-gold/25 px-3 py-1.5">
                    <svg width="8" height="8" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5">
                      <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HALAL RESTAURANT DATABASE ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Restaurant Database</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05] mb-5">
              500+ verified halal restaurants.<br />Across every destination.
            </h2>
            <p className="text-[14px] text-muted leading-7 max-w-2xl mx-auto">
              We don&apos;t scrape restaurant aggregators. Every listing is personally verified — we check the certification document, confirm the kitchen process, and update the record when things change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
            {HALAL_RESTAURANTS.map((city) => (
              <div key={city.city} className="group relative overflow-hidden bg-navy" style={{ minHeight: '320px' }}>
                <Image src={city.img} alt={city.city} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-navy-dark/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-baseline gap-3 mb-3">
                    <div className="font-fraunces text-2xl font-light italic text-white">{city.city}</div>
                    <div className="font-jp text-white/30 text-sm">{city.jp}</div>
                    <div className="ml-auto font-fraunces text-2xl text-gold font-light">{city.count}</div>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {city.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[11px] text-white/55 leading-5">
                        <span className="text-gold/60 shrink-0 mt-0.5">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRAYER & FACILITIES ──────────────────────────── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-14">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Prayer & Facilities</div>
            <h2 className="font-fraunces text-4xl font-light text-navy leading-[1.05]">
              Every prayer arranged.<br />Before departure.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Prayer Rooms at Every Hotel',
                text: 'We confirm in-room Qibla direction, prayer mat availability, and nearest mosque location for every hotel in your program. Sent to your client before they arrive.',
                icon: '🕌',
              },
              {
                title: 'Mosque Locations Mapped',
                text: 'Tokyo Camii (Yoyogi), Kobe Mosque, Osaka Ibaraki Mosque, Nagoya Mosque — we know every city\'s Islamic facilities and how long it takes to get there from each hotel.',
                icon: '📍',
              },
              {
                title: 'Gender-Separated Onsen',
                text: 'Private onsen suites at ryokan — arranged in advance, confirmed before check-in. Not asked for at the front desk. Women-only bathing times available at select properties.',
                icon: '♨️',
              },
              {
                title: 'Ramadan Programs',
                text: 'Adjusted dining times for Suhoor and Iftar, identification of pre-dawn meal options, prayer break awareness built into every day of the itinerary.',
                icon: '🌙',
              },
              {
                title: 'Arabic-Speaking Guides',
                text: 'Available in Tokyo, Kyoto, and Osaka. Guides who genuinely understand Gulf culture — not just Arabic speakers, but culturally aware professionals.',
                icon: '🗣️',
              },
              {
                title: 'Airport Halal Meals',
                text: 'We confirm halal dining options at arrival and departure airports, so the halal journey starts and ends correctly — not just in the cities.',
                icon: '✈️',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-7 border border-black/5 hover:border-gold/20 transition-colors duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-[14px] font-semibold text-navy mb-3 leading-snug">{item.title}</h3>
                <p className="text-[13px] text-muted leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JAPAN SEASONS ────────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Seasonal Expertise</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-white leading-[1.05]">
              Japan across all<br />four seasons.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-[3px]">
            {JAPAN_EXPERTISE.map((item) => (
              <div key={item.season} className="group relative overflow-hidden" style={{ minHeight: '420px' }}>
                <Image src={item.img} alt={item.season} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-2">{item.season}</div>
                  <h3 className="font-fraunces text-2xl font-light italic text-white mb-3">{item.title}</h3>
                  <p className="text-[13px] text-white/55 leading-7 mb-4 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">{item.text}</p>
                  <div className="text-[11px] text-gold/70 leading-5">
                    <span className="text-gold/40 mr-2">›</span>{item.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOKYO IN DEPTH ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Destination Deep-Dive</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
              Tokyo in depth.
            </h2>
            <p className="text-[14px] text-muted leading-7 mt-4 max-w-xl">
              Japan&apos;s capital holds everything — ancient temples, luxury shopping, world-class food, Disney, teamLab. We know which neighborhoods work for different clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]" style={{ height: '50vh', minHeight: '340px' }}>
            {TOKYO_SPOTS.map((spot) => (
              <div key={spot.name} className="group relative overflow-hidden">
                <Image src={spot.img} alt={spot.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="font-fraunces text-base italic text-white">{spot.name}</div>
                  <div className="font-jp text-white/30 text-xs">{spot.jp}</div>
                  <p className="text-[10px] text-white/40 leading-4 mt-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-400">
                    {spot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KYOTO IN DEPTH ────────────────────────────────── */}
      <section className="py-0 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12">
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
              Kyoto in depth.
            </h2>
            <p className="text-[14px] text-muted leading-7 mt-4 max-w-xl">
              Japan&apos;s cultural capital — 1,600 Buddhist temples, a thousand years of imperial history, and experiences found nowhere else on earth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]" style={{ height: '50vh', minHeight: '340px' }}>
            {KYOTO_SPOTS.map((spot) => (
              <div key={spot.name} className="group relative overflow-hidden">
                <Image src={spot.img} alt={spot.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="font-fraunces text-base italic text-white">{spot.name}</div>
                  <div className="font-jp text-white/30 text-xs">{spot.jp}</div>
                  <p className="text-[10px] text-white/40 leading-4 mt-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-400">
                    {spot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <div className="bg-gold py-14">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-fraunces text-3xl font-light text-white mb-2">
              Ready to build a Japan program?
            </h3>
            <p className="text-[13px] text-white/70 leading-7 max-w-lg">
              Send us your client&apos;s brief — destination, dates, group size, halal requirements. We&apos;ll send back a full proposal within 24 hours.
            </p>
          </div>
          <a
            href={WA}
            target="_blank" rel="noopener"
            className="shrink-0 inline-flex items-center gap-2.5 bg-white text-gold hover:bg-white/90 text-[12px] font-semibold tracking-[0.08em] uppercase px-8 py-4 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send a Brief
          </a>
        </div>
      </div>

      {/* ── RELATED LINKS ────────────────────────────────── */}
      <div className="py-10 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-wrap gap-6">
          <Link href="/destinations" className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200">
            View All Destinations →
          </Link>
          <Link href="/halal" className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200">
            Halal Restaurant Guide →
          </Link>
          <Link href="/sample" className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200">
            Sample Itinerary →
          </Link>
        </div>
      </div>
    </>
  )
}
