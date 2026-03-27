'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = [
  { src: '/images/hero_sakura.jpg',  location: 'Kyoto', jp: '京都',   caption: 'Cherry blossoms in full bloom' },
  { src: '/images/hero_torii.jpg',   location: 'Fushimi Inari', jp: '伏見稲荷', caption: 'Ten thousand vermillion gates' },
  { src: '/images/hero_fuji_a.jpg',  location: 'Hakone', jp: '箱根',  caption: 'Mount Fuji at first light' },
  { src: '/images/hero_pagoda.jpg',  location: 'Kyoto', jp: '京都',   caption: 'Ancient temples, timeless beauty' },
  { src: '/images/hero_shrine.jpg',  location: 'Japan', jp: '日本',   caption: 'Sacred spaces and living traditions' },
]

const WA = 'https://wa.me/971509509781?text=Hello%2C%20I%27m%20a%20travel%20agent%20and%20I%27d%20like%20to%20enquire%20about%20Japan%20programs.'

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.src}
            alt={slide.caption}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Location badge — top right */}
      <div className="absolute top-28 right-8 md:right-16 text-right z-10">
        <div className="text-white/25 text-[9px] tracking-[0.35em] uppercase mb-1.5">Now Showing</div>
        <div className="font-fraunces text-white/55 text-base italic leading-tight">
          {SLIDES[current].jp}
        </div>
        <div className="text-white/25 text-[10px] tracking-[0.12em] mt-0.5">
          {SLIDES[current].location}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 pb-20">
        <div className="inline-flex items-center gap-2 border border-gold/35 bg-gold/10 text-gold text-[9px] tracking-[0.25em] uppercase px-4 py-2 mb-8">
          Dubai-based · Japan-only · B2B
        </div>

        <h1 className="font-fraunces font-light text-white leading-[0.88] mb-8 max-w-3xl"
          style={{ fontSize: 'clamp(52px, 8vw, 108px)' }}>
          Your Private<br />
          Gateway to<br />
          <em className="text-gold not-italic">Japan.</em>
        </h1>

        <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md mb-10">
          The only Japan specialist in the UAE — operating on your time zone, with verified halal expertise, built exclusively for travel agencies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1cb956] text-white text-[11px] font-semibold tracking-[0.1em] uppercase px-7 py-4 transition-colors duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-white/60 hover:bg-white/5 text-[11px] font-medium tracking-[0.1em] uppercase px-7 py-4 transition-all duration-200"
          >
            Explore Destinations
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[1.5px] transition-all duration-500 ${i === current ? 'w-10 bg-gold' : 'w-4 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
          <span className="text-white/20 text-[9px] tracking-[0.2em] ml-3 uppercase">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-25 z-10">
        <div className="text-white text-[9px] tracking-[0.3em] uppercase [writing-mode:vertical-lr]">Scroll</div>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}
