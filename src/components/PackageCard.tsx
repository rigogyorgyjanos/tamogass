import { useNavigate } from 'react-router-dom'
import type { Package } from '../config/packages.config'
import { getRevolutLink } from '../config/packages.config'

interface PackageCardProps {
  pkg: Package
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const navigate = useNavigate()
  const IconComponent = pkg.icon

  function handleSupport() {
    window.open(getRevolutLink(pkg.price), '_blank', 'noopener,noreferrer')
    navigate('/koszonom')
  }

  return (
    <div
      className={`relative flex flex-col bg-white rounded-3xl p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${
        pkg.popular
          ? 'border-sky-400 shadow-lg shadow-sky-100'
          : 'border-gray-100 shadow-sm'
      }`}
    >
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="bg-sky-500 text-white text-xs font-semibold px-4 py-1 rounded-full font-body tracking-wide">
            {pkg.badge}
          </span>
        </div>
      )}

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${
          pkg.popular
            ? 'bg-sky-100'
            : 'bg-gray-50 group-hover:bg-sky-50'
        }`}
      >
        <IconComponent
          className={`w-7 h-7 transition-colors duration-300 ${
            pkg.popular
              ? 'text-sky-500'
              : 'text-gray-400 group-hover:text-sky-500'
          }`}
        />
      </div>

      <h3 className="font-heading text-2xl font-bold text-sky-900 mb-2 leading-tight">
        {pkg.name}
      </h3>
      <p className="font-body text-gray-400 text-sm mb-6 leading-relaxed flex-1">
        {pkg.description}
      </p>

      <div className="flex items-center justify-between gap-3">
        <span className="font-body font-bold text-2xl text-sky-900">
          {pkg.price.toLocaleString('hu-HU')} Ft
        </span>
        <button
          onClick={handleSupport}
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-body font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-sm"
        >
          Támogat
        </button>
      </div>
    </div>
  )
}
