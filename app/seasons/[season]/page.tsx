import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const WA = 'https://wa.me/971509509781?text=Hello%2C%20I%27m%20a%20travel%20agent%20and%20I%27d%20like%20to%20enquire%20about%20a%20Japan%20program.'

const SEASON_DATA = {
  spring: {
    name: 'Spring',
    jp: '春',
    period: 'March — May',
    icon: '🌸',
    img: '/images/season-spring.jpg',
    color: 'from-pink-950/80',
    headline: 'Cherry Blossoms & New Beginnings',
    intro: 'Japan\'s spring is the most sought-after travel season on earth. For 2–3 weeks from late March, the entire country transforms under a canopy of sakura — pink clouds of cherry blossoms lining rivers, filling parks, and framing every temple and castle.',
    why: 'Hanami (flower viewing) is a deeply rooted cultural tradition. Parks fill with families, friends, and visitors gathered under the blossoms. The light is soft, the air is cool, and Japan is at its most photogenic.',
    bestFor: ['Families with children', 'Couples & honeymoons', 'First-time Japan visitors', 'Photography travelers'],
    tips: [
      'Peak sakura lasts only 7–10 days — flexibility in dates is essential',
      'Book hotels minimum 3–4 months in advance for peak season',
      'Kyoto\'s Philosopher\'s Path and Maruyama Park: iconic sakura spots',
      'Tokyo\'s Shinjuku Gyoen and Chidorigafuchi: best city options',
      'Hirosaki Castle (Aomori) for late sakura with fewer crowds',
    ],
    packages: [
      {
        name: 'Classic Sakura — 7 Nights',
        route: 'Tokyo → Hakone → Kyoto → Osaka',
        price: 'From USD 6,000 / person',
        highlights: ['Shinjuku Gyoen Hanami picnic', 'Hakone Mt. Fuji sakura view', 'Philosopher\'s Path Kyoto', 'Private ryokan with sakura garden', 'Halal-certified meals throughout'],
        tag: 'Most Popular',
      },
      {
        name: 'Deep Kyoto Spring — 5 Nights',
        route: 'Osaka → Kyoto → Nara',
        price: 'From USD 4,500 / person',
        highlights: ['Fushimi Inari at sunrise', 'Maruyama Park Hanami', 'Nara deer park in bloom', 'Tea ceremony in private garden', 'Halal kaiseki dinner'],
        tag: 'Cultural Focus',
      },
      {
        name: 'Family Sakura Grand Tour — 10 Nights',
        route: 'Tokyo → Kyoto → Osaka → Hokkaido',
        price: 'From USD 9,500 / person',
        highlights: ['Tokyo DisneySea', 'Shinkansen (bullet train) experience', 'Late sakura in Hokkaido (late April)', 'TeamLab digital art', 'All halal dining arranged'],
        tag: 'Family Special',
      },
    ],
    destinations: ['Kyoto', 'Tokyo', 'Hakone', 'Osaka', 'Hokkaido (late April)'],
    img2: '/images/areas/kyoto-arashiyama.jpg',
    img3: '/images/areas/kyoto-fushimi.jpg',
  },

  summer: {
    name: 'Summer',
    jp: '夏',
    period: 'June — August',
    icon: '🌊',
    img: '/images/season-summer.jpg',
    color: 'from-blue-950/80',
    headline: 'Crystal Beaches & Vivid Festivals',
    intro: 'Japan\'s summer is two completely different experiences. In the cities and mountains, it\'s the festival season — thousands of matsuri (traditional festivals) with fireworks, taiko drums, and yukata. In Okinawa, it\'s the Maldives of East Asia: turquoise water, coral reefs, and white sand beaches.',
    why: 'Okinawa\'s Kerama Islands have water visibility over 30 meters — among the clearest in the world. For families, summer means festivals, fireworks, and DisneySea at its most vibrant.',
    bestFor: ['Beach lovers', 'Families with school-age children', 'Festival enthusiasts', 'Diving & snorkeling'],
    tips: [
      'Okinawa best visited June–September for warmest water temperatures',
      'Book Okinawa resorts early — GCC family groups fill properties fast',
      'July: Gion Matsuri in Kyoto (Japan\'s largest festival)',
      'August: Sumida River fireworks, Awa Odori dance festival',
      'Avoid peak Obon week (mid-August) for transport bookings',
    ],
    packages: [
      {
        name: 'Okinawa Beach Escape — 7 Nights',
        route: 'Naha → Kerama Islands → Ishigaki',
        price: 'From USD 5,500 / person',
        highlights: ['Kerama Islands snorkeling (30m visibility)', 'Ishigaki private beach villa', 'Churaumi Aquarium', 'Shuri Castle culture day', 'All halal meals arranged at resort'],
        tag: 'Most Popular',
      },
      {
        name: 'Japan Festival Summer — 8 Nights',
        route: 'Tokyo → Kyoto → Osaka',
        price: 'From USD 6,500 / person',
        highlights: ['Gion Matsuri festival (July)', 'Sumida River fireworks', 'Private yukata styling', 'TeamLab summer exhibition', 'Halal-certified dining throughout'],
        tag: 'Cultural Focus',
      },
      {
        name: 'Okinawa + Kyoto Family — 10 Nights',
        route: 'Tokyo → Okinawa → Kyoto → Osaka',
        price: 'From USD 9,000 / person',
        highlights: ['Tokyo DisneySea', 'Okinawa beach resort 4 nights', 'Arashiyama bamboo grove', 'Private tea ceremony', 'All halal meals arranged'],
        tag: 'Family Special',
      },
    ],
    destinations: ['Okinawa', 'Tokyo', 'Kyoto', 'Osaka'],
    img2: '/images/areas/okinawa-beach.jpg',
    img3: '/images/areas/okinawa-aquarium.jpg',
  },

  autumn: {
    name: 'Autumn',
    jp: '秋',
    period: 'September — November',
    icon: '🍁',
    img: '/images/season-autumn.jpg',
    color: 'from-orange-950/80',
    headline: 'Koyo — Red Maple Season',
    intro: 'Japan\'s autumn foliage (koyo) rivals the sakura in sheer beauty — and surpasses it in photography. From mid-October through November, ancient temples are framed in deep crimson, copper orange, and vivid gold. The light is extraordinary. The crowds are smaller than spring.',
    why: 'Kyoto\'s 1,600 temples become otherworldly in autumn. Tofuku-ji\'s maple canopy, Kinkaku-ji reflected in a sea of red, and Arashiyama\'s bamboo edged in orange. Nikko\'s mountain shrines are even more dramatic.',
    bestFor: ['Photography enthusiasts', 'Couples', 'Culture seekers', 'Repeat Japan visitors'],
    tips: [
      'Koyo peak in Kyoto: typically mid to late November',
      'Hokkaido autumn peaks earlier — September to mid-October',
      'Nikko is spectacular in late October — day trip from Tokyo',
      'Crowds smaller than sakura season — hotels easier to book',
      'Cool, dry weather — ideal walking conditions',
    ],
    packages: [
      {
        name: 'Kyoto Autumn Classic — 7 Nights',
        route: 'Osaka → Kyoto → Nara → Tokyo',
        price: 'From USD 6,500 / person',
        highlights: ['Tofuku-ji maple canopy at dawn', 'Kinkaku-ji golden pavilion', 'Nara in autumn foliage', 'Private ryokan with koyo garden', 'Halal kaiseki dinner'],
        tag: 'Most Popular',
      },
      {
        name: 'Photography Autumn — 8 Nights',
        route: 'Tokyo → Nikko → Kyoto → Osaka',
        price: 'From USD 7,000 / person',
        highlights: ['Nikko Toshogu in full koyo', 'Philosopher\'s Path Kyoto', 'Arashiyama at golden hour', 'Fushimi Inari at sunrise', 'Private guide with photography knowledge'],
        tag: 'Photography Special',
      },
      {
        name: 'Hokkaido + Kyoto Autumn — 10 Nights',
        route: 'Hokkaido → Tokyo → Kyoto → Osaka',
        price: 'From USD 9,500 / person',
        highlights: ['Daisetsuzan autumn (earliest Japan koyo)', 'Furano in autumn colors', 'Otaru canal', 'Full Kyoto koyo circuit', 'All halal dining arranged'],
        tag: 'Extended Journey',
      },
    ],
    destinations: ['Kyoto', 'Nikko', 'Hokkaido', 'Nara', 'Tokyo'],
    img2: '/images/areas/kyoto-kinkakuji.jpg',
    img3: '/images/areas/kyoto-gion.jpg',
  },

  winter: {
    name: 'Winter',
    jp: '冬',
    period: 'December — February',
    icon: '❄️',
    img: '/images/season-winter.jpg',
    color: 'from-slate-950/80',
    headline: 'Powder Snow & Onsen Under the Stars',
    intro: 'Japan\'s winter is dramatic and deeply beautiful — and almost entirely uncrowded by international visitors. Niseko receives some of the world\'s best powder snow (JAPOWder). The Sapporo Snow Festival turns Hokkaido\'s capital into an ice sculpture gallery. And across the country, onsen (hot spring) bathing in falling snow is a uniquely Japanese experience.',
    why: 'GCC travelers who ski find Niseko\'s halal-certified lodges and Muslim-friendly facilities exceptional. Families with children experience snow for the first time. And Tokyo in winter has no queues, no heat, and all the magic.',
    bestFor: ['Skiing & snowboarding enthusiasts', 'Snow-first-timers (GCC families)', 'Luxury onsen seekers', 'Those avoiding summer crowds'],
    tips: [
      'Niseko best snow: January–February (deepest powder)',
      'Sapporo Snow Festival: first two weeks of February',
      'Book Niseko ski lodges 4–6 months in advance for peak weeks',
      'Private onsen suites available year-round — winter is peak season',
      'Tokyo winter: clear skies, no crowds, lower hotel prices',
    ],
    packages: [
      {
        name: 'Niseko Ski & Onsen — 7 Nights',
        route: 'Sapporo → Niseko → Jozankei',
        price: 'From USD 8,000 / person',
        highlights: ['Niseko Grand Hirafu powder skiing', 'Private onsen suite with mountain views', 'Halal-certified ski lodge meals', 'Snowmobile & ice fishing', 'Sapporo city day trip'],
        tag: 'Most Popular',
      },
      {
        name: 'Snow Festival & Culture — 8 Nights',
        route: 'Tokyo → Sapporo → Kyoto',
        price: 'From USD 7,500 / person',
        highlights: ['Sapporo Snow Festival (February only)', 'Otaru canal illumination', 'Kyoto temples in winter snow', 'Private ryokan with rotenburo (outdoor onsen)', 'All halal meals arranged'],
        tag: 'Festival Special',
      },
      {
        name: 'Family Snow Adventure — 10 Nights',
        route: 'Tokyo → Hokkaido → Kyoto → Osaka',
        price: 'From USD 10,000 / person',
        highlights: ['Tokyo DisneySea (winter lights)', 'Hokkaido snow activities for children', 'Asahiyama Zoo (world-famous winter penguins)', 'Kyoto private culture day', 'All halal meals arranged'],
        tag: 'Family Special',
      },
    ],
    destinations: ['Hokkaido (Niseko)', 'Sapporo', 'Tokyo', 'Kyoto'],
    img2: '/images/areas/hokkaido-niseko.jpg',
    img3: '/images/areas/hokkaido-sapporo.jpg',
  },
}

