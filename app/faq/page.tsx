'use client'
import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    q: 'Do you work with any travel agency, or is there a vetting process?',
    a: 'We work with licensed travel agencies and tour operators in the UAE and wider Middle East. There\'s no formal vetting — just send us a brief and we\'ll respond. We build the working relationship through the first few enquiries.',
  },
  {
    q: 'What\'s the minimum group size you handle?',
    a: 'No minimum. We handle individual FIT travelers, couples, families, and groups of any size. Corporate groups typically range from 10–50 people. The price structure adjusts accordingly.',
  },
  {
    q: 'How quickly can you turn around a proposal?',
    a: 'Within 24 hours on business days (UAE time), for standard enquiries. For complex MICE or multi-city itineraries, we\'ll confirm a timeline when you send the brief — usually 48 hours.',
  },
  {
    q: 'How does your halal verification actually work?',
    a: "We don't rely on self-reported halal claims. We verify certification directly, check for shared kitchen issues, and in some cases use our own supplier contacts from running rayu — our halal Japanese restaurant in Dubai — to confirm standards.",
  },
  {
    q: 'Do you provide on-ground support during the trip?',
    a: 'Yes. For all confirmed programs, you have a direct WhatsApp line to our team during the trip. For corporate and MICE groups, we can arrange dedicated on-ground coordination in Japan.',
  },
  {
    q: 'Can you handle Ramadan travel and special occasion trips?',
    a: "Yes, and this is one of our strengths. We build itineraries around Ramadan timing — Suhoor and Iftar restaurant arrangements, adjusted schedules, and prayer-aware logistics. We also handle honeymoons and family milestones.",
  },
  {
    q: 'Do you handle visa support for Japan?',
    a: "We provide invitation letters, hotel confirmations, and itinerary documentation needed for Japan visa applications. The actual visa submission is handled by the agency or traveler, but we make sure all supporting documents are in order.",
  },
  {
    q: 'What currencies and payment methods do you accept?',
    a: "We invoice in AED and USD. Bank transfers are the standard method for B2B partners. We can discuss payment terms based on the volume and nature of the partnership.",
  },
  {
    q: 'Can you arrange Arabic-speaking guides?',
    a: "Yes. We have Arabic-speaking guides available in Tokyo, Kyoto, and Osaka. For other destinations, we can arrange bilingual (English/Japanese) guides. Guide availability varies by season — early booking is recommended.",
  },
  {
    q: 'Do you sell directly to consumers?',
    a: "Never. We are B2B only. We do not accept direct bookings from travelers. If a consumer contacts us, we direct them back to their travel agency. We will never compete with your clients.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-black/6 last:border-b-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[14px] font-medium text-navy leading-snug group-hover:text-gold transition-colors duration-200">
          {q}
        </span>
        <span className={`shrink-0 w-5 h-5 border border-current flex items-center justify-center text-gold/50 transition-transform duration-200 mt-0.5 ${open ? 'rotate-45' : ''}`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="0" x2="5" y2="10" />
            <line x1="0" y1="5" x2="10" y2="5" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="text-[13px] text-muted leading-7">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-navy-dark pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">FAQ</div>
          <h1 className="font-fraunces text-5xl md:text-6xl font-light text-white leading-[1.05] mb-5 max-w-2xl">
            Questions from travel agents
          </h1>
          <p className="text-[14px] text-white/45 leading-7 max-w-xl">
            Common questions we get from agencies before they start working with us.
          </p>
        </div>
      </div>

      {/* FAQ list */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="bg-white p-10">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="mt-12 p-8 bg-white border-l-4 border-gold">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">Still have questions?</div>
            <p className="text-[13px] text-muted leading-7 mb-5">
              The fastest way to get an answer is WhatsApp. We reply within the same business day, UAE time.
            </p>
            <a
              href="https://wa.me/971509509781?text=Hello%2C%20I%20have%20a%20question%20about%20working%20with%20KIZUNA%20Journey."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1cb956] text-white text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3 transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
