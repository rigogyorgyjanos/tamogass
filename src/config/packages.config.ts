import type { LucideIcon } from 'lucide-react'
import { Flame, Zap, Utensils, Users } from 'lucide-react'

export interface Package {
  id: string
  name: string
  description: string
  price: number
  icon: LucideIcon
  popular?: boolean
  badge?: string
}

export const REVOLUT_TAG = 'gyrgyjde5i'

export function getRevolutLink(amount: number): string {
  return `https://revolut.me/${REVOLUT_TAG}?amount=${amount * 100}&currency=HUF`
}

export const PACKAGES: Package[] = [
  {
    id: 'cigi',
    name: '1 doboz cigi',
    description: 'A legősibb öröm. Egyszerű, klasszikus, muszáj.',
    price: 3000,
    icon: Flame,
  },
  {
    id: 'cigi-hell',
    name: '1 doboz cigi + 1 Hell',
    description: 'Nem kell magyarázat. Ez a tökéletes kombó.',
    price: 3500,
    icon: Zap,
    popular: true,
    badge: 'Legnépszerűbb',
  },
  {
    id: 'mcdonalds',
    name: "McDonald's",
    description: 'Igazi étkezés. Burger, sültkrumpli, cola. Semmi extra.',
    price: 5000,
    icon: Utensils,
  },
  {
    id: 'mcdonalds-2fo',
    name: "McDonald's + 1 fő",
    description: 'Kétszer annyi öröm. Mert néha van kivel megosztani.',
    price: 10000,
    icon: Users,
  },
]
