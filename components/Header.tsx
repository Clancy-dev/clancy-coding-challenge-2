'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Headphones, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Project', href: '/project' },
  { name: 'Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [activeLink, setActiveLink] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-[5vh] z-50 left-0 right-0 bg-dark-blue text-white py-4 px-4 md:px-8 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logisco Logo" width={150} height={50} />
        </div>
        <nav className="hidden md:flex space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.href.slice(1)}`}
              className={`py-2 px-3 text-sm font-medium transition-colors ${
                activeLink === item.name
                  ? 'text-orange bg-white bg-opacity-10 border-b-2 border-orange'
                  : 'hover:text-orange'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item.name);
                const section = document.getElementById(item.href.slice(1));
                if (section) {
                  const yOffset = -80; // Adjust this value based on your header height
                  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({top: y, behavior: 'smooth'});
                }
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Headphones className="text-orange" size={24} />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">24/7</span>
            </div>
            <div>
              <p className="text-xs">Call us anytime</p>
              <p className="font-bold">+01177564321</p>
            </div>
          </div>
          <Button className="bg-orange text-white hover:bg-orange-600">Request a Quote</Button>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 bottom-0 w-3/4 bg-dark-blue p-6 overflow-y-auto">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`#${item.href.slice(1)}`}
                  className={`py-2 px-3 text-sm font-medium transition-colors ${
                    activeLink === item.name
                      ? 'text-orange bg-white bg-opacity-10 rounded-md'
                      : 'text-white hover:text-orange'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(item.name);
                    const section = document.getElementById(item.href.slice(1));
                    if (section) {
                      const yOffset = -80; // Adjust this value based on your header height
                      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({top: y, behavior: 'smooth'});
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2 text-white">
                <div className="relative">
                  <Headphones className="text-orange" size={24} />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">24/7</span>
                </div>
                <div>
                  <p className="text-xs">Call us anytime</p>
                  <p className="font-bold">+01177564321</p>
                </div>
              </div>
              <Button className="w-full bg-orange text-white hover:bg-orange-600">Request a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

