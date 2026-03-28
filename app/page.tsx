import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import HeroCarousel from '@/components/HeroCarousel'

const WA = 'https://wa.me/971509509781?text=Hello%2C%20I%27m%20a%20travel%20agent%20and%20I%27d%20like%20to%20enquire%20about%20Japan%20programs.'

const WHY_ITEMS = [
  { n: '01', title: 'UAE Time. No Delay.', text: 'Same time zone, same business day as your agency. No waiting until Tokyo opens. Quotes, confirmations, and answers arrive when you need them.', tag: '24-hour reply guarantee' },
  { n: '02', title: 'Real Halal Expertise', text: 'We run a halal Japanese restaurant in Dubai — rayu. We verify halal certification ourselves and maintain a working database of 500+ restaurants across Japan.', tag: '500+ verified restaurants' },
  { n: '03', title: 'Japan Only', text: 'One destination. Deep knowledge and real supplier relationships in every city — not a fifty-country catalog.', tag: '6 core destinations' },
  { n: '04', title: 'B2B Only. No Exceptions.', text: 'We work exclusively with travel agencies. Wholesale rates, trade documentation — and we will never compete with your clients.', tag: 'No direct B2C. Ever.' },
]

const STEPS = [
  { n: '01', title: 'Send us your brief', text: 'WhatsApp or email with the basics: travel dates, group size, interests, budget range, halal requirements. A 2-line message is enough.', cta: true },
  { n: '02', title: 'Receive your proposal', text: 'Within 24 hours (business days), we send a detailed itinerary with hotel options, activity suggestions, halal dining, and wholesale pricing.' },
  { n: '03', title: 'Confirm & we handle the rest', text: 'Once confirmed, we manage all on-ground bookings — hotels, transport, guides, restaurant reservations, prayer arrangements.' },
]

const HALAL_ITEMS = [
  { text: 'Halal-certified restaurants, verified. We confirm certification directly — not just "no pork on the menu." 500+ restaurants mapped across all destinations.' },
  { text: 'Prayer time and Qibla at every hotel. Mosque locations, daily schedules, and in-room Qibla direction confirmed before check-in.' },
  { text: 'Gender-separated onsen, properly sourced. Ryokan with private or women-only bath options — arranged in advance.' },
  { text: 'Arabic-speaking guides available in key cities, so clients communicate and feel at ease from arrival to departure.' },
  { text: 'Ramadan-aware itineraries. Adjusted dining times, Suhoor and Iftar options, programs built around the Islamic calendar.' },
]

