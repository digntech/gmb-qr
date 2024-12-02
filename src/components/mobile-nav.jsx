import { Home, Star, BarChart, Settings } from 'lucide-react'
import Link from 'next/link'

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg">
      <ul className="flex justify-around items-center h-16">
        <li>
          <Link href="/" className="flex flex-col items-center p-2 hover:text-blue-400 transition-colors duration-200">
            <Home size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex flex-col items-center p-2 hover:text-blue-400 transition-colors duration-200">
            <Star size={20} />
            <span className="text-xs mt-1">Reviews</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex flex-col items-center p-2 hover:text-blue-400 transition-colors duration-200">
            <BarChart size={20} />
            <span className="text-xs mt-1">Analytics</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex flex-col items-center p-2 hover:text-blue-400 transition-colors duration-200">
            <Settings size={20} />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

