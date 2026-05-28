import { Heart } from 'lucide-react'
import PackageCard from '../components/PackageCard'
import Footer from '../components/Footer'
import { PACKAGES } from '../config/packages.config'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50">
      {/* Hero */}
      <section className="px-4 pt-20 pb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-body font-semibold px-4 py-1.5 rounded-full mb-8">
          <Heart className="w-3.5 h-3.5" fill="currentColor" />
          <span>Revolut fizetés</span>
        </div>

        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-sky-900 mb-5 leading-tight tracking-tight max-w-xl mx-auto">
          Támogasd az ország egy mozdítható cigányát!
        </h1>

        <div className="flex items-center gap-3 justify-center mt-10">
          <div className="h-px bg-gray-200 w-16" />
          <span className="font-body text-gray-400 text-xs uppercase tracking-widest">
            válassz egy csomagot
          </span>
          <div className="h-px bg-gray-200 w-16" />
        </div>
      </section>

      {/* Package grid */}
      <section className="px-4 pb-8 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p className="font-body text-center text-gray-300 text-xs mt-10">
          A fizetés Revolut-on keresztül történik · Biztonságos és gyors
        </p>
      </section>

      <Footer />
    </div>
  )
}