export function generateStaticParams() {
  return Object.keys(SEASON_DATA).map((season) => ({ season }))
}

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }) {
  const { season } = await params
  const data = SEASON_DATA[season as keyof typeof SEASON_DATA]
  if (!data) return {}
  return {
    title: `${data.name} in Japan — KIZUNA Journey`,
    description: `${data.headline}. Best Japan travel programs for ${data.name.toLowerCase()} — ${data.period}.`,
  }
}

export default async function SeasonPage({ params }: { params: Promise<{ season: string }> }) {
  const { season } = await params
  const data = SEASON_DATA[season as keyof typeof SEASON_DATA]
  if (!data) notFound()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <Image src={data.img} alt={data.name} fill priority className="object-cover object-center" />
        <div className={`absolute inset-0 bg-gradient-to-b ${data.color} via-black/30 to-black/80`} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-20 w-full">
          <div className="inline-flex items-center gap-2 border border-gold/35 bg-gold/10 text-gold text-[9px] tracking-[0.25em] uppercase px-4 py-2 mb-7">
            {data.period}
          </div>
          <div className="text-5xl mb-4">{data.icon}</div>
          <h1 className="font-fraunces text-5xl md:text-7xl font-light text-white leading-[0.9] mb-5 max-w-3xl">
            {data.headline}
          </h1>
          <p className="text-white/55 text-base leading-relaxed max-w-xl mb-8">
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`${WA.replace('program.', '')}${data.name}%20package.`}
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1cb956] text-white text-[11px] font-semibold tracking-[0.1em] uppercase px-7 py-4 transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire about {data.name} Package
            </a>
            <Link href="/seasons" className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-white/60 text-[11px] font-medium tracking-[0.1em] uppercase px-7 py-4 transition-all duration-200">
              ← All Seasons
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY THIS SEASON ──────────────────────────────── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Why {data.name}</div>
              <h2 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-[1.1] mb-6">
                What makes {data.name.toLowerCase()} special in Japan.
              </h2>
              <p className="text-[14px] text-muted leading-8 mb-8">{data.why}</p>
              <div className="mb-8">
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Best For</div>
                <div className="flex flex-wrap gap-2">
                  {data.bestFor.map((b) => (
                    <span key={b} className="text-[12px] text-navy/60 bg-white border border-black/8 px-4 py-2">{b}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Expert Tips</div>
                <ul className="flex flex-col gap-3">
                  {data.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-[13px] text-muted leading-6">
                      <span className="text-gold mt-0.5 shrink-0">›</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={data.img2} alt={data.name} fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={data.img3} alt={data.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Recommended Programs</div>
          <h2 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-[1.1] mb-12">
            {data.name} packages — ready to quote.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.packages.map((pkg) => (
              <div key={pkg.name} className="border border-black/6 hover:border-gold/30 transition-colors duration-300 relative">
                {pkg.tag && (
                  <div className="absolute top-4 right-4 text-[9px] tracking-[0.15em] uppercase text-gold border border-gold/30 px-2 py-1">
                    {pkg.tag}
                  </div>
                )}
                <div className="p-8">
                  <div className="font-fraunces text-xl font-light text-navy italic mb-2">{pkg.name}</div>
                  <div className="text-[11px] tracking-[0.08em] text-muted mb-1">{pkg.route}</div>
                  <div className="text-[13px] font-semibold text-gold mb-6">{pkg.price}</div>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[12px] text-muted leading-5">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2" className="mt-0.5 shrink-0">
                          <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WA.replace('program.', '')}${pkg.name}%20package.`}
                    target="_blank" rel="noopener"
                    className="block text-center border border-navy/15 hover:border-gold hover:text-gold text-navy/60 text-[11px] tracking-[0.1em] uppercase px-5 py-3 transition-all duration-200"
                  >
                    Enquire About This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-off-white border-l-2 border-gold">
            <p className="text-[13px] text-muted leading-7">
              <strong className="text-navy">All prices are wholesale rates for travel agencies.</strong> Final pricing depends on travel dates, hotel selection, group size, and specific requirements. Send us your client&apos;s brief and we&apos;ll quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── BEST DESTINATIONS ────────────────────────────── */}
      <section className="py-16 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Best Destinations This Season</div>
          <div className="flex flex-wrap gap-3">
            {data.destinations.map((dest) => (
              <span key={dest} className="text-[12px] font-medium text-white border border-white/20 px-5 py-2.5">
                {dest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <div className="bg-gold py-14">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-fraunces text-3xl font-light text-white mb-2">
              Ready to book a {data.name} program?
            </h3>
            <p className="text-[13px] text-white/70 leading-7 max-w-lg">
              Send us your client&apos;s brief — we&apos;ll come back with a full itinerary and wholesale pricing within 24 hours.
            </p>
          </div>
          <a
            href={WA}
            target="_blank" rel="noopener"
            className="shrink-0 inline-flex items-center gap-2.5 bg-white text-gold hover:bg-white/90 text-[12px] font-semibold tracking-[0.08em] uppercase px-8 py-4 transition-colors duration-200"
          >
            Send a Brief on WhatsApp
          </a>
        </div>
      </div>

      {/* ── OTHER SEASONS ────────────────────────────────── */}
      <div className="py-10 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-wrap items-center gap-6">
          <span className="text-[11px] tracking-[0.12em] uppercase text-muted">Other seasons:</span>
          {(['spring', 'summer', 'autumn', 'winter'] as const).filter(s => s !== season).map((s) => (
            <Link key={s} href={`/seasons/${s}`} className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200 capitalize">
              {s} →
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
