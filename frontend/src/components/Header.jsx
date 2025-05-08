"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-[#1F1F2E] flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F4A300] to-[#f8c156] flex items-center justify-center mr-2 shadow-md">
              <span className="text-white font-bold">GA</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1F1F2E] to-[#3a3a5a]">
              Gajanan Academy
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-[#1F1F2E] hover:text-[#F4A300] font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A300] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-[#1F1F2E] hover:text-[#F4A300] font-medium relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A300] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#courses" className="text-[#1F1F2E] hover:text-[#F4A300] font-medium relative group">
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A300] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#inquiry" className="text-[#1F1F2E] hover:text-[#F4A300] font-medium relative group">
            Inquiry
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A300] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-[#1F1F2E] hover:text-[#F4A300] font-medium relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A300] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://wa.me/9173337926?text=Hi%20I%20want%20to%20inquire%20about%20tuition%20classes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center"
          >
            <span className="mr-2">WhatsApp Now</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1F1F2E] p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#"
              className="text-[#1F1F2E] hover:text-[#F4A300] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#1F1F2E] hover:text-[#F4A300] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#courses"
              className="text-[#1F1F2E] hover:text-[#F4A300] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#inquiry"
              className="text-[#1F1F2E] hover:text-[#F4A300] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Inquiry
            </a>
            <a
              href="#contact"
              className="text-[#1F1F2E] hover:text-[#F4A300] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://wa.me/9173337926?text=Hi%20I%20want%20to%20inquire%20about%20tuition%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">WhatsApp Now</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
