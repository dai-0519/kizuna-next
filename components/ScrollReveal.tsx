'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export default function ScrollReveal({ children, delay = 0, className, direction = 'up' }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? 24 : 0,
        x: direction === 'left' ? -20 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
