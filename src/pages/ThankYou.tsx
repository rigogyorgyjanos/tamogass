import { useNavigate } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function ThankYou() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-sm mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart className="w-12 h-12 text-orange-500" fill="currentColor" />
        </div>

        <h1 className="font-heading text-6xl md:text-7xl font-bold text-sky-900 mb-5 leading-none">
          Köszönöm!
        </h1>

        <p className="font-body text-gray-500 text-base leading-relaxed mb-3">
          Komolyan, ez sokat jelent. A Revolut ablakban tudod befejezni a fizetést.
        </p>
        <p className="font-body text-gray-400 text-sm mb-12">
          Minden fillér jó helyre kerül. Ígérem.
        </p>

        <button
          onClick={() => navigate('/')}
          className="font-body font-semibold text-sky-500 hover:text-sky-700 transition-colors duration-200 cursor-pointer text-sm underline underline-offset-4"
        >
          Vissza a főoldalra
        </button>
      </div>
    </div>
  )
}
