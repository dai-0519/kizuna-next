import type { Metadata } from 'next'
import Link from 'next/link'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'Sample Itinerary — 7 Days Tokyo & Kyoto Halal Tour | KIZUNA Journey',
  description: 'Sample 7-day Tokyo & Kyoto halal-friendly family tour itinerary. B2B wholesale pricing available for travel agencies.',
}

const DAYS = [
  {
    day: 1,
    title: 'Arrival in Tokyo',
    location: 'Tokyo',
    items: [
      'Arrival at Narita / Haneda Airport',
      'Transfer to hotel (Shinjuku area)',
      'Check-in: Hotel Gracery Shinjuku or similar (4★)',
      'Evening: Shinjuku stroll, halal ramen dinner at Muslim-friendly restaurant',
    ],
    halalNote: 'Airport transfer includes prayer time stop at Narita Mosque if needed.',
  },
  {
    day: 2,
    title: 'Tokyo: Asakusa & Akihabara',
    location: 'Tokyo',
    items: [
      'Morning: Senso-ji Temple, Nakamise shopping street',
      'Lunch: Halal-certified Japanese cuisine (Asakusa area)',
      'Afternoon: Akihabara electronics district',
      'Dinner: Halal BBQ / Yakiniku',
      'Optional: Tokyo Skytree observation deck',
    ],
    halalNote: null,
  },
  {
    day: 3,
    title: 'Tokyo: Harajuku & Shibuya',
    location: 'Tokyo',
    items: [
      'Morning: Meiji Shrine',
      'Afternoon: Harajuku (Takeshita Street), Shibuya Crossing',
      'Lunch: Halal burger / café (Harajuku)',
      'Evening: Shibuya Sky rooftop observation',
      'Dinner: Halal sushi restaurant',
    ],
    halalNote: null,
  },
  {
    day: 4,
    title: 'Day Trip: Hakone',
    location: 'Hakone',
    items: [
      'Morning: Shinkansen to Odawara → Hakone',
      'Mt. Fuji views from Hakone Open Air Museum',
      'Onsen: Private bath ryokan (gender-separated, no shared bathing)',
      'Lunch: Ryokan halal bento',
      'Return to Tokyo evening',
    ],
    halalNote: 'Private bath ryokan arranged in advance — no shared communal bathing required.',
  },
  {
    day: 5,
    title: 'Shinkansen to Kyoto',
    location: 'Kyoto',
    items: [
      'Morning: Shinkansen (Tokyo → Kyoto, 2h 15m)',
      'Afternoon: Fushimi Inari Shrine (thousand torii gates)',
      'Check-in: Kyoto hotel (Gion area)',
      'Dinner: Halal kaiseki course at verified restaurant',
    ],
    halalNote: 'Halal kaiseki restaurant confirmed prior to booking — certification verified directly.',
  },
  {
    day: 6,
    title: 'Kyoto: Temples & Bamboo',
    location: 'Kyoto',
    items: [
      'Morning: Arashiyama Bamboo Grove, Tenryu-ji Temple',
      'Lunch: Halal bento near Arashiyama',
      'Afternoon: Kinkaku-ji (Golden Pavilion), Nijo Castle',
      'Evening: Gion district walk',
      'Dinner: Halal Japanese hot pot (shabu-shabu)',
    ],
    halalNote: null,
  },
  {
    day: 7,
    title: 'Departure',
    location: 'Osaka / Kyoto',
    items: [
      'Morning: Nishiki Market ("Kyoto\'s Kitchen")',
      'Lunch: Final halal meal',
      'Transfer to Osaka KIX or Kyoto → Shin-Osaka → departure',
    ],
    halalNote: null,
  },
]

const INCLUDED = [
  'All hotels (4★, halal-friendly confirmed)',
  'All ground transportation',
  'Bilingual (English/Arabic) tour guide',
  '500+ halal restaurant database access',
  'Prayer time schedule and Qibla direction at every hotel',
  'Gender-separated onsen arrangements',
  '24/7 WhatsApp support during trip',
]

const NOT_INCLUDED = [
  'International flights',
  'Travel insurance',
  'Personal expenses',
]

const WA_LINK =
  'https://wa.me/971509509781?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20wholesale%20pricing%20for%20the%207-day%20Tokyo%20Kyoto%20halal%20itinerary.'

