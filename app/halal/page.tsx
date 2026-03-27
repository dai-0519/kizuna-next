import Image from 'next/image'

export const metadata = {
  title: 'Halal Japan Guide — KIZUNA Journey',
  description:
    "Verified halal restaurants across Tokyo, Kyoto, Osaka and beyond. KIZUNA Journey's complete halal Japan guide for Muslim travelers.",
}

/* ── DATA ──────────────────────────────────────────────────── */

const RESTAURANTS = [
  {
    city: 'Tokyo',
    subtitle: '東京',
    items: [
      {
        name: 'Naritaya（成田屋）',
        area: 'Asakusa',
        address: '2-7-13 Asakusa, Taito-ku',
        cuisine: 'Halal Ramen',
        cert: 'Japan Islamic Trust',
        desc: "Japan's most famous halal ramen restaurant, serving Muslim travelers since 2014. Rich tonkotsu-style broth made fully halal, wagyu beef toppings. Prayer mats and Qibla direction available on request.",
        note: 'Prayer room on premises',
        img: '/images/halal/restaurants/naritaya.jpg',
      },
      {
        name: 'Gyumon（牛門）',
        area: 'Shibuya · Asakusa · Ikebukuro',
        address: 'Multiple Tokyo locations',
        cuisine: 'Halal Wagyu Yakiniku',
        cert: 'Halal Foundation Japan',
        desc: "Tokyo's original halal wagyu BBQ restaurant. A5 Kuroge Wagyu on charcoal grills — Gyumon pioneered the halal yakiniku category in Japan and remains the gold standard for Muslim diners.",
        note: 'Multiple locations across Tokyo',
        img: '/images/halal/restaurants/gyumon.jpg',
      },
      {
        name: 'Asakusa Sushi Ken',
        area: 'Asakusa',
        address: '2-11-4 Asakusa, Taito-ku',
        cuisine: 'Halal Sushi',
        cert: 'Japan Halal Association',
        desc: "Japan's first halal-certified sushi restaurant. Halal-certified fish sourcing and alcohol-free rice vinegar — the full traditional sushi experience, without compromise.",
        note: "Japan's first halal sushi",
        img: '/images/halal/restaurants/sushi-ken.jpg',
      },
      {
        name: 'Ayam-Ya（アヤム屋）',
        area: 'Shin-Okachimachi',
        address: 'Ueno / Asakusa area',
        cuisine: 'Halal Chicken Ramen',
        cert: 'Japan Halal Foundation & JAKIM',
        desc: 'Certified by both Japanese and Malaysian halal authorities. Signature chicken broth with no pork or alcohol at any stage. Wudu (ablution) facilities available at all branches.',
        note: 'Dual-certified: Japan & Malaysia',
        img: '/images/halal/restaurants/ayam-ya.jpg',
      },
      {
        name: 'Halal Shinjuku-tei',
        area: 'Shinjuku',
        address: 'Shinjuku, Tokyo',
        cuisine: 'Halal Wagyu Ramen',
        cert: 'Halal certified',
        desc: 'Halal wagyu ramen in the heart of Shinjuku — rich beef bone broth, tender wagyu slices, traditional toppings. Popular with business travelers in the Shinjuku hotel district.',
        note: 'Central Shinjuku',
        img: '/images/halal/restaurants/shinjuku-tei.jpg',
      },
    ],
  },
  {
    city: 'Kyoto',
    subtitle: '京都',
    items: [
      {
        name: 'Halal Wagyu Sukiyaki ZEN',
        area: 'Nakagyo Ward',
        address: '406 Shimomaruyacho, Nakagyo Ward',
        cuisine: 'Halal Wagyu Sukiyaki',
        cert: 'Halal certified',
        desc: "Kyoto's premier halal wagyu restaurant — A5 wagyu in traditional sukiyaki and teppanyaki formats. Kaiseki-influenced presentation makes this the standout choice for Muslim guests seeking the full Kyoto luxury dining experience.",
        note: 'Kaiseki-style presentation',
        img: '/images/halal/restaurants/zen-kyoto.jpg',
      },
      {
        name: 'Ayam-Ya Karasuma Kyoto',
        area: 'Nakagyo Ward',
        address: '454 Kannondocho, Nakagyo Ward',
        cuisine: 'Halal Chicken Ramen',
        cert: 'Japan Halal Foundation & JAKIM',
        desc: 'The Kyoto branch of Ayam-Ya — same dual-certified halal standard as Tokyo. Located near Karasuma Street, making it a natural lunch stop between Nijo Castle and Nishiki Market.',
        note: 'Near Nishiki Market',
        img: '/images/halal/restaurants/ayam-ya.jpg',
      },
      {
        name: 'A5 Wagyu PANGA Gion-Shijo',
        area: 'Gion / Higashiyama',
        address: '206 Nakanocho, Higashiyama Ward',
        cuisine: 'Halal A5 Wagyu',
        cert: 'Halal certified',
        desc: "Halal A5 wagyu in Kyoto's most atmospheric district — steps from the Gion geisha quarter. PANGA specialises in high-grade wagyu cuts, grilled and teppanyaki-style, in a refined Japanese interior.",
        note: 'In Gion district',
        img: '/images/halal/restaurants/panga-kyoto.jpg',
      },
    ],
  },
  {
    city: 'Osaka',
    subtitle: '大阪',
    featured: {
      name: 'Halal Kobe Beef Nagomi',
      area: 'Nipponbashi',
      address: '2-12-21 Nipponbashi, Chuo-ku, Osaka',
      cuisine: 'Halal Kobe Beef',
      cert: 'CrescentRating AAA',
      desc: "The world's only CrescentRating AAA-certified Kobe beef restaurant. Nagomi serves authenticated Kobe beef — one of Japan's most exclusive brands — in a fully halal environment. A non-negotiable stop for serious food travelers.",
      note: "World's only halal Kobe beef · CrescentRating AAA",
      img: '/images/halal/restaurants/nagomi-osaka.jpg',
    },
    items: [
      {
        name: 'Gyumon（牛門）Osaka',
        area: 'Namba / Dotonbori',
        address: 'Chuo-ku, Osaka',
        cuisine: 'Halal Wagyu Yakiniku',
        cert: 'Halal Foundation Japan',
        desc: "Tokyo's beloved halal wagyu chain comes to Japan's food capital. Near Dotonbori, Gyumon Osaka delivers A5 Kuroge Wagyu charcoal BBQ to Muslim diners in Osaka's entertainment district.",
        note: 'Near Dotonbori',
        img: '/images/halal/restaurants/gyumon.jpg',
      },
      {
        name: "MOMO's Cafe & Restaurant",
        area: 'Shinsaibashi',
        address: '2-3-31 Shinsaibashisuji, Chuo Ward',
        cuisine: 'Halal International',
        cert: 'Halal certified',
        desc: "Halal international café in the heart of Shinsaibashi shopping district. Japanese, Asian, and Western dishes — popular with families and travelers who want variety in a halal-safe environment.",
        note: 'Family-friendly · diverse menu',
        img: '/images/halal/restaurants/momos-osaka.jpg',
      },
    ],
  },
  {
    city: 'Hokkaido',
    subtitle: '北海道',
    items: [
      {
        name: 'Shinjuku-tei Sapporo',
        area: 'Sapporo',
        address: 'Sapporo, Hokkaido',
        cuisine: 'Halal Wagyu Ramen',
        cert: 'Halal certified',
        desc: "Sapporo's halal wagyu ramen specialist — Hokkaido-style miso and salt broths made fully halal, topped with wagyu. A warming bowl after Niseko slopes or Odori Park.",
        note: 'Miso & shio broth options',
        img: '/images/halal/restaurants/shinjuku-tei.jpg',
      },
      {
        name: 'Warung Jawa Sapporo',
        area: 'Sapporo',
        address: 'Sapporo, Hokkaido',
        cuisine: 'Indonesian Halal',
        cert: 'Halal certified',
        desc: 'Indonesian halal restaurant in Sapporo — familiar halal flavors in an unfamiliar city. A welcoming spot for Muslim tourists, with staff experienced with halal dietary requirements.',
        note: 'Popular with Muslim community',
        img: null,
      },
    ],
  },
]

