import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Logisco</h3>
          <p className="mb-4">Your trusted logistics partner for efficient and reliable solutions.</p>
          <div className="flex space-x-4">
            <Facebook size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
            <Twitter size={20} />
            <Youtube size={20} />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/projects">Recent Projects</Link></li>
            <li><Link href="/blog">Latest News</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center"><MapPin size={16} className="mr-2" /> 123 Logistics St, San Francisco, CA 94122</li>
            <li className="flex items-center"><Phone size={16} className="mr-2" /> +01177564321</li>
            <li className="flex items-center"><Mail size={16} className="mr-2" /> info@logisco.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="p-2 w-full" />
            <button type="submit" className="bg-orange text-white p-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2023 Logisco. All rights reserved.</p>
      </div>
    </footer>
  )
}

