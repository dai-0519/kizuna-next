'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/#why', label: 'Why KIZUNA' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const navBg = isHome
    ? scrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm' : 'bg-transparent'
    : 'bg-navy-dark'

  const isLight = isHome && scrolled  // 白背景になるのはホームでスクロール後のみ
  const logoColor = isLight ? 'text-navy' : 'text-white'
  const linkColor = isLight ? 'text-black/45 hover:text-navy' : 'text-white/55 hover:text-white'
  const burgerColor = isLight ? 'bg-navy' : 'bg-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'} ${navBg}`}>
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`font-fraunces text-[20px] font-light italic tracking-wide transition-colors duration-300 ${logoColor}`}>
            KIZUNA <span className="text-gold not-italic">Journey</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${linkColor}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="text-[11px] font-medium tracking-[0.1em] uppercase bg-gold text-white px-5 py-2.5 hover:bg-gold-dark transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer bg-none border-none p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-[1.5px] block transition-colors ${burgerColor}`} />
            <span className={`w-6 h-[1.5px] block transition-colors ${burgerColor}`} />
            <span className={`w-6 h-[1.5px] block transition-colors ${burgerColor}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[99] bg-navy-dark flex flex-col items-center justify-center gap-8 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button
          className="absolute top-6 right-7 text-3xl text-white cursor-pointer bg-transparent border-none"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {[...links, { href: '/#contact', label: 'Contact' }].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-fraunces text-4xl text-white font-light italic hover:text-gold transition-colors duration-200"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