const CHECKLIST = [
  { label: 'Certification body', detail: 'JIT · Japan Halal Foundation · CrescentRating · JAKIM' },
  { label: 'No alcohol in cooking', detail: 'Mirin, sake, and cooking wine all eliminated' },
  { label: 'No cross-contamination', detail: 'Dedicated halal kitchen or strict utensil protocols' },
  { label: 'Utensil separation', detail: 'Halal-only cookware, never shared with pork dishes' },
  { label: 'Staff awareness', detail: 'Management trained on halal requirements' },
]

const FACILITIES = [
  {
    title: 'Tokyo Camii & Mosque',
    desc: 'The largest mosque in Japan, Ottoman-style in Yoyogi-Uehara. Open to Muslim visitors daily with full prayer hall.',
    city: 'Tokyo',
  },
  {
    title: 'Prayer Rooms at Major Hubs',
    desc: 'Confirmed at Shibuya Hikarie, Roppongi Hills, Narita Airport, Haneda Airport, and all major shinkansen stations.',
    city: 'All Cities',
  },
  {
    title: 'Qibla Direction at Every Hotel',
    desc: 'KIZUNA confirms Qibla direction, prayer schedules, and nearest mosque for every hotel before your clients check in.',
    city: 'All Destinations',
  },
  {
    title: 'Private Onsen Suites',
    desc: '20+ Hakone ryokan with private outdoor onsen suites — reserved exclusively for your group. Zero shared bathing.',
    city: 'Hakone',
  },
]

