"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-slate-800 dark:text-white transition-transform hover:scale-105"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Carrer", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-700 dark:text-slate-200 hover:text-primary font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-800 dark:text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg absolute top-full left-0 right-0 py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {["Home", "About", "Skill", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 dark:text-slate-200 hover:text-primary font-medium py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