export default function SampleItineraryPage() {
  return (
    <div className="bg-off-white min-h-screen">

      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="bg-navy pt-32 pb-20 px-8">
        <div className="max-w-[900px] mx-auto">
          {/* B2B Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 text-gold text-[10px] tracking-[0.2em] uppercase px-4 py-2 mb-8">
            For Travel Agencies — Wholesale Pricing Available
          </div>

          {/* Title */}
          <h1 className="font-fraunces text-4xl md:text-6xl font-light text-white leading-[1.08] mb-5">
            Sample Itinerary
          </h1>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide mb-8">
            7 Days · Tokyo &amp; Kyoto · Halal-Friendly · Family Tour
          </p>

          {/* Note */}
          <p className="text-white/35 text-[13px] leading-relaxed border-l-2 border-gold/30 pl-4 mb-10 max-w-xl">
            This is a sample itinerary. All programs are fully customized to your clients&apos; needs.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 print:hidden">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1cb956] text-white text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Request Wholesale Pricing
            </a>
            <PrintButton />
          </div>
        </div>
      </section>

      {/* ── QUICK STATS ─────────────────────────────────────── */}
      <div className="bg-navy-light border-b border-white/8">
        <div className="max-w-[900px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { value: '7', label: 'Days', sub: 'Tokyo + Kyoto' },
              { value: '4★', label: 'Hotels', sub: 'Halal-confirmed' },
              { value: '100%', label: 'Halal', sub: 'Verified restaurants' },
              { value: 'B2B', label: 'Wholesale', sub: 'Trade rates available' },
            ].map((s) => (
              <div key={s.value} className="py-7 px-6 text-center first:pl-0 last:pr-0">
                <div className="font-fraunces text-3xl font-light text-gold mb-0.5 leading-none">{s.value}</div>
                <div className="text-[11px] font-semibold text-white tracking-wide mb-0.5">{s.label}</div>
                <div className="text-[10px] text-white/35 tracking-wide">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ITINERARY TIMELINE ──────────────────────────────── */}
      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">Day by Day</div>
          <h2 className="font-fraunces text-3xl font-light text-navy mb-12">Full Itinerary</h2>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-[42px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/30 via-gold/15 to-transparent hidden md:block" />

            <div className="space-y-0">
              {DAYS.map((d, idx) => (
                <div key={d.day} className="relative flex gap-0 md:gap-10">
                  {/* Day number column */}
                  <div className="hidden md:flex flex-col items-center shrink-0 w-[85px]">
                    <div className="relative z-10 w-[42px] h-[42px] bg-navy border-2 border-gold/50 flex items-center justify-center mt-1">
                      <span className="font-fraunces text-[13px] font-light text-gold leading-none">{d.day}</span>
                    </div>
                    {idx < DAYS.length - 1 && (
                      <div className="flex-1 w-[1px] bg-transparent" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 bg-white border border-black/6 p-7 md:p-8 ${idx < DAYS.length - 1 ? 'mb-4' : ''}`}>
                    {/* Mobile day badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="md:hidden inline-flex items-center justify-center w-9 h-9 bg-navy border border-gold/40">
                        <span className="font-fraunces text-[12px] font-light text-gold">{d.day}</span>
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gold/70 mb-0.5">{d.location}</div>
                        <h3 className="font-fraunces text-xl font-light text-navy leading-snug">Day {d.day} — {d.title}</h3>
                      </div>
                    </div>

                    {/* Program list */}
                    <ul className="space-y-2.5 mb-4">
                      {d.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[13px] text-muted leading-relaxed">
                          <span className="shrink-0 mt-[5px] w-1 h-1 rounded-full bg-gold/50" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Halal note */}
                    {d.halalNote && (
                      <div className="border-l-2 border-gold bg-gold/5 px-4 py-3 mt-5">
                        <div className="flex items-start gap-2">
                          <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gold shrink-0 mt-0.5">Halal Note</span>
                          <p className="text-[12px] text-muted leading-relaxed">{d.halalNote}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INCLUDED / NOT INCLUDED ─────────────────────────── */}
      <section className="py-16 px-8 bg-white border-y border-black/6">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">Package Details</div>
          <h2 className="font-fraunces text-3xl font-light text-navy mb-10">What&apos;s Included</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-8" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-navy">Included</span>
              </div>
              <ul className="space-y-3">
                {INCLUDED.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-muted leading-relaxed">
                    <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10.5l4 4 8-8" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 bg-black/5 border border-black/10 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#706A60" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-navy">Not Included</span>
              </div>
              <ul className="space-y-3">
                {NOT_INCLUDED.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-muted leading-relaxed">
                    <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#706A60" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 5l10 10M15 5L5 15" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING CTA ─────────────────────────────────────── */}
      <section className="py-20 px-8 bg-navy">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">B2B Wholesale Rates</div>
          <h2 className="font-fraunces text-3xl md:text-4xl font-light text-white mb-4">
            Pricing for Travel Agencies
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed max-w-lg mx-auto mb-3">
            Wholesale pricing provided upon agency inquiry.
          </p>
          <p className="text-white/35 text-[13px] mb-10">
            Contact us on WhatsApp for trade rates.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1cb956] text-white text-[13px] font-semibold tracking-[0.08em] uppercase px-8 py-4 transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Request Wholesale Pricing
          </a>
        </div>
      </section>

      {/* ── FOOTER NOTE ─────────────────────────────────────── */}
      <section className="py-10 px-8 bg-navy-dark border-t border-white/5">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-white/25 text-[11px] leading-relaxed">
              This sample itinerary is provided for reference only. All programs are fully customized.
            </p>
            <p className="text-white/20 text-[11px]">
              KIZUNA Journey FZCO — Dubai, UAE | B2B Only
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 shrink-0 print:hidden"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

    </div>
  )
}