/* ── COMPONENTS ─────────────────────────────────────────────── */

function RestaurantCard({ r }: { r: typeof RESTAURANTS[0]['items'][0] }) {
  return (
    <div className="bg-white border border-black/6 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      {r.img && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={r.img}
            alt={r.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[9px] tracking-[0.14em] uppercase bg-navy/75 backdrop-blur-sm text-gold px-2.5 py-1.5 font-medium">
              {r.cuisine}
            </span>
          </div>
        </div>
      )}
      <div className={r.img ? 'p-6' : 'p-7 border-l-2 border-gold/40'}>
        {!r.img && (
          <div className="text-[9px] tracking-[0.14em] uppercase text-gold/70 mb-3 font-medium">
            {r.cuisine}
          </div>
        )}
        <h3 className="font-fraunces text-[20px] font-light text-navy leading-snug mb-3">
          {r.name}
        </h3>
        <p className="text-[13px] text-muted leading-7 mb-5">{r.desc}</p>
        <div className="pt-4 border-t border-black/6 space-y-2">
          <div className="flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5">
              <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] text-gold font-medium">{r.cert}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="text-[11px] text-muted">{r.area} · {r.address}</span>
          </div>
          <div className="pt-1 pl-0.5">
            <span className="text-[11px] text-navy/50 italic">{r.note}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── PAGE ───────────────────────────────────────────────────── */

