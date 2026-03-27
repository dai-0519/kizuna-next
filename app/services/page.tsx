import Link from 'next/link'

const SERVICES = [
  {
    n: '01',
    icon: '✈',
    title: 'Fully Customized Private Tours',
    text: 'End-to-end private itineraries built around your clients\' interests and schedule. Hotels, transport, experiences, guides — confirmed before departure.',
    tags: ['Private Groups', 'FIT', 'Family'],
    wa: 'Custom%20Private%20Tours',
  },
  {
    n: '02',
    icon: '🕌',
    title: 'Halal-Friendly & Family Tours',
    text: 'Itineraries built specifically for Muslim travelers and families. Halal-certified dining at every meal, prayer arrangements, gender-separated onsen.',
    tags: ['Halal Certified', 'Prayer', 'Family'],
    wa: 'Halal-Friendly%20Tours',
  },
  {
    n: '03',
    icon: '🏢',
    title: 'Corporate & MICE',
    text: 'Incentive travel, team retreats, and business events in Japan. Venue sourcing, group logistics, and on-ground English support for corporate groups.',
    tags: ['Incentive', 'Corporate', 'MICE'],
    wa: 'Corporate%20%26%20MICE',
  },
  {
    n: '04',
    icon: '🏰',
    title: 'Disney VIP Tour Support',
    text: 'Tokyo Disneyland and DisneySea with dedicated VIP guides, priority access support, and full-day assistance in Arabic and English.',
    tags: ['Tokyo Disney', 'VIP Guide', 'Arabic Support'],
    wa: 'Disney%20VIP%20Tours',
  },
  {
    n: '05',
    icon: '🎓',
    title: 'Educational & Student Tours',
    text: 'Study trips and school exchange programs for students from the UAE, Saudi Arabia, and wider GCC. Supervised itineraries with halal-only dining, prayer arrangements, and cultural immersion — full logistics handled end-to-end.',
    tags: ['School Groups', 'Universities', 'GCC Students'],
    wa: 'Educational%20Tours',
  },
  {
    n: '06',
    icon: '🌸',
    title: 'Seasonal Specialty Programs',
    text: 'Cherry blossom, autumn foliage, winter snow, and festival-focused itineraries. Built around Japan\'s best seasonal moments — with halal and Muslim-friendly logistics as standard.',
    tags: ['Sakura', 'Autumn', 'Snow'],
    wa: 'Seasonal%20Programs',
  },
]

export const metadata = {
  title: 'Services — KIZUNA Journey',
  description: 'Japan travel services for Middle Eastern travel agencies. Private tours, halal-friendly programs, MICE, Disney VIP, and educational tours.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-navy-dark pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Our Services</div>
          <h1 className="font-fraunces text-5xl md:text-6xl font-light text-white leading-[1.05] mb-5 max-w-2xl">
            What we can build for your clients
          </h1>
          <p className="text-[14px] text-white/45 leading-7 max-w-xl">
            All programs are built around Middle Eastern travelers — halal dining, prayer time, and family needs are included by default, not as extras.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-1">
            {SERVICES.map((svc) => (
              <div key={svc.n} className="relative bg-white p-10 group hover:shadow-sm transition-shadow duration-300">
                <div className="font-fraunces text-[80px] font-light text-black/3 leading-none absolute top-6 right-8 select-none">
                  {svc.n}
                </div>
                <div className="text-2xl mb-5">{svc.icon}</div>
                <h2 className="text-[16px] font-semibold text-navy mb-3 leading-snug">{svc.title}</h2>
                <p className="text-[13px] text-muted leading-7 mb-6">{svc.text}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="border border-navy/12 text-navy/50 text-[10px] tracking-[0.1em] uppercase px-3 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/971509509781?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20${svc.wa}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-block border border-navy/15 hover:border-gold text-navy/60 hover:text-gold text-[11px] tracking-[0.1em] uppercase px-4 py-2.5 transition-all duration-200"
                >
                  Ask on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample itinerary */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Sample Program</div>
              <h2 className="font-fraunces text-3xl font-light text-white leading-[1.1] mb-5">
                What a real itinerary looks like
              </h2>
              <p className="text-[13px] text-white/40 leading-7 mb-8">
                A 7-day program we built for a UAE family of 5. All meals halal-certified, prayer times observed.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ['Duration', '7 nights / 8 days'],
                  ['Group', 'Family of 5 (3 adults, 2 children)'],
                  ['Cities', 'Tokyo → Hakone → Kyoto → Osaka'],
                  ['Dietary', '100% halal-certified dining'],
                  ['Special', 'Disney VIP day, private ryokan onsen, Kyoto maiko experience'],
                ].map(([l, v]) => (
                  <div key={l} className="flex gap-4 text-[12px] pb-3 border-b border-white/5">
                    <span className="text-white/25 w-20 shrink-0">{l}</span>
                    <span className="text-white/50">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/971509509781?text=Hello%2C%20I%27d%20like%20to%20see%20a%20sample%20itinerary%20for%20my%20clients."
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-gold hover:bg-gold-dark text-white text-[12px] tracking-[0.1em] uppercase px-6 py-3 transition-colors duration-200"
                >
                  Request a Custom Proposal
                </a>
              </div>
            </div>
            <div className="flex flex-col divide-y divide-white/5">
              {[
                { days: '1–2', city: 'Tokyo', title: 'Arrival · Shibuya · Asakusa', text: 'Private transfer from NRT. Halal welcome dinner. Day 2: Asakusa temple, Harajuku, private tea ceremony. Evening: Shibuya observation deck.' },
                { days: '3', city: 'Disney', title: 'Tokyo Disneyland — Full VIP Day', text: 'Dedicated Arabic/English VIP guide. Priority access, meet-and-greet, prayer coordination, halal snacks and lunch pre-arranged.' },
                { days: '4', city: 'Hakone', title: 'Hakone — Ryokan with Private Onsen', text: 'Shinkansen to Hakone. Ryokan with private onsen suite. Mt. Fuji view from room. Halal kaiseki-style dinner.' },
                { days: '5–6', city: 'Kyoto', title: 'Kyoto — Temples · Maiko · Arashiyama', text: 'Fushimi Inari early morning. Private maiko experience. Arashiyama bamboo grove. Traditional machiya dinner.' },
                { days: '7–8', city: 'Osaka', title: 'Osaka · Departure', text: 'Osaka Castle, Dotonbori halal food tour. Private halal sushi. Osaka Aquarium. Airport transfer from KIX.' },
              ].map((day) => (
                <div key={day.days} className="flex gap-6 py-6">
                  <div className="shrink-0 w-20 text-right">
                    <div className="font-fraunces text-2xl font-light text-gold/40">{day.days}</div>
                    <div className="text-[10px] tracking-[0.12em] uppercase text-white/25 mt-0.5">{day.city}</div>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white mb-2">{day.title}</div>
                    <p className="text-[13px] text-white/40 leading-7">{day.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-[11px] text-white/25 italic">
            * Sample program shown for reference. Every itinerary is built from scratch based on your client&apos;s brief.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gold py-12">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-fraunces text-2xl font-light text-white mb-1">Ready to enquire?</h3>
            <p className="text-[13px] text-white/70">Send us your client brief and receive a proposal within 24 hours.</p>
          </div>
          <Link href="/#contact" className="shrink-0 inline-block bg-white text-gold hover:bg-white/90 text-[12px] font-semibold tracking-[0.08em] uppercase px-7 py-3.5 transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}
