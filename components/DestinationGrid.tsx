import Image from 'next/image'
import Link from 'next/link'

const DESTINATIONS = [
  { slug: 'tokyo',    name: 'Tokyo',    subtitle: '東京', img: '/images/destinations/tokyo.jpg' },
  { slug: 'kyoto',   name: 'Kyoto',    subtitle: '京都', img: '/images/destinations/kyoto.jpg' },
  { slug: 'osaka',   name: 'Osaka',    subtitle: '大阪', img: '/images/destinations/osaka.jpg' },
  { slug: 'hakone',  name: 'Hakone',   subtitle: '箱根', img: '/images/destinations/hakone.jpg' },
  { slug: 'hokkaido',name: 'Hokkaido', subtitle: '北海道',img: '/images/destinations/hokkaido.jpg' },
  { slug: 'okinawa', name: 'Okinawa',  subtitle: '沖縄', img: '/images/destinations/okinawa.jpg' },
]

type Props = {
  variant: 'strip' | 'grid'
}

export default function DestinationGrid({ variant }: Props) {
  const items = variant === 'strip' ? DESTINATIONS.slice(0, 4) : DESTINATIONS

  if (variant === 'strip') {
    return (
      <section className="grid grid-cols-2 md:grid-cols-4 h-[60vh]">
        {items.map((dest) => (
          <Link
            key={dest.slug}
            href={`/destinations/${dest.slug}`}
            className="relative overflow-hidden group"
          >
            <Image src={dest.img} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-navy-dark/25 group-hover:bg-navy-dark/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy-dark/70 to-transparent">
              <div className="font-fraunces text-lg italic text-white">{dest.name}</div>
              <div className="text-[10px] tracking-[0.15em] text-white/50 uppercase mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore →</div>
            </div>
          </Link>
        ))}
      </section>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
      {items.map((dest) => (
        <Link
          key={dest.slug}
          href={`/destinations/${dest.slug}`}
          className="group relative aspect-[4/5] overflow-hidden bg-navy block"
        >
          <Image src={dest.img} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <div className="font-fraunces text-xl font-light italic text-white">{dest.name}</div>
            <div className="text-[10px] text-white/40 tracking-wide mt-0.5">{dest.subtitle}</div>
            <div className="text-[10px] tracking-[0.12em] text-white/40 uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View details →</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
      ))}
    </div>
  )
}