export default function HalalPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <Image
          src="/images/halal/hero-halal.jpg"
          alt="Tokyo Camii mosque Japan"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/10" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-24 w-full">
          <div className="text-gold/80 text-[11px] tracking-[0.25em] uppercase mb-5">
            Halal Japan Guide
          </div>
          <h1 className="font-fraunces text-7xl md:text-[96px] font-light text-white leading-none mb-6">
            Japan,<br />
            <span className="text-gold">fully halal.</span>
          </h1>
          <p className="text-[16px] text-white/50 max-w-lg leading-relaxed">
            Verified halal restaurants, prayer rooms, and Muslim-friendly hotels —
            confirmed by KIZUNA, not just listed.
          </p>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <div className="bg-navy border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { n: '500+', label: 'Verified Restaurants', sub: 'Across 6 destinations' },
              { n: '4', label: 'Cert Bodies', sub: 'JIT · HFJ · CrescentRating · JAKIM' },
              { n: '100%', label: 'Personally Verified', sub: 'Not "no pork on the menu"' },
              { n: '24h', label: 'Halal Proposals', sub: 'From brief to full itinerary' },
            ].map((s) => (
              <div key={s.n} className="py-8 px-6 first:pl-0">
                <div className="font-fraunces text-3xl font-light text-gold mb-1">{s.n}</div>
                <div className="text-[11px] font-semibold text-white tracking-wide mb-0.5">{s.label}</div>
                <div className="text-[10px] text-white/35 leading-4">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRUST ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
                Why Trust KIZUNA on Halal
              </div>
              <h2 className="font-fraunces text-5xl font-light text-navy leading-[1.05] mb-7">
                We operate a halal<br />restaurant in Dubai.<br />
                <span className="text-navy/35">We know the difference.</span>
              </h2>
              <p className="text-[14px] text-muted leading-8 mb-5">
                KIZUNA's founder runs{' '}
                <strong className="text-navy font-semibold">rayu</strong> — a halal Japanese
                restaurant in Dubai's Jumeirah 1. That experience means we don't just
                read certification documents. We understand what truly halal-certified
                requires, and we hold every restaurant we recommend to the same standard.
              </p>
              <p className="text-[13px] text-muted leading-7 mb-8 italic">
                "No pork on the menu" is not halal. We check five criteria for every
                restaurant in our database:
              </p>
              <ul className="flex flex-col gap-3.5">
                {CHECKLIST.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="w-5 h-5 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5">
                        <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[13px] font-semibold text-navy">{c.label}</span>
                      <span className="text-[13px] text-muted"> — {c.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/halal/restaurants/naritaya.jpg"
                alt="Naritaya halal ramen Asakusa"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/85 to-transparent p-6">
                <div className="text-[9px] tracking-[0.16em] uppercase text-gold/60 mb-1">Featured</div>
                <div className="text-white font-semibold text-[14px]">Naritaya 成田屋, Asakusa</div>
                <div className="text-white/45 text-[11px]">Japan Islamic Trust · Halal since 2014</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTAURANTS BY CITY ──────────────────────────────── */}
      {RESTAURANTS.map((city, ci) => (
        <section key={city.city} className={`py-24 ${ci % 2 === 0 ? 'bg-off-white' : 'bg-white'}`}>
          <div className="max-w-[1200px] mx-auto px-8">
            {/* City header */}
            <div className="flex items-end gap-5 mb-14 pb-5 border-b border-black/8">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                  Verified Restaurants
                </div>
                <h2 className="font-fraunces text-5xl font-light text-navy leading-none">
                  {city.city}
                  <span className="text-navy/25 text-3xl ml-3">{city.subtitle}</span>
                </h2>
              </div>
              <div className="mb-1.5 text-[10px] tracking-[0.1em] uppercase text-muted border border-black/10 px-3 py-1.5">
                {((city.featured ? 1 : 0) + city.items.length)} verified
              </div>
            </div>

            {/* Osaka featured card */}
            {'featured' in city && city.featured && (
              <div className="mb-8 bg-navy-dark overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Image
                      src={city.featured.img}
                      alt={city.featured.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[9px] tracking-[0.14em] uppercase border border-gold/40 text-gold px-2.5 py-1.5">
                        {city.featured.cuisine}
                      </span>
                      <span className="text-[9px] tracking-[0.1em] uppercase bg-gold/15 text-gold px-2.5 py-1.5">
                        World First
                      </span>
                    </div>
                    <h3 className="font-fraunces text-[28px] font-light text-white leading-tight mb-4">
                      {city.featured.name}
                    </h3>
                    <p className="text-[13px] text-white/55 leading-7 mb-6">{city.featured.desc}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5">
                          <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[11px] text-gold font-medium">{city.featured.cert}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                        <span className="text-[11px] text-white/40">{city.featured.area} · {city.featured.address}</span>
                      </div>
                      <div className="pt-2 mt-2 border-t border-white/10">
                        <span className="text-[11px] text-white/35 italic">{city.featured.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Restaurant grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {city.items.map((r) => (
                <RestaurantCard key={r.name} r={r} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── WAGYU FEATURE STRIP ──────────────────────────────── */}
      <section className="relative h-72 overflow-hidden">
        <Image
          src="/images/halal/wagyu-food.jpg"
          alt="A5 wagyu beef Japan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-8 flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-3">Halal & Premium</div>
            <div className="font-fraunces text-4xl font-light text-white">
              A5 Wagyu. Halal certified.
            </div>
            <div className="text-[14px] text-white/45 mt-2">Available at KIZUNA-verified restaurants in every city.</div>
          </div>
        </div>
      </section>

      {/* ── PRAYER & FACILITIES ──────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            Muslim Facilities
          </div>
          <h2 className="font-fraunces text-5xl font-light text-white mb-14">
            Prayer & facilities<br />
            <span className="text-white/25">every destination.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {FACILITIES.map((f) => (
              <div key={f.title} className="bg-navy-dark p-8 hover:bg-white/[0.03] transition-colors duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-[14px] font-semibold text-white">{f.title}</h3>
                  <span className="text-[9px] tracking-[0.1em] uppercase border border-white/12 text-white/35 px-2 py-0.5 shrink-0">
                    {f.city}
                  </span>
                </div>
                <p className="text-[13px] text-white/40 leading-7">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 relative h-52 overflow-hidden">
            <Image
              src="/images/halal/prayer-room.jpg"
              alt="Prayer room Japan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-dark/65" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-8">
              <div>
                <div className="font-fraunces text-3xl text-white mb-2">
                  Prayer rooms confirmed at every hotel.
                </div>
                <p className="text-[13px] text-white/45">
                  Qibla direction, prayer schedule, and nearest mosque — sent before check-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPLIT: MOSQUE + RESTAURANT ───────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[50vh]">
        <div className="relative overflow-hidden min-h-[320px]">
          <Image
            src="/images/halal/mosque-tokyo.jpg"
            alt="Tokyo Camii mosque"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="text-[10px] tracking-[0.18em] uppercase text-white/45 mb-2">Tokyo</div>
            <div className="font-fraunces text-2xl text-white mb-1">Tokyo Camii</div>
            <div className="text-[12px] text-white/40">Largest mosque in Japan · Yoyogi-Uehara</div>
          </div>
        </div>
        <div className="relative overflow-hidden min-h-[320px]">
          <Image
            src="/images/halal/restaurants/nagomi-osaka.jpg"
            alt="Halal Kobe Beef Nagomi Osaka"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="text-[10px] tracking-[0.18em] uppercase text-white/45 mb-2">Nipponbashi, Osaka</div>
            <div className="font-fraunces text-2xl text-white mb-1">Halal Kobe Beef Nagomi</div>
            <div className="text-[12px] text-white/40">World&apos;s only CrescentRating AAA halal Kobe beef</div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gold">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-3">
              For Travel Agents
            </div>
            <h3 className="font-fraunces text-4xl font-light text-white mb-3">
              Ready to send Muslim clients to Japan?
            </h3>
            <p className="text-[14px] text-white/65 leading-7 max-w-xl">
              Send us your brief — destination, travel dates, group size, and any specific
              halal requirements. We return a fully verified itinerary, hotel by hotel,
              meal by meal, within 24 hours.
            </p>
          </div>
          <a
            href="https://wa.me/971509509781?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20halal%20Japan%20programs%20for%20my%20Muslim%20clients."
            target="_blank"
            rel="noopener"
            className="shrink-0 inline-flex items-center gap-3 bg-white text-gold hover:bg-white/90 text-[12px] font-semibold tracking-[0.08em] uppercase px-10 py-5 transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Request Halal Program
          </a>
        </div>
      </section>
    </>
  )
}
