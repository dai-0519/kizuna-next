'use client'
import { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'

interface Props {
  value: string
  label: string
  sub: string
}

export default function StatsCounter({ value, label, sub }: Props) {
  const numMatch = value.match(/^(\d+)/)
  const suffix = numMatch ? value.slice(numMatch[0].length) : ''
  const num = numMatch ? parseInt(numMatch[1]) : null

  const ref = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView || num === null || !countRef.current) return
    const controls = animate(0, num, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(v) {
        if (countRef.current) countRef.current.textContent = Math.round(v).toString()
      },
    })
    return () => controls.stop()
  }, [isInView, num])

  return (
    <div ref={ref} className="py-10 px-8 text-center first:pl-0 last:pr-0">
      <div className="font-fraunces text-4xl md:text-5xl font-light text-gold mb-1 leading-none">
        {num !== null ? (
          <><span ref={countRef}>0</span>{suffix}</>
        ) : value}
      </div>
      <div className="text-[12px] font-semibold text-white tracking-wide mb-1">{label}</div>
      <div className="text-[11px] text-white/35 tracking-wide">{sub}</div>
    </div>
  )
}
