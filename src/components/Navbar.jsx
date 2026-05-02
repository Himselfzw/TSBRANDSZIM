import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/graphics-design', label: 'GRAPHICS' },
    { path: '/photography', label: 'PHOTOGRAPHY' },
    { path: '/clothing', label: 'CLOTHING' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black border-b-2 border-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="font-anton text-2xl text-red hover:text-white transition-colors">
            TS BRANDS ZIM
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-inter transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-red border-b-2 border-red'
                    : 'text-white hover:text-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-red transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t-2 border-white">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-inter transition-colors ${
                  isActive(link.path) ? 'text-red' : 'text-white hover:text-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar