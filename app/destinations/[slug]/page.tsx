import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DESTINATIONS, getDestination } from '@/lib/destinations'

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dest = getDestination(slug)
  if (!dest) return {}
  return {
    title: `${dest.name} — KIZUNA Journey`,
    description: dest.description.slice(0, 155),
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dest = getDestination(slug)
  if (!dest) notFound()

  const waMsg = encodeURIComponent(
    `Hello, I'd like to enquire about a Japan trip to ${dest.name} for my clients.`
  )

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-[75vh] flex items-end overflow-hidden">
        <Image src={dest.heroImg} alt={dest.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-16 w-full">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 mb-6 transition-all duration-200 backdrop-blur-sm bg-white/5"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 2L4 7l5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Destinations
          </Link>
          <div className="text-gold/70 text-[12px] tracking-[0.2em] uppercase mb-2">{dest.subtitle}</div>
          <h1 className="font-fraunces text-6xl md:text-8xl font-light text-white leading-none mb-4">
            {dest.name}
          </h1>
          <p className="text-[16px] text-white/60 max-w-xl leading-relaxed">{dest.tagline}</p>
        </div>
      </section>

      {/* ── QUICK INFO ────────────────────────────────────── */}
      <div className="bg-navy border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { label: 'Best Time', value: dest.practical.bestTime },
              { label: 'Recommended Stay', value: dest.practical.duration },
              { label: 'Getting There', value: dest.practical.access },
            ].map((item) => (
              <div key={item.label} className="py-7 px-6 first:pl-0">
                <div className="text-[9px] tracking-[0.18em] uppercase text-gold/60 mb-1.5">{item.label}</div>
                <div className="text-[13px] text-white/70 leading-6">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Overview</div>
            <p className="text-[15px] text-muted leading-8">{dest.description}</p>
          </div>
        </div>
      </section>

      {/* ── AREAS ─────────────────────────────────────────── */}
      <section className="bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-2 pt-4">Explore {dest.name}</div>
        </div>
        {dest.areas.map((area, i) => (
          <div key={area.name} className={`${i % 2 === 0 ? 'bg-off-white' : 'bg-white'}`}>
            <div className="max-w-[1200px] mx-auto px-8 py-16">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={area.img} alt={area.name} fill className="object-cover" />
                </div>
                {/* Text */}
                <div>
                  <div className="text-[10px] tracking-[0.16em] uppercase text-gold/70 mb-3">
                    {dest.name} · Area {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-fraunces text-3xl md:text-4xl font-light text-navy mb-4 leading-tight">
                    {area.name}
                  </h2>
                  <p className="text-[14px] text-muted leading-8 mb-6">{area.description}</p>
                  <div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-navy/40 mb-3">Highlights</div>
                    <ul className="flex flex-col gap-2">
                      {area.spots.map((spot) => (
                        <li key={spot} className="flex items-start gap-3 text-[13px] text-muted">
                          <span className="text-gold mt-1 shrink-0">→</span>
                          {spot}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── HALAL ─────────────────────────────────────────── */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Halal & Muslim-Friendly</div>
              <h2 className="font-fraunces text-3xl md:text-4xl font-light text-white leading-[1.1] mb-5">
                {dest.name} for<br />Muslim travelers.
              </h2>
              <p className="text-[14px] text-white/50 leading-8">{dest.halal.summary}</p>
            </div>
            <ul className="flex flex-col gap-4">
              {dest.halal.points.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <div className="w-5 h-5 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2.5">
                      <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[13px] text-white/55 leading-7">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-gold">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-fraunces text-3xl font-light text-white mb-2">
              Ready to send clients to {dest.name}?
            </h3>
            <p className="text-[13px] text-white/70 leading-7 max-w-lg">
              Send us a brief — travel dates, group size, halal requirements. We'll respond with a full proposal within 24 hours.
            </p>
          </div>
          <a
            href={`https://wa.me/971509509781?text=${waMsg}`}
            target="_blank"
            rel="noopener"
            className="shrink-0 inline-flex items-center gap-2.5 bg-white text-gold hover:bg-white/90 text-[12px] font-semibold tracking-[0.08em] uppercase px-8 py-4 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enquire about {dest.name}
          </a>
        </div>
      </section>

      {/* ── OTHER DESTINATIONS ────────────────────────────── */}
      <section className="py-16 bg-white border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-6">Other Destinations</div>
          <div className="flex flex-wrap gap-3">
            {DESTINATIONS.filter((d) => d.slug !== dest.slug).map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="flex items-center gap-3 border border-black/8 hover:border-gold/30 px-5 py-3 transition-colors duration-200 group"
              >
                <div className="relative w-10 h-10 overflow-hidden shrink-0">
                  <Image src={d.heroImg} alt={d.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-navy group-hover:text-gold transition-colors duration-200">{d.name}</div>
                  <div className="text-[10px] text-muted">{d.subtitle}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
