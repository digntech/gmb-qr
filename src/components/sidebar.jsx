import { Home, Star, Settings, BarChart, LogOut } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <div className="hidden md:block fixed w-64 bg-gray-900 text-white h-screen shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">essyQR</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Home size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Star size={20} />
                <span>Reviews</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <BarChart size={20} />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <LogOut size={20} />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

