'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export type Destination = {
  name: string
  subtitle: string
  img: string
  description: string
  highlights: string[]
  halal: string
}

type Props = {
  dest: Destination | null
  onClose: () => void
}

export default function DestinationModal({ dest, onClose }: Props) {
  useEffect(() => {
    if (!dest) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [dest, onClose])

  if (!dest) return null

  const waMsg = encodeURIComponent(
    `Hello, I'd like to enquire about a Japan trip to ${dest.name}.`
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full md:max-w-3xl bg-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo */}
        <div className="relative aspect-[16/7] overflow-hidden">
          <Image src={dest.img} alt={dest.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2">
              <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
            </svg>
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 p-7">
            <div className="text-gold/80 text-[11px] tracking-[0.2em] uppercase mb-1">{dest.subtitle}</div>
            <h2 className="font-fraunces text-4xl font-light text-white">{dest.name}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 md:p-10">
          <p className="text-[14px] text-muted leading-8 mb-8">{dest.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Highlights */}
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Highlights</div>
              <ul className="flex flex-col gap-2.5">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[13px] text-navy">
                    <span className="text-gold mt-0.5">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Halal */}
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Halal & Muslim-Friendly</div>
              <div className="border-l-2 border-gold/40 pl-4">
                <p className="text-[13px] text-muted leading-7">{dest.halal}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-black/6 pt-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href={`https://wa.me/971509509781?text=${waMsg}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1cb956] text-white text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire about {dest.name}
            </a>
            <p className="text-[11px] text-muted">Proposal within 24 hours · Wholesale rates</p>
          </div>
        </div>
      </div>
    </div>
  )
}