// Japan scene grid data
const SCENES = [
  { href: '/destinations/kyoto',   img: '/images/areas/kyoto-fushimi.jpg',   name: 'Kyoto',    jp: '京都',   span: 'col-span-5 row-span-2' },
  { href: '/destinations/tokyo',   img: '/images/areas/tokyo-shibuya.jpg',   name: 'Tokyo',    jp: '東京',   span: 'col-span-4 row-span-1' },
  { href: '/destinations/hakone',  img: '/images/areas/hakone-ropeway.jpg',   name: 'Hakone',   jp: '箱根',   span: 'col-span-3 row-span-1' },
  { href: '/destinations/hokkaido',img: '/images/areas/hokkaido-lavender.jpg',name: 'Hokkaido', jp: '北海道', span: 'col-span-4 row-span-1' },
  { href: '/destinations/okinawa', img: '/images/areas/okinawa-beach.jpg',   name: 'Okinawa',  jp: '沖縄',   span: 'col-span-3 row-span-1' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO CAROUSEL ────────────────────────────────── */}
      <HeroCarousel />

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="bg-gold/10 border-y border-gold/20 py-3 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 text-[11px] tracking-[0.18em] uppercase text-gold/80">
              <span>Dubai-Based Operator</span>
              <span className="text-gold/40">·</span>
              <span>UAE Timezone Response</span>
              <span className="text-gold/40">·</span>
              <span>500+ Verified Halal Restaurants</span>
              <span className="text-gold/40">·</span>
              <span>6 Core Destinations</span>
              <span className="text-gold/40">·</span>
              <span>B2B Only — No Direct Sales</span>
              <span className="text-gold/40">·</span>
              <span>24-Hour Proposal Guarantee</span>
              <span className="text-gold/40">·</span>
              <span>Arabic & English Support</span>
              <span className="text-gold/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── JAPAN SCENES GRID ────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-8 pt-20 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Discover Japan</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.0]">
                Ancient temples.<br />
                Neon cities.<br />
                Powder snow.
              </h2>
            </div>
            <Link href="/destinations" className="shrink-0 text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200">
              All Destinations →
            </Link>
          </div>
        </div>

        {/* Editorial photo grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-[3px] px-8 pb-8 max-w-[1400px] mx-auto" style={{ height: '75vh', minHeight: '500px' }}>
          {SCENES.map((scene) => (
            <Link
              key={scene.name}
              href={scene.href}
              className={`${scene.span} relative overflow-hidden group block`}
            >
              <Image
                src={scene.img}
                alt={scene.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <div className="font-fraunces text-lg md:text-2xl font-light italic text-white leading-tight">{scene.name}</div>
                <div className="font-jp text-white/35 text-xs md:text-sm mt-0.5">{scene.jp}</div>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold border-b border-gold/50 pb-0.5">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY KIZUNA ───────────────────────────────────── */}
      <section id="why" className="py-32 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Why KIZUNA</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05] mb-5">
                What makes<br />us different
              </h2>
              <p className="text-[14px] text-muted leading-7 mb-8">
                Most Japan travel companies are based in Japan — with Japanese hours and limited understanding of what Middle Eastern travelers actually need. We work from Dubai, on your time.
              </p>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 border border-gold/30 text-gold hover:border-gold text-[11px] tracking-[0.1em] uppercase px-5 py-3 transition-colors duration-200"
              >
                Our Japan & Halal Expertise →
              </Link>
            </div>
            <div className="flex flex-col divide-y divide-black/5">
              {WHY_ITEMS.map((item) => (
                <div key={item.n} className="flex gap-6 py-8">
                  <span className="font-fraunces text-4xl font-light text-gold/25 leading-none w-10 shrink-0">{item.n}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-navy mb-2 tracking-wide">{item.title}</div>
                    <p className="text-[13px] text-muted leading-7">{item.text}</p>
                  </div>
                  <div className="hidden md:block shrink-0">
                    <span className="border border-gold/25 text-gold/70 text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS PREVIEW ─────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Destinations</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
                Six destinations.<br />Deep expertise.
              </h2>
            </div>
            <Link href="/destinations" className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200 shrink-0">
              View All Destinations →
            </Link>
          </div>

          {/* 6-destination grid with area sub-images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px]">
            {[
              { slug: 'tokyo',    name: 'Tokyo',    jp: '東京',  img: '/images/destinations/tokyo.jpg' },
              { slug: 'kyoto',   name: 'Kyoto',    jp: '京都',  img: '/images/destinations/kyoto.jpg' },
              { slug: 'osaka',   name: 'Osaka',    jp: '大阪',  img: '/images/destinations/osaka.jpg' },
              { slug: 'hakone',  name: 'Hakone',   jp: '箱根',  img: '/images/areas/hakone-ropeway.jpg' },
              { slug: 'hokkaido',name: 'Hokkaido', jp: '北海道',img: '/images/areas/hokkaido-lavender.jpg' },
              { slug: 'okinawa', name: 'Okinawa',  jp: '沖縄',  img: '/images/destinations/okinawa.jpg' },
            ].map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group relative aspect-[3/4] overflow-hidden bg-navy block"
              >
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <div className="font-fraunces text-xl md:text-2xl font-light italic text-white">{dest.name}</div>
                  <div className="font-jp text-white/30 text-xs mt-0.5">{dest.jp}</div>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] tracking-[0.18em] uppercase text-gold border-b border-gold/50 pb-0.5">View details →</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HALAL EXPERTISE ──────────────────────────────── */}
      <section id="halal" className="py-32 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/generated/halal-food-japan.jpg" alt="Halal Japanese cuisine" fill className="object-cover" />
                <div className="absolute bottom-4 left-4 bg-navy-dark/80 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-gold">Verified Halal</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/generated/prayer-room-hotel.jpg" alt="Prayer room in Japan hotel" fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy-dark/30" />
                  <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.12em] uppercase text-white font-semibold">Prayer Room</div>
                </div>
                <div className="relative aspect-square overflow-hidden bg-navy-dark flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="font-fraunces text-5xl font-light text-gold mb-1">500+</div>
                    <div className="text-[10px] tracking-[0.12em] uppercase text-white/60">Verified Halal<br />Restaurants</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Halal Expertise</div>
              <h2 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-[1.1] mb-5">
                We know Japan&apos;s halal<br />scene better than anyone.
              </h2>
              <p className="text-[13px] text-muted leading-7 mb-8">
                We run a halal Japanese restaurant in Dubai — rayu. That direct experience means we verify halal certification ourselves and know what Muslim families actually need.
              </p>
              <ul className="flex flex-col gap-5 mb-8">
                {HALAL_ITEMS.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-5 h-5 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2">
                        <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[13px] text-muted leading-7">{item.text}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 bg-navy text-white hover:bg-navy-light text-[11px] font-medium tracking-[0.1em] uppercase px-6 py-3.5 transition-colors duration-200"
              >
                See Our Full Expertise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ──────────────────────────────────── */}
      <section className="bg-navy border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { value: '500+', label: 'Verified Halal Restaurants', sub: 'Across all 6 destinations' },
              { value: '24h',  label: 'Proposal Guarantee', sub: 'UAE business day response' },
              { value: '100%', label: 'B2B Only', sub: 'Never sell direct to consumers' },
              { value: '6',    label: 'Core Destinations', sub: 'Deep local supplier network' },
            ].map((stat) => (
              <div key={stat.value} className="py-10 px-8 text-center first:pl-0 last:pr-0">
                <div className="font-fraunces text-4xl md:text-5xl font-light text-gold mb-1 leading-none">{stat.value}</div>
                <div className="text-[12px] font-semibold text-white tracking-wide mb-1">{stat.label}</div>
                <div className="text-[11px] text-white/35 tracking-wide">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEASONS OF JAPAN ─────────────────────────────── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 mb-12">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Four Seasons</div>
          <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
            Japan is beautiful<br />in every season.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] px-8 max-w-[1400px] mx-auto" style={{ height: '55vh', minHeight: '380px' }}>
          {[
            { season: 'Spring', jp: '春', icon: '🌸', img: '/images/season-spring.jpg', slug: 'spring', en: 'Cherry blossoms & Hanami picnics' },
            { season: 'Summer', jp: '夏', icon: '🌊', img: '/images/season-summer.jpg', slug: 'summer', en: 'Okinawa beaches & Summer festivals' },
            { season: 'Autumn', jp: '秋', icon: '🍁', img: '/images/season-autumn.jpg', slug: 'autumn', en: 'Red maple season — Kyoto & Nikko' },
            { season: 'Winter', jp: '冬', icon: '❄️', img: '/images/season-winter.jpg', slug: 'winter', en: 'Powder snow & hot springs' },
          ].map((s) => (
            <Link key={s.season} href={`/seasons/${s.slug}`} className="relative overflow-hidden group block">
              <Image src={s.img} alt={s.season} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-fraunces text-xl font-light italic text-white">{s.season}</div>
                <div className="font-jp text-white/30 text-xs mb-1">{s.jp}</div>
                <div className="text-[11px] text-white/50 leading-5">{s.en}</div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold border-b border-gold/50 pb-0.5">
                    View Packages →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────── */}
      <section className="py-32 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">For Travel Agents</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-white leading-[1.05] mb-5">
              How to start working with us
            </h2>
            <p className="text-[14px] text-white/45 leading-7 max-w-xl mx-auto">
              Three steps from first contact to confirmed itinerary. No lengthy sign-up process, no minimum volume commitment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[1px] bg-white/5">
            {STEPS.map((step) => (
              <div key={step.n} className="relative bg-navy-dark p-10">
                <div className="font-fraunces text-[80px] font-light text-white/4 leading-none absolute top-6 right-8 select-none">
                  {step.n}
                </div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-gold/60 mb-3">Step {step.n}</div>
                <h3 className="text-[15px] font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[13px] text-white/40 leading-7">{step.text}</p>
                {step.cta && (
                  <div className="mt-6">
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener"
                      className="inline-block border border-white/20 hover:border-white/50 text-white text-[11px] tracking-[0.1em] uppercase px-4 py-2.5 transition-colors duration-200"
                    >
                      Send Brief on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-6 border-l-2 border-gold bg-white/3 max-w-xl">
            <p className="text-[13px] text-white/45 leading-7">
              <strong className="text-white">No minimum volume requirement.</strong> Whether you&apos;re sending one family or ten groups a year, we work with you the same way.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Our Services</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
                What we can build<br />for your clients
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center shrink-0">
              <Link href="/sample" className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted hover:text-navy border-b border-black/20 pb-0.5 transition-colors duration-200">
                View Sample Itinerary →
              </Link>
              <Link href="/services" className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200">
                All Services →
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✈', title: 'Fully Customized Private Tours', text: 'End-to-end private itineraries built around your clients\' interests. Hotels, transport, experiences, guides — confirmed before departure.' },
              { icon: '🕌', title: 'Halal-Friendly & Family Tours', text: 'Itineraries built for Muslim travelers and families. Halal-certified dining at every meal, prayer arrangements, gender-separated onsen.' },
              { icon: '🏢', title: 'Corporate & MICE', text: 'Incentive travel, team retreats, and business events in Japan. Venue sourcing, group logistics, and on-ground support.' },
            ].map((svc) => (
              <div key={svc.title} className="border border-black/6 p-8 hover:border-gold/30 transition-colors duration-300">
                <div className="text-2xl mb-5">{svc.icon}</div>
                <h3 className="text-[14px] font-semibold text-navy mb-3 leading-snug">{svc.title}</h3>
                <p className="text-[13px] text-muted leading-7">{svc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-32 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">What Agencies Say</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
              Trusted by agencies<br />across the Middle East.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "KIZUNA Journey turned our Japan inquiries from a headache into a smooth process. The 24-hour proposal guarantee is real — they always come back within the day. Halal verification is solid.",
                name: "Mohammed Al-Hamdan",
                title: "Managing Director",
                agency: "Desert Rose Travel, Dubai, UAE",
              },
              {
                quote: "We've worked with Japan operators before, but none understood what our Saudi clients need. KIZUNA handles halal, prayer, and family logistics without us having to explain everything from scratch.",
                name: "Tariq Al-Ghamdi",
                title: "Senior Travel Consultant",
                agency: "Al Majd Tourism, Riyadh, KSA",
              },
              {
                quote: "The B2B-only model matters to us. We know KIZUNA won't undercut us by selling directly to travelers. That trust is rare in this industry.",
                name: "Fatima Al-Rashidi",
                title: "Director of International Tours",
                agency: "Pearl of the Gulf Travel, Kuwait City",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-black/5 p-8">
                <div className="font-fraunces text-5xl text-gold/20 leading-none mb-4">&ldquo;</div>
                <p className="text-[13px] text-muted leading-7 mb-6">{t.quote}</p>
                <div className="border-t border-black/5 pt-6">
                  <div className="text-[13px] font-semibold text-navy">{t.name}</div>
                  <div className="text-[11px] text-muted/70 tracking-wide">{t.title}, {t.agency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO FEATURE ────────────────────────────────── */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/generated/muslim-family-japan.jpg"
          alt="Muslim family enjoying Japan"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-8 md:px-20">
          <div className="max-w-lg">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-5">For Your Clients</div>
            <h2 className="font-fraunces text-4xl md:text-6xl font-light text-white leading-[1.05] mb-6">
              Japan that works<br />for Muslim families.
            </h2>
            <p className="text-[14px] text-white/65 leading-8 mb-8">
              Every halal meal confirmed. Every prayer arrangement sorted.<br />Before they even board the plane.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA}
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white text-[12px] font-medium tracking-[0.08em] uppercase px-7 py-4 transition-colors duration-200"
              >
                Start a Conversation
              </a>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 text-[12px] font-medium tracking-[0.08em] uppercase px-7 py-4 transition-colors duration-200"
              >
                Our Halal Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">Why You Can Trust Us</div>
            <h2 className="font-fraunces text-3xl font-light text-navy">Verifiable credentials. No fluff.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-1">
            {[
              { label: 'Licensed UAE Business', detail: 'KIZUNA Journey FZCO — UAE Freezone registered company. Trade license available on request.', proof: 'Trade License' },
              { label: 'Halal Restaurant Operator', detail: 'We run rayu — a halal Japanese restaurant in Dubai. Halal expertise is our daily business.', proof: 'rayu, Jumeirah 1, Dubai' },
              { label: 'Dubai Office — Physical Location', detail: 'Our office is at Wasl Vita Mall, Jumeirah 1 — walk in if you need to.', proof: 'Shop 38, Wasl Vita Mall' },
              { label: 'Japan-Only Focus Since Day One', detail: 'Founded January 2025 with a single mandate: Japan travel for the Middle East market.', proof: 'Established January 2025' },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 p-8 bg-off-white hover:bg-white border border-transparent hover:border-gold/15 transition-all duration-300">
                <div className="w-2 h-2 bg-gold rounded-full shrink-0 mt-1.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-navy mb-1.5 tracking-wide">{item.label}</div>
                  <p className="text-[13px] text-muted leading-7 mb-3">{item.detail}</p>
                  <div className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase text-gold/70 border border-gold/20 px-2.5 py-1">
                    <svg width="8" height="8" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5">
                      <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item.proof}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="py-32 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                <Image src="/images/office-bg.jpg" alt="KIZUNA Journey office" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy-dark/40" />
                <Image src="/images/ceo-ryoma-nobg.png" alt="Ryoma Takeuchi — CEO" fill className="object-contain object-bottom" />
              </div>
              <div className="relative aspect-[16/7] overflow-hidden">
                <Image src="/images/generated/tokyo-hotel-view.jpg" alt="Tokyo luxury hotel" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy-dark/30" />
                <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.14em] uppercase text-white/60">Tokyo · Japan</div>
              </div>
            </div>
            <div>
              <div className="font-jp text-6xl text-gold/20 mb-1 leading-none">絆</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-gold/50 mb-8">Kizuna — "Bond" in Japanese</div>
              <p className="text-[14px] text-white/50 leading-8 mb-5">
                KIZUNA Journey was founded in Dubai to solve a specific problem: travel agencies in the UAE needed a Japan specialist that works on their time, understands what their clients need, and can actually be reached.
              </p>
              <p className="text-[14px] text-white/50 leading-8 mb-10">
                We are a Japan-only B2B travel company. We don&apos;t cover other destinations, and we don&apos;t sell to consumers. What we do, we do with focus.
              </p>
              <div className="border-t border-white/8 pt-8">
                <div className="text-[10px] tracking-[0.14em] uppercase text-white/30 mb-1">Founder & CEO</div>
                <div className="text-[18px] font-semibold text-white mb-1">Ryoma Takeuchi</div>
                <div className="text-[12px] text-white/35 mb-6">CEO, KIZUNA Journey FZCO — Dubai, UAE</div>
                <div className="flex flex-col gap-2">
                  {[
                    ['Established', 'January 2025, Dubai, UAE'],
                    ['License', 'KIZUNA Journey FZCO — UAE Freezone'],
                    ['Focus', 'B2B Japan travel for Middle Eastern agencies'],
                    ['Office', 'Shop 38, Wasl Vita Mall, Jumeirah 1, Dubai'],
                  ].map(([l, v]) => (
                    <div key={l} className="flex gap-4 text-[12px]">
                      <span className="text-white/25 w-24 shrink-0">{l}</span>
                      <span className="text-white/45">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Our Team</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.05]">
              The people behind<br />KIZUNA Journey.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Ryoma Takeuchi */}
            <div className="bg-white p-8 border border-black/5">
              <div className="aspect-square overflow-hidden mb-6">
                <Image
                  src="/images/ceo-ryoma.jpg"
                  alt="Ryoma Takeuchi"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[15px] font-semibold text-navy mb-1">Ryoma Takeuchi</div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-gold mb-4">CEO &amp; Founder</div>
              <p className="text-[13px] text-muted leading-7">Born and raised in Japan. Built KIZUNA Journey from Dubai to bridge the gap between Middle Eastern travel agencies and authentic Japanese experiences.</p>
            </div>
            {/* Tensho Suzuki */}
            <div className="bg-white p-8 border border-black/5">
              <div className="aspect-square overflow-hidden mb-6 bg-navy/10 flex items-center justify-center">
                <span className="font-fraunces text-4xl font-light text-navy/40">TS</span>
              </div>
              <div className="text-[15px] font-semibold text-navy mb-1">Tensho Suzuki</div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-gold mb-4">Chief Operations Officer</div>
              <p className="text-[13px] text-muted leading-7">Born in Hong Kong, moved to Kyoto at 14. Extensive background in luxury product trading with deep Japan expertise.</p>
            </div>
            {/* Hideaki Shigemitsu */}
            <div className="bg-white p-8 border border-black/5">
              <div className="aspect-square overflow-hidden mb-6 bg-navy/10 flex items-center justify-center">
                <span className="font-fraunces text-4xl font-light text-navy/40">HS</span>
              </div>
              <div className="text-[15px] font-semibold text-navy mb-1">Hideaki Shigemitsu</div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-gold mb-4">Head of Marketing</div>
              <p className="text-[13px] text-muted leading-7">Built and sold his own company between 18–21. Brings marketing and sales experience across Japan and international markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAR ───────────────────────────────────────── */}
      <div className="bg-gold py-14">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/60 mb-2">Ready to partner with us?</div>
            <h3 className="font-fraunces text-3xl font-light text-white mb-2">Send us your first brief.</h3>
            <p className="text-[13px] text-white/70 leading-7 max-w-lg">
              No minimum volume. No sign-up process. Just WhatsApp or email with your client&apos;s details — we&apos;ll respond within the same business day.
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
            Start on WhatsApp
          </a>
        </div>
      </div>

      {/* ── LEAD FORM ─────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-off-white border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Get a Proposal</div>
              <h2 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-[1.1] mb-4">
                Request your<br />Japan program.
              </h2>
              <p className="text-[13px] text-muted leading-7 mb-6">
                Fill in the details — we&apos;ll send back a full itinerary with halal dining, hotels, and wholesale pricing within 24 hours.
              </p>
              <div className="flex flex-col gap-2">
                {['No minimum volume', 'No sign-up required', 'Wholesale trade rates'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[12px] text-muted">
                    <div className="w-4 h-4 border border-gold/30 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5">
                        <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gold/5 border-l-2 border-gold text-right" dir="rtl">
                <strong className="text-gold text-[11px] tracking-wide block mb-1">خدمة باللغة العربية متاحة</strong>
                <span className="text-[13px] text-muted">نتواصل باللغة العربية والإنجليزية</span>
              </div>
            </div>
            <div className="bg-white border border-black/5 p-8 md:p-10">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://wa.me/971509509781" target="_blank" rel="noopener"
              className="flex items-center gap-4 p-6 bg-off-white hover:bg-white border border-transparent hover:border-gold/20 transition-all duration-200">
              <div className="w-10 h-10 bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-muted mb-0.5">WhatsApp</div>
                <div className="text-[14px] font-medium text-navy">+971 50 950 9781</div>
              </div>
            </a>
            <a href="mailto:ryoma@kizuna-journey.com"
              className="flex items-center gap-4 p-6 bg-off-white hover:bg-white border border-transparent hover:border-gold/20 transition-all duration-200">
              <div className="w-10 h-10 bg-navy/5 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C1828" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 8l10 7 10-7" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-muted mb-0.5">Email</div>
                <div className="text-[14px] font-medium text-navy">ryoma@kizuna-journey.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 bg-off-white">
              <div className="w-10 h-10 bg-navy/5 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C1828" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-muted mb-0.5">Dubai Office</div>
                <div className="text-[13px] font-medium text-navy leading-5">Shop 38, Wasl Vita Mall<br />Jumeirah 1, Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
